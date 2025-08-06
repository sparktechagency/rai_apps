// import { View, Text, Pressable, Image } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeft, EllipsisVertical, LockKeyhole } from "lucide-react-native";
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from "react-native-responsive-dimensions";
// import { TAB_IDS, TAB_OPTIONS } from "../bottomNavigator/WardrobeScreen";
// import CommunityItemsTab from "./communityTabs/CommunityItemsTab";
// import CommunityOutfitsTab from "./communityTabs/CommunityOutfitsTab";
// import CommunityLookbooksTab from "./communityTabs/CommunityLookbooksTab";

// const CommunityProfileScreen = () => {
//   const navigation = useNavigation();
//   const [posts, setPosts] = useState({
//     id: 1,
//     user: {
//       name: "User123",
//       username: "@user",

//       avatar:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       isFollowing: true,
//     },
//     reactions: 357,
//     isReacted: true,
//   });
//   const toggleFollow = (postId) => {
//     setPosts((prev) =>
//       prev.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               user: {
//                 ...post.user,
//                 isFollowing: !post.user.isFollowing,
//               },
//             }
//           : post
//       )
//     );
//   };
//   const ProfileInfo = ({ post }) => {
//     // console.log(post.user.name);

//     return (
//       <View className="flex-row items-center justify-between px-5 ">
//         <View className="flex-row items-center">
//           <Image
//             source={{
//               uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//             }}
//             className=" rounded-full mr-3 border border-borderAction"
//             style={{
//               width: responsiveWidth(13),
//               height: responsiveWidth(13),
//             }}
//           />
//           <View>
//             <Text className="text-[16px] font-Medium text-textPrimary">
//               {post.user.name}
//             </Text>
//             <Text className="text-[14px] font-Regular text-textPrimary">
//               {post.user.username}
//             </Text>
//           </View>
//         </View>
//         <Pressable
//           className={`px-4 py-2 rounded-full ${
//             post.user.isFollowing ? "bg-surfaceSecondary" : "bg-surfaceAction"
//           }`}
//           onPress={() => toggleFollow(post.id)}
//         >
//           <Text
//             className={`text-base font-Medium ${
//               post.user.isFollowing ? "text-textSecondary" : "text-white"
//             }`}
//           >
//             {post.user.isFollowing ? "\u2713  Following" : "+  Follow"}
//           </Text>
//         </Pressable>
//       </View>
//     );
//   };
//   const [showPublic, setShowPublic] = useState(false);
//   const [activeTab, setActiveTab] = useState("Items");

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* header */}
//       <View className="flex-row justify-between items-center  p-5 ">
//         <Pressable
//           onPress={() => navigation.goBack()}
//           activeOpacity={0.7}
//           className="w-10 h-10 justify-center items-center -ml-2"
//         >
//           <ArrowLeft color="#81739A" />
//         </Pressable>
//         <Pressable
//           onPress={() => navigation.goBack()}
//           activeOpacity={0.7}
//           className="w-10 h-10 justify-center items-center -ml-2"
//         >
//           <EllipsisVertical color="#000" />
//         </Pressable>
//       </View>

//       <ProfileInfo post={posts} />

//       {showPublic && (
//         <Text
//           className="text-[16px] font-Medium text-textSecondary"
//           style={{
//             paddingHorizontal: responsiveWidth(4),
//             paddingTop: responsiveHeight(1),
//           }}
//         >
//           User nbio
//         </Text>
//       )}
//       {!showPublic && (
//         <View className="flex-1 justify-center items-center gap-2">
//           <Pressable onPress={() => setShowPublic(true)}>
//             <LockKeyhole />
//           </Pressable>
//           <Text className="text-[14px] font-SemiBold text-textPrimary">
//             This profile is private
//           </Text>
//           <Text className="text-[14px] font-Regular text-textPrimary">
//             Send them a follow request to view their wardrobe
//           </Text>
//         </View>
//       )}

//       {showPublic && (
//         <>
//           <View className="bg-white px-4 py-2 flex-row">
//             {TAB_OPTIONS.map((tab) => (
//               <Pressable
//                 key={tab.id}
//                 className="flex-1 py-3"
//                 onPress={() => setActiveTab(tab.id)}
//               >
//                 <Text
//                   className={`text-center text-base font-Medium ${activeTab === tab.id ? "text-textPrimary border-b-2 border-borderAction pb-2" : "text-textPrimary"}`}
//                 >
//                   {tab.label}
//                 </Text>
//               </Pressable>
//             ))}
//           </View>
//           {/* Tab Content */}
//           {activeTab === TAB_IDS.Items && <CommunityItemsTab />}
//           {activeTab === TAB_IDS.Outfit && <CommunityOutfitsTab />}
//           {activeTab === TAB_IDS.Lookbooks && <CommunityLookbooksTab />}
//         </>
//       )}
//     </SafeAreaView>
//   );
// };

