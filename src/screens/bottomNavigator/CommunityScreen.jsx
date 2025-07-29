// import { EllipsisVertical, MoveRight } from "lucide-react-native";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Pressable,
//   Modal,
// } from "react-native";
// import { responsiveWidth } from "react-native-responsive-dimensions";
// import { SafeAreaView } from "react-native-safe-area-context";

// const CommunityScreen = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       user: {
//         name: "User123",
//         avatar:
//           "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//         isFollowing: true,
//       },
//       reactions: 357,
//       isReacted: true,
//     },
//     {
//       id: 2,
//       user: {
//         name: "User123",
//         avatar:
//           "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//         isFollowing: false,
//       },
//       reactions: 357,
//       isReacted: true,
//     },
//   ]);

//   const toggleFollow = (postId) => {
//     setPosts(
//       posts.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               user: { ...post.user, isFollowing: !post.user.isFollowing },
//             }
//           : post
//       )
//     );
//   };

//   const OutfitDisplay = () => (
//     <View className="items-center mb-6 bg-gray-100 rounded-3xl p-6 mx-4">
//       {/* Top Row - T-shirt and Jacket */}
//       <View
//         className="flex-row items-start justify-center mb-6"
//         style={{ width: "100%" }}
//       >
//         {/* Accessories (left side) */}
//         <View className="items-center mr-6 mt-8">
//           {/* Bracelet/Ring */}
//           <View className="w-8 h-8 bg-orange-100 rounded-full mb-3 border-2 border-orange-300">
//             <View className="w-4 h-4 bg-orange-400 rounded-full self-center mt-1" />
//           </View>

//           {/* Watch face */}
//           <View className="w-6 h-6 bg-gray-100 rounded-full mb-3 border border-gray-300">
//             <View className="w-2 h-2 bg-gray-600 rounded-full self-center mt-1" />
//           </View>

//           {/* Watch strap */}
//           <View className="w-4 h-16 bg-gray-800 rounded-full" />
//         </View>

//         {/* T-shirt */}
//         <View className="items-center mr-6">
//           <View className="w-28 h-32 bg-yellow-50 rounded-2xl border-4 border-orange-400 items-center justify-center relative overflow-hidden">
//             {/* T-shirt collar */}
//             <View className="absolute top-0 w-12 h-6 bg-orange-400 rounded-b-lg" />
//             {/* Small logo/brand mark */}
//             <View className="absolute top-6 right-4 w-2 h-2 bg-gray-800 rounded-full" />
//             {/* Orange sleeve accent */}
//             <View className="absolute right-0 top-8 w-6 h-16 bg-orange-400" />
//             {/* Bottom accent */}
//             <View className="absolute bottom-8 w-8 h-2 bg-orange-400 rounded" />
//           </View>
//         </View>

//         {/* Jacket */}
//         <View className="items-center">
//           <View className="w-28 h-36 bg-orange-600 rounded-2xl items-center justify-center relative overflow-hidden">
//             {/* Jacket collar */}
//             <View className="absolute top-2 w-16 h-8 bg-orange-700 rounded-b-xl" />
//             {/* Zipper */}
//             <View className="absolute right-3 top-12 w-1 h-16 bg-orange-800 rounded" />
//             {/* Pocket accent */}
//             <View className="w-6 h-6 bg-orange-800 rounded-full absolute top-8" />
//           </View>
//         </View>
//       </View>

//       {/* Bottom Row - Shorts, Shoes, Bag */}
//       <View
//         className="flex-row items-end justify-center mt-4"
//         style={{ width: "100%" }}
//       >
//         {/* Shorts */}
//         <View className="items-center mr-8">
//           <View className="w-24 h-20 bg-blue-900 rounded-2xl items-center justify-center relative overflow-hidden">
//             {/* Waistband */}
//             <View className="absolute top-0 w-full h-4 bg-blue-800" />
//             {/* Button */}
//             <View className="absolute top-1 w-2 h-2 bg-blue-700 rounded-full" />
//             {/* Pocket line */}
//             <View className="absolute top-6 left-2 w-1 h-8 bg-blue-800 rounded" />
//           </View>
//         </View>

//         {/* Shoes */}
//         <View className="items-center mr-8">
//           <View className="w-20 h-12 bg-white rounded-2xl border-2 border-gray-200 items-center justify-center relative overflow-hidden">
//             {/* Shoe sole */}
//             <View className="absolute bottom-0 w-full h-3 bg-gray-100 rounded-b-2xl" />
//             {/* Laces area */}
//             <View className="w-12 h-3 bg-gray-300 rounded-full" />
//             {/* Brand accent */}
//             <View className="absolute top-2 right-2 w-3 h-3 bg-orange-400 rounded-full" />
//           </View>
//         </View>

