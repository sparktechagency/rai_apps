// import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import LookbookItemsTab from "./createLookbookComponents/LookbookItemsTab";
// import LookbookOutfitsTab from "./createLookbookComponents/LookbookOutfitsTab";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react-native";
// import { responsiveWidth } from "react-native-responsive-dimensions";


// const TAB_IDS = {
//   LookbookItems: "Items",
//   LookbookOutfits: "Outfit",

// };

// const TAB_OPTIONS = [
//   { id: TAB_IDS.LookbookItems, label: "Items" },
//   { id: TAB_IDS.LookbookOutfits, label: "Outfit" },

// ];

// const CreateLookbookScreen = () => {
//   const [activeTab, setActiveTab] = useState(TAB_IDS.LookbookItems);

//   const [searchText, setSearchText] = useState("");
// console.log(activeTab);

//   const navigation = useNavigation();
//   const handleGoBack = () => {
//     if (navigation) navigation.goBack();
//     else console.log("Go back pressed");
//   };
//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* Header */}
//       <View className="flex-row items-center  p-5 ">
//         <Pressable
//           onPress={handleGoBack}
//           className="w-10 h-10 items-center justify-center -ml-2"
//           activeOpacity={0.7}
//         >
//           <ArrowLeft size={20} strokeWidth={2} />
//         </Pressable>
//         <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
//           Lookbooks
//         </Text>
//         <View
//           style={{
//             width: responsiveWidth(10),
//           }}
//         />
//       </View>

//       {/* Tab Navigation */}
//       <View className="bg-white px-4 py-2 flex-row">
//         {TAB_OPTIONS.map((tab) => (
//           <Pressable
//             key={tab.id}
//             className="flex-1 py-3"
//             onPress={() => setActiveTab(tab.id)}
//           >
//             <Text
//               className={`text-center text-base font-Medium  ${
//                 activeTab === tab.id
//                   ? "text-textPrimary border-b-2 border-borderAction"
//                   : "text-textPrimary"
//               }`}
//               style={activeTab === tab.id ? styles.activeTab : {}}
//             >
//               {tab.label}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       <View className="flex-row items-center px-4 py-2 bg-white gap-3">
//         {/* Search Input */}
//         <View className="flex-1 flex-row items-center  border border-gray-200 rounded-2xl px-4 py-1 ">
//           {/* Search Icon */}
//           <Search size={18} color="#C5BFD1" />

//           {/* Text Input */}
//           <TextInput
//             className="flex-1 text-base text-textPrimary px-2 font-Medium"
//             placeholder="Search"
//             placeholderTextColor="#9ca3af"
//             value={searchText}
//             onChangeText={setSearchText}
//             returnKeyType="search"
//           />
//         </View>

//         {/* Filter Button */}
//         <Pressable
//           className="p-4 bg-surfaceAction rounded-xl items-center justify-center"
//           // onPress={handleFilter}
//         >
//           <SlidersHorizontal size={20} color={"white"} />
//         </Pressable>
//       </View>


//       {activeTab === TAB_IDS.LookbookItems && <LookbookItemsTab />}
//       {activeTab === TAB_IDS.LookbookOutfits && <LookbookOutfitsTab/>}
      
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: "#7c3aed",
//     paddingBottom: 8,
//   },
// });

// export default CreateLookbookScreen;

import { View, Text, Pressable, TextInput, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

import LookbookItemsTab from "./createLookbookComponents/LookbookItemsTab";
import LookbookOutfitsTab from "./createLookbookComponents/LookbookOutfitsTab";

import { TabView, SceneMap } from "react-native-tab-view";

const TAB_IDS = {
  LookbookItems: "Items",
  LookbookOutfits: "Outfit",
};

const TAB_OPTIONS = [
  { key: "items", title: "Items" },
  { key: "outfit", title: "Outfit" },
];

const CreateLookbookScreen = () => {
  const layout = useWindowDimensions();
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [index, setIndex] = useState(0);

  const [routes] = useState(TAB_OPTIONS);

  const handleGoBack = () => {
    if (navigation) navigation.goBack();
    else console.log("Go back pressed");
  };

  const renderScene = SceneMap({
    items: LookbookItemsTab,
    outfit: LookbookOutfitsTab,
  });

  const handleTabPress = (i) => setIndex(i);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center  p-5 ">
        <Pressable
          onPress={handleGoBack}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Lookbooks
        </Text>
        <View style={{ width: responsiveWidth(10) }} />
      </View>

      {/* Tab Header */}
      <View className="bg-white px-4 py-2 flex-row">
        {routes.map((tab, i) => (
          <Pressable
            key={tab.key}
            className="flex-1 py-3"
            onPress={() => handleTabPress(i)}
          >
            <Text
              className={`text-center text-base font-Medium ${
                index === i
                  ? "text-textPrimary border-b-2 border-borderAction"
                  : "text-textPrimary"
              }`}
              style={index === i ? styles.activeTab : {}}
            >
              {tab.title}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Search & Filter */}
      <View className="flex-row items-center px-4 py-2 bg-white gap-3">
        <View className="flex-1 flex-row items-center border border-gray-200 rounded-2xl px-4 py-1">
          <Search size={18} color="#C5BFD1" />
          <TextInput
            className="flex-1 text-base text-textPrimary px-2 font-Medium"
            placeholder="Search"
            placeholderTextColor="#9ca3af"
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
          />
        </View>
        <Pressable className="p-4 bg-surfaceAction rounded-xl items-center justify-center">
          <SlidersHorizontal size={20} color={"white"} />
        </Pressable>
      </View>

      {/* Swipeable Tabs */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        swipeEnabled
         renderTabBar={() => null} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#7c3aed",
    paddingBottom: 8,
  },
});

export default CreateLookbookScreen;