// export default CommunityProfileScreen;


import React, { useState } from "react";
import { View, Text, Pressable, Image, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, EllipsisVertical, LockKeyhole } from "lucide-react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { SceneMap, TabView } from "react-native-tab-view";

import CommunityItemsTab from "./communityTabs/CommunityItemsTab";
import CommunityOutfitsTab from "./communityTabs/CommunityOutfitsTab";
import CommunityLookbooksTab from "./communityTabs/CommunityLookbooksTab";
import { TAB_IDS, TAB_OPTIONS } from "../bottomNavigator/WardrobeScreen";

const CommunityProfileScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [posts, setPosts] = useState({
    id: 1,
    user: {
      name: "User123",
      username: "@user",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isFollowing: true,
    },
    reactions: 357,
    isReacted: true,
  });

const toggleFollow = () => {
  setPosts((prev) => ({
    ...prev,
    user: {
      ...prev.user,
      isFollowing: !prev.user.isFollowing,
    },
  }));
};

  const ProfileInfo = ({ post }) => (
    <View className="flex-row items-center justify-between px-5 ">
      <View className="flex-row items-center">
        <Image
          source={{ uri: post.user.avatar }}
          className="rounded-full mr-3 border border-borderAction"
          style={{ width: responsiveWidth(13), height: responsiveWidth(13) }}
        />
        <View>
          <Text className="text-[16px] font-Medium text-textPrimary">
            {post.user.name}
          </Text>
          <Text className="text-[14px] font-Regular text-textPrimary">
            {post.user.username}
          </Text>
        </View>
      </View>
      <Pressable
        className={`px-4 py-2 rounded-full ${
          post.user.isFollowing ? "bg-surfaceSecondary" : "bg-surfaceAction"
        }`}
        onPress={() => toggleFollow()}
      >
        <Text
          className={`text-base font-Medium ${
            post.user.isFollowing ? "text-textSecondary" : "text-white"
          }`}
        >
          {post.user.isFollowing ? "✓  Following" : "+  Follow"}
        </Text>
      </Pressable>
    </View>
  );

  const [showPublic, setShowPublic] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: TAB_IDS.Items, title: "Items" },
    { key: TAB_IDS.Outfit, title: "Outfits" },
    { key: TAB_IDS.Lookbooks, title: "Lookbooks" },
  ]);

  const renderScene = SceneMap({
    [TAB_IDS.Items]: CommunityItemsTab,
    [TAB_IDS.Outfit]: CommunityOutfitsTab,
    [TAB_IDS.Lookbooks]: CommunityLookbooksTab,
  });

  const renderTabBar = (props) => {
    return (
      <View className="flex-row bg-white px-4 pt-3">
        {props.navigationState.routes.map((route, i) => {
          const isActive = index === i;
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
                    : "text-textPrimary"
                }`}
              >
                {route.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center  p-5 ">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 justify-center items-center -ml-2"
        >
          <ArrowLeft color="#81739A" />
        </Pressable>
        <Pressable
          onPress={() => {}}
          className="w-10 h-10 justify-center items-center"
        >
          <EllipsisVertical color="#000" />
        </Pressable>
      </View>

      <ProfileInfo post={posts} />

      {/* Private / Public section */}
      {!showPublic ? (
        <View className="flex-1 justify-center items-center gap-2">
          <Pressable onPress={() => setShowPublic(true)}>
            <LockKeyhole />
          </Pressable>
          <Text className="text-[14px] font-SemiBold text-textPrimary">
            This profile is private
          </Text>
          <Text className="text-[14px] font-Regular text-textPrimary">
            Send them a follow request to view their wardrobe
          </Text>
        </View>
      ) : (
        <>
          <Text
            className="text-[16px] font-Medium text-textSecondary"
            style={{
              paddingHorizontal: responsiveWidth(4),
              paddingTop: responsiveHeight(1),
            }}
          >
            User bio
          </Text>

          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default CommunityProfileScreen;