//         {/* Bag */}
//         <View className="items-center">
//           <View className="w-20 h-24 bg-gray-800 rounded-2xl items-center justify-center relative overflow-hidden">
//             {/* Bag flap */}
//             <View className="absolute top-0 w-full h-8 bg-gray-700 rounded-t-2xl" />
//             {/* Strap attachment */}
//             <View className="absolute top-4 w-12 h-2 bg-orange-600 rounded" />
//             {/* Side strap */}
//             <View className="absolute top-8 w-2 h-8 bg-orange-600 rounded" />
//             {/* Buckle */}
//             <View className="w-4 h-4 border-2 border-orange-600 rounded absolute top-6" />
//           </View>
//         </View>
//       </View>
//     </View>
//   );

//   const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

//   // Function to open the bottom sheet
//   const handleOpenBottomSheet = () => {
//     setIsBottomSheetOpen(true);
//   };

//   // Function to close the bottom sheet
//   const handleCloseBottomSheet = () => {
//     setIsBottomSheetOpen(false);
//   };

//   const PostCard = ({ post }) => (
//     <View className="bg-white mb-4 rounded-3xl overflow-hidden">
//       {/* User Header */}
//       <View className="flex-row items-center justify-between p-4 pb-2">
//         <View className="flex-row items-center">
//           <Image
//             source={{ uri: post.user.avatar }}
//             className="w-10 h-10 rounded-full mr-3"
//           />
//           <Text className="text-[16px] font-Medium text-textPrimary">
//             {post.user.name}
//           </Text>
//         </View>

//         <Pressable
//           className={`px-4 py-2 rounded-full ${
//             post.user.isFollowing ? "bg-surfaceSecondary" : "bg-purple-600"
//           }`}
//           onPress={() => toggleFollow(post.id)}
//         >
//           <Text
//             className={`text-base font-Medium ${
//               post.user.isFollowing ? "text-textSecondary" : "text-white"
//             }`}
//           >
//             {post.user.isFollowing ? "✓  Following" : "+  Follow"}
//           </Text>
//         </Pressable>
//       </View>

//       {/* Outfit Display */}
//       <View className="bg-surfaceSecondary m-4 rounded-xl">
//         <Image
//           source={require("../../../assets/images/itemTab.webp")}
//           className="rounded-lg"
//         />
//       </View>

//       {/* Interaction Bar */}
//       <View className="  p-4 pt-0">
//         {/* Reactions */}
//         <View className="flex-row items-center">
//           <View className="flex-row items-center mr-4">
//             <Text className="text-base mr-2">😍🔥</Text>
//             <Text className="text-base font-medium text-gray-900">
//               {post.reactions}
//             </Text>
//           </View>
//         </View>
//         <View className="flex-row items-center justify-between w-full">
//           <View className="flex-row items-center">
//             <Pressable className="bg-surfaceSecondary px-4 py-1 rounded-full flex-row items-center gap-1">
//               <Text className="text-sm text-gray-600">Tap to react</Text>
//               <MoveRight color="white" />
//             </Pressable>
//             <View className="flex-row items-center">
//               <Pressable onPress={handleOpenBottomSheet} className="p-2 mr-2">
//                 <Image source={require("../../../assets/images/send.png")} />
//               </Pressable>
//             </View>
//           </View>

//           {/* Action Buttons */}
//           <View className="flex-row items-center">
//             <Pressable className="p-2 mr-2">
//               <Image source={require("../../../assets/images/flag.png")} />
//             </Pressable>
//           </View>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       {/* <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" /> */}

//       {/* Header */}
//       <View
//         className="bg-white px-4 py-3 flex-row items-center justify-between"
//         style={styles.header}
//       >
//         <View className="flex-row items-center">
//           <Image
//             source={{
//               uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//             }}
//             className=" rounded-full mr-3 border border-borderAction"
//             style={{ width: responsiveWidth(13), height: responsiveWidth(13) }}
//           />
//           <View>
//             <Text className="text-lg font-SemiBold text-textPrimary">
//               Hey, Mahfuz !
//             </Text>
//             <Text className="text-base font-Medium text-textSecondary">
//               Explore your community
//             </Text>
//           </View>
//         </View>

//         <View className="flex-row items-center">
//           <Pressable className="p-2 mr-2">
//             <Image source={require("../../../assets/images/noti.webp")} />
//           </Pressable>
//           <Pressable className="p-2">
//             <EllipsisVertical />
//           </Pressable>
//         </View>
//       </View>

