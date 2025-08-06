// import { View, Text, Pressable, ScrollView, Image } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft } from "lucide-react-native";
// import { responsiveWidth } from "react-native-responsive-dimensions";
// import SuggestedTab from "./communityTabs/SuggestedTab";
// import FollowingTab from "./communityTabs/FollowingTab";
// import FollowersTab from "./communityTabs/FollowersTab";

// const TAB_IDS = {
//   Suggested: "Suggested",
//   Following: "Following",
//   Followers: "Followers",
// };
// const TAB_OPTIONS = [
//   { id: TAB_IDS.Suggested, label: "Suggested" },
//   { id: TAB_IDS.Following, label: "Following" },
//   { id: TAB_IDS.Followers, label: "Followers" },
// ];

// const MyCommunityScreen = () => {
//   const navigation = useNavigation();
//   const [activeTab, setActiveTab] = useState("Suggested");
 

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <View className="flex-row items-center  p-5 ">
//         <Pressable
//           onPress={() => navigation.goBack()}
//           activeOpacity={0.7}
//           className="w-10 h-10 justify-center items-center -ml-2"
//         >
//           <ArrowLeft color="#81739A" />
//         </Pressable>
//         <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
//           My Community
//         </Text>
//         <View
//           style={{
//             width: responsiveWidth(10),
//           }}
//         />
//       </View>
//       <View className="bg-white px-4 py-2 flex-row">
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
//        {/* Tab Content */}
//       {activeTab === TAB_IDS.Suggested && <SuggestedTab  />}
//       {activeTab === TAB_IDS.Following && <FollowingTab />}
//       {activeTab === TAB_IDS.Followers && (
//         <FollowersTab  />
//       )}

      
//     </SafeAreaView>
//   );
// };

// export default MyCommunityScreen;


import React, { useState } from "react";
import { View, Text, Pressable, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import SuggestedTab from "./communityTabs/SuggestedTab";
import FollowingTab from "./communityTabs/FollowingTab";
import FollowersTab from "./communityTabs/FollowersTab";

const MyCommunityScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "suggested", title: "Suggested" },
    { key: "following", title: "Following" },
    { key: "followers", title: "Followers" },
  ]);

  const renderScene = SceneMap({
    suggested: SuggestedTab,
    following: FollowingTab,
    followers: FollowersTab,
  });

  const renderTabBar = (props) => (
    <View className="flex-row bg-white px-4 pt-2">
      {props.navigationState.routes.map((route, i) => {
        const isActive = i === props.navigationState.index;
        return (
          <Pressable
            key={route.key}
            className="flex-1 py-3"
            onPress={() => setIndex(i)}
          >
            <Text
              className={`text-center text-base font-Medium ${
                isActive
                  ? "text-textPrimary border-b-2 border-borderAction pb-2"
                  : "text-textPrimary opacity-60"
              }`}
            >
              {route.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-5">
        <Pressable
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          className="w-10 h-10 justify-center items-center -ml-2"
        >
          <ArrowLeft color="#81739A" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          My Community
        </Text>
        <View style={{ width: 40 }} /> {/* placeholder for alignment */}
      </View>

      {/* TabView */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
};

export default MyCommunityScreen;
