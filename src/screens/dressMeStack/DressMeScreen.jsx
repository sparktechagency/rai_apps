// import { View, Text, Pressable } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft } from "lucide-react-native";
// import { responsiveWidth } from "react-native-responsive-dimensions";
// import Item2Tab from "./dressMeComponents/Item2Tab";
// import Item3Tab from "./dressMeComponents/Item3Tab";
// import Item4Tab from "./dressMeComponents/Item4Tab";

// const TAB_IDS = {
//   Items2: "2 Items",
//   Items3: "3 Items",
//   Items4: "4 Items",
// };
// const TAB_OPTIONS = [
//   { id: TAB_IDS.Items2, label: "2 Items" },
//   { id: TAB_IDS.Items3, label: "3 Items" },
//   { id: TAB_IDS.Items4, label: "4 Items" },
// ];

// const DressMeScreen = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState("2 Items");

//   return (
//     <SafeAreaView
//       className="flex-1 bg-white"
//       style={{
//         padding: responsiveWidth(5),
//       }}
//     >
//       <View className="flex-row items-center  ">
//         <Pressable
//           onPress={() => navigation.goBack()}
//           className="w-10 h-10 justify-center items-center -ml-2"
//           activeOpacity={0.7}
//         >
//           <ArrowLeft size={20} color="#000" />
//         </Pressable>
//         <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
//           Dress Me
//         </Text>
//         <View
//           style={{
//             width: responsiveWidth(10),
//           }}
//         />
//       </View>
//       <View className="bg-white  py-2 flex-row">
//         {TAB_OPTIONS.map((tab) => (
//           <Pressable
//             key={tab.id}
//             className="flex-1 py-3"
//             onPress={() => setActiveTab(tab.id)}
//           >
//             <Text
//               className={`text-center text-base font-Medium ${activeTab === tab.id ? "text-textPrimary border-b-2 border-borderAction pb-2" : "text-textPrimary"}`}
//             >
//               {tab.label}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       {activeTab === TAB_IDS.Items2 && <Item2Tab />}
//       {activeTab === TAB_IDS.Items3 && <Item3Tab />}
//       {activeTab === TAB_IDS.Items4 && <Item4Tab />}
//     </SafeAreaView>
//   );
// };

// export default DressMeScreen;

import React, { useEffect, useState } from "react";
import { View, Text, Pressable, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { responsiveWidth } from "react-native-responsive-dimensions";

import Item2Tab from "./dressMeComponents/Item2Tab";
import Item3Tab from "./dressMeComponents/Item3Tab";
import Item4Tab from "./dressMeComponents/Item4Tab";

const TAB_IDS = {
  Items2: "2 Items",
  Items3: "3 Items",
  Items4: "4 Items",
};

const DressMeScreen = () => {
  const route = useRoute();
  console.log(route);
  const tab = route.params?.tab;
  const id = route.params?.id;
  console.log("LINE AT 97", tab , id);

  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: "Items2", title: "2 Items" },
    { key: "Items3", title: "3 Items" },
    { key: "Items4", title: "4 Items" },
  ]);

  // const renderScene = SceneMap({
  //   Items2: Item2Tab,
  //   Items3: Item3Tab,
  //   Items4: Item4Tab,
  // });

const renderScene = ({ route }) => {
  switch (route.key) {
    case "Items2":
      return <Item2Tab id={id} />;
    case "Items3":
      return <Item3Tab id={id} />;
    case "Items4":
      return <Item4Tab id={id} />;
    default:
      return null;
  }
};

  const initialIndex = tab ? routes.findIndex((r) => r.title === tab) : 0;
  const [index, setIndex] = useState(initialIndex);


  // useEffect(() => {
  //   // Map tab value ("2 Items", "3 Items", etc.) to route index
  //   const tabIndex = routes.findIndex((r) => r.title === tab);
  //   console.log(tabIndex);

  //   if (tabIndex !== -1) {
  //     setIndex(tabIndex);
  //   } else {
  //     setIndex(0); // Default to "2 Items" tab
  //   }
  // }, [tab]);

  const renderTabBar = () => (
    <View className="bg-white flex-row py-2">
      {routes.map((tab, i) => (
        <Pressable
          key={tab.key}
          className="flex-1 py-3"
          onPress={() => setIndex(i)}
        >
          <Text
            className={`text-center text-base font-Medium ${
              index === i
                ? "text-textPrimary border-b-2 border-borderAction pb-2"
                : "text-textPrimary"
            }`}
          >
            {tab.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{ padding: responsiveWidth(5) }}
    >
      {/* Header */}
      <View className="flex-row items-center">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 justify-center items-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} color="#000" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Dress Me
        </Text>
        <View style={{ width: responsiveWidth(10) }} />
      </View>

      {/* Custom Tab Bar */}
      {renderTabBar()}

      {/* Swipeable Tabs */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        swipeEnabled={true}
        renderTabBar={() => null} // Disable built-in tab bar
      />
    </SafeAreaView>
  );
};

export default DressMeScreen;