//       {/* Posts Feed */}
//       <ScrollView className="flex-1 px-0 py-4">
//         {posts.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </ScrollView>
//       <View style={styles.container}>
//         {/* <Pressable
//           onPress={handleOpenBottomSheet}
//           style={{
//             width: "90%",
//             alignItems: "center",
//             justifyContent: "center",
//             borderWidth: 1,
//             borderColor: "#86827e",
//             paddingVertical: 12,
//             borderRadius: 8,
//           }}
//         >
//           <Text
//             style={{
//               color: "#86827e",
//               fontSize: 16,
//               fontFamily: "Urbanist-Medium",
//             }}
//           >
//             Create Outfit
//           </Text>
//         </Pressable> */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           // We use the state here to toggle visibility of Bottom Sheet
//           visible={isBottomSheetOpen}
//           // We pass our function as default function to close the Modal
//           onRequestClose={handleCloseBottomSheet}
//         >
//           <View style={[styles.bottomSheet, { height: 300}]}>
//             // First Section of Bottom sheet with Header and close button
//             <View
//               style={{
//                 flex: 0,
//                 width: "100%",
//                 justifyContent: "space-between",
//                 flexDirection: "row",
//               }}
//             >

//             </View>
//             // First Section of Bottom sheet with Header and close button //
//             Section with Information
//             <View style={{ paddingVertical: 16 }}>
//               <View
//                 style={{
//                   opacity: 0.2,
//                   height: 1,
//                   borderWidth: 1,
//                   borderColor: "#86827e",
//                   marginVertical: 16,
//                 }}
//               />
//               <View
//                 style={{
//                   flex: 0,
//                   justifyContent: "flex-start",
//                   flexDirection: "row",
//                   alignItems: "center",
//                 }}
//               ></View>

//               <View style={{ paddingTop: 16 }}></View>

//               <View style={{ paddingTop: 16 }}></View>

//               <View style={{ paddingTop: 16 }}></View>

//               <View style={{ paddingTop: 16, flex: 0, flexDirection: "row" }}>
//                 <View style={{ paddingLeft: 12 }} />
//               </View>
//             </View>
//             // Section with Information
//           </View>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     paddingTop: 50, // Account for status bar
//   },
//   // container: {
//   //   flex: 1,
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   // },
//   bottomSheet: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: "white",
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     paddingVertical: 23,
//     paddingHorizontal: 25,
//     bottom: 0,
//     borderWidth: 1,
//     borderColor: "red",
//   },
// });

// export default CommunityScreen;

import { EllipsisVertical, MoveRight, X } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

const reportReasons = [
  "I just don't like it",
  "Hate or exploitation",
  "Selling or promoting restricted items",
  "Nudity or sexual activity",
  "Violence or dangerous organizations",
  "It's spam",
  "Bullying or harassment",
  "False information",
  "Intellectual property violation",
  "Something else",
];

const CommunityScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "User123",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        isFollowing: true,
      },
      reactions: 357,
      isReacted: true,
    },
    {
      id: 2,
      user: {
        name: "User123",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        isFollowing: false,
      },
      reactions: 357,
      isReacted: true,
    },
  ]);

  const toggleFollow = (postId) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              user: {
                ...post.user,
                isFollowing: !post.user.isFollowing,
              },
            }
          : post
      )
    );
  };

  const [activeSheet, setActiveSheet] = useState(null);
  const [selectedReason, setSelectedReason] = useState("");

  const openSheet = (type) => setActiveSheet(type);
  const closeSheet = () => setActiveSheet(null);
  const handleReport = () => {
    if (selectedReason) {
      // onReport(selectedReason);
      setSelectedReason("");
      closeSheet();
    }
  };
  const PostCard = ({ post }) => (
    <View className="bg-white mb-4 rounded-3xl overflow-hidden">
      <View className="flex-row items-center justify-between p-4 pb-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: post.user.avatar }}
            className="w-10 h-10 rounded-full mr-3"
          />
          <Text className="text-[16px] font-Medium text-textPrimary">
            {post.user.name}
          </Text>
        </View>
        <Pressable
          className={`px-4 py-2 rounded-full ${
            post.user.isFollowing ? "bg-surfaceSecondary" : "bg-purple-600"
          }`}
          onPress={() => toggleFollow(post.id)}
        >
          <Text
            className={`text-base font-Medium ${
              post.user.isFollowing ? "text-textSecondary" : "text-white"
            }`}
          >
            {post.user.isFollowing ? "\u2713  Following" : "+  Follow"}
          </Text>
        </Pressable>
      </View>

      <View className="bg-surfaceSecondary m-4 rounded-xl">
        <Image
          source={require("../../../assets/images/itemTab.webp")}
          className="rounded-lg"
        />
      </View>

      <View className="p-4 pt-0">
        <View className="flex-row items-center">
          <View className="flex-row items-center mr-4">
            <Text className="text-base mr-2">\ud83d\ude0d\ud83d\udd25</Text>
            <Text className="text-base font-medium text-gray-900">
              {post.reactions}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row items-center">
            <Pressable className="bg-surfaceSecondary px-4 py-1 rounded-full flex-row items-center gap-1">
              <Text className="text-sm text-gray-600">Tap to react</Text>
              <MoveRight color="white" />
            </Pressable>
            <Pressable onPress={() => openSheet("share")} className="p-2 ml-2">
              <Image source={require("../../../assets/images/send.png")} />
            </Pressable>
          </View>
          <Pressable onPress={() => openSheet("report")} className="p-2">
            <Image source={require("../../../assets/images/flag.png")} />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="bg-white px-4 py-3 flex-row items-center justify-between"
        style={styles.header}
      >
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            }}
            className="rounded-full mr-3 border border-borderAction"
            style={{ width: responsiveWidth(13), height: responsiveWidth(13) }}
          />
          <View>
            <Text className="text-lg font-SemiBold text-textPrimary">
              Hey, Mahfuz !
            </Text>
            <Text className="text-base font-Medium text-textSecondary">
              Explore your community
            </Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <Pressable className="p-2 mr-2">
            <Image source={require("../../../assets/images/noti.webp")} />
          </Pressable>
          <Pressable className="p-2">
            <EllipsisVertical />
          </Pressable>
        </View>
      </View>

      <ScrollView className="flex-1 px-0 py-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={activeSheet !== null}
        onRequestClose={closeSheet}
      >
        {activeSheet === "share" && (
          <View style={[styles.bottomSheet]}>
            <View style={styles.bottomSheetHeader}>
              <Pressable onPress={closeSheet}>
                <View style={styles.closeText}>
                  <X />
                </View>
              </Pressable>
              <Text className="font-Bold text-2xl">Share Outfit</Text>
            </View>

            <View className="flex-row w-full justify-between gap-1 mt-5">
              <View className="justify-center items-center gap-1">
                <Image source={require("../../../assets/images/fb.png")} />
                <Text className="font-Medium text-lg ">Facebook</Text>
              </View>
              <View className="justify-center items-center gap-1">
                <Image source={require("../../../assets/images/insta.png")} />
                <Text className="font-Medium text-lg ">Instagram</Text>
              </View>

              <View className="justify-center items-center gap-1">
                <Image source={require("../../../assets/images/x.png")} />
                <Text className="font-Medium text-lg ">X</Text>
              </View>
              <View className="justify-center items-center gap-1">
                <Image source={require("../../../assets/images/copy.png")} />
                <Text className="font-Medium text-lg ">Copy Link</Text>
              </View>
            </View>
          </View>
        )}

        {activeSheet === "report" && (
          <View style={[styles.bottomSheet]}>
            <View style={styles.bottomSheetHeader}>
              <Pressable onPress={closeSheet}>
                <View style={styles.closeText2}>
                  <X />
                </View>
              </Pressable>
              <Text className="font-Bold text-2xl">Report</Text>
            </View>
            <ScrollView className="flex-1  w-full mt-2">
              <Text className="text-xl font-semibold text-gray-900 mb-8">
                Why are you reporting this?
              </Text>

              {/* Report Reasons List */}
              <View className="gap-2">
                {reportReasons.map((reason, index) => (
                  <Pressable
                    key={index}
                    onPress={() => setSelectedReason(reason)}
                    className={`p-4 w-full rounded-2xl border ${
                      selectedReason === reason
                        ? "bg-purple-50 border-purple-200"
                        : "bg-gray-50 border-transparent"
                    }`}
                    style={[
                      styles.reasonButton,
                      selectedReason === reason && styles.selectedReasonButton,
                    ]}
                  >
                    <Text
                      className={`text-base ${
                        selectedReason === reason
                          ? "text-purple-900 font-medium"
                          : "text-gray-900"
                      }`}
                    >
                      {reason}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </ScrollView>

            <View className="p-4 w-full">
              <Pressable
                onPress={handleReport}
                disabled={!selectedReason}
                className={`py-4 w-full px-6 rounded-2xl ${
                  selectedReason ? "bg-purple-600" : "bg-gray-300"
                }`}
                style={[
                  styles.reportButton,
                  !selectedReason && styles.disabledButton,
                ]}
              >
                <Text
                  className={`text-center text-base font-semibold ${
                    selectedReason ? "text-white" : "text-gray-500"
                  }`}
                >
                  Report
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    bottom: 0,
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    position: "relative",
    // backgroundColor: "red",
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    // textAlign: "center",
  },
  closeText: {
    fontSize: 16,
    color: "#888",
    position: "absolute",
    top: -10,
    // left: responsiveWidth(5),
    right: responsiveWidth(26),
  },
    closeText2: {
    fontSize: 16,
    color: "#888",
    position: "absolute",
    top: -10,
    // left: responsiveWidth(5),
    right: responsiveWidth(33),
  },
  divider: {
    opacity: 0.2,
    height: 1,
    width: "100%",
    backgroundColor: "#86827e",
    marginVertical: 16,
  },
  sheetText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});

export default CommunityScreen;
