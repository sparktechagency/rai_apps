import {
  EllipsisVertical,
  Flag,
  MoveRight,
  Send,
  X,
} from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { contacts, reportReasons } from "../../../assets/data/data";

import EmojiModal from "react-native-emoji-modal";
import { DropdownMenu, ShareSheet, Sidebar } from "./WardrobeScreen";
import { useNavigation } from "@react-navigation/native";

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

  const [emoji, setEmoji] = useState("");

  const PostCard = ({ post }) => (
    <View
      className="bg-white mb-4  overflow-hidden"
      style={{
        gap: responsiveHeight(2),
      }}
    >
      <View className="flex-row items-center justify-between">
        <Pressable
          onPress={() =>
            navigation.navigate("CommunityStack", {
              screen: "CommunityProfile",
            })
          }
          className="flex-row items-center"
        >
          <Image
            source={{ uri: post.user.avatar }}
            className="w-10 h-10 rounded-full mr-3"
          />
          <Text className="text-[16px] font-Medium text-textPrimary">
            {post.user.name}
          </Text>
        </Pressable>
        <Pressable
          className={`px-4 py-2 rounded-full ${
            post.user.isFollowing ? "bg-surfaceSecondary" : "bg-surfaceAction"
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

      <View className="bg-surfaceSecondary rounded-xl">
        <Image
          source={require("../../../assets/images/itemTab.webp")}
          className="rounded-lg"
        />
      </View>

      <View className=" pt-0">
        {/* <View className="flex-row items-center">
          <View className="flex-row items-center mr-4">
            <View className="relative flex-row">

            <Text className="text-base">❤️</Text>
            <Text className="text-base">💛</Text>
            <Text className="text-base">🧡</Text>
            </View>
            <Text className="text-base font-medium text-gray-900">
              {post.reactions}
            </Text>
          </View>
        </View> */}
        <View className="flex-row items-center">
          <View className="flex-row items-center mr-4">
            <Pressable onPress={() => openSheet("reactions")}>
              {/* <Pressable onPress={() => setVisible(true)}> */}
              <View className="flex-row">
                <Text className="text-base z-10">😍</Text>
                <Text className="text-base -ml-2 z-20">🔥</Text>
                <Text className="text-base -ml-2 z-30">🧡</Text>
              </View>
            </Pressable>
            {/* <EmojiPicker /> */}
            <Text className="text-base font-medium text-gray-900">
              {post.reactions}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-row items-center">
            <Pressable
              onPress={() => openSheet("react")}
              className="bg-surfaceSecondary px-4 py-1 rounded-full flex-row items-center gap-1"
            >
              <Text className="text-sm text-gray-600">Tap to react</Text>
              {/* <MoveRight color="white" size={16} /> */}
            </Pressable>
            <Pressable onPress={() => openSheet("share")} className="p-2 ml-2">
              <Send color="black" />
            </Pressable>
          </View>
          <Pressable onPress={() => openSheet("report")} className="p-2">
            <Flag color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );

  const renderContactItem = ({ item }) => (
    <Pressable
      className="flex-row items-center px-5 py-3 border-b border-gray-100 bg-white"
      // onPress={() => handleContactPress(item)}
    >
      <Image
        source={{ uri: item.avatar }}
        className="w-12 h-12 rounded-full mr-3"
      />
      <Text className="flex-1 text-base font-medium text-gray-900">
        {item.name}
      </Text>
      <Text className="text-xl ml-2">{item.emoji}</Text>
    </Pressable>
  );
  const [showShareModal, setShowShareModal] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const ellipsisRef = useRef(null);
  const navigation = useNavigation();
  const handleEllipsisPress = () => {
    if (ellipsisRef.current) {
      ellipsisRef.current.measure((x, y, width, height, pageX, pageY) => {
        setDropdownPosition({ x: pageX, y: pageY + height });
        setShowDropdown(true);
      });
    }
  };
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
      }}
    >
      <View
        className="bg-white  flex-row items-center justify-between "
        style={{
          marginBottom: responsiveHeight(3),
        }}
      >
        <Pressable
          onPress={() => setShowSidebar(true)}
          className="flex-row items-center"
        >
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
        </Pressable>
        <View className="flex-row items-center">
          <Pressable
            onPress={() => navigation.navigate("Notification")}
            className="p-2 mr-2"
          >
            <Image source={require("../../../assets/images/noti.webp")} />
          </Pressable>
          <Pressable
            ref={ellipsisRef}
            onPress={handleEllipsisPress}
            className="p-2"
          >
            <EllipsisVertical />
          </Pressable>
        </View>
      </View>

      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>

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
            {/* <View> */}
            <Text className="text-xl font-SemiBold text-gray-900 mb-8">
              Why are you reporting ths?
            </Text>

            {/* Report Reasons List */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 20,
                // gap: responsiveHeight(3),
              }}
              style={{ maxHeight: responsiveHeight(50), width: "100%" }} // limit but allow scroll
            >
              {reportReasons.map((reason, index) => (
                <Pressable
                  key={index}
                  onPress={() => setSelectedReason(reason)}
                  className={`p-4 w-full rounded-2xl  ${
                    selectedReason === reason ? "bg-zinc-200 " : " "
                  }`}
                  // style={[
                  //   styles.reasonButton,
                  //   selectedReason === reason && styles.selectedReasonButton,
                  // ]}
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
            </ScrollView>
            {/* </View> */}

            <View className="w-full">
              <Pressable
                onPress={handleReport}
                disabled={!selectedReason}
                className={`py-4 w-full px-6 rounded-2xl ${
                  selectedReason ? "bg-surfaceAction" : "bg-gray-300"
                }`}
                style={[
                  styles.reportButton,
                  !selectedReason && styles.disabledButton,
                ]}
              >
                <Text
                  className={`text-center text-xl font-SemiBold ${
                    selectedReason ? "text-white" : "text-gray-500"
                  }`}
                >
                  Report
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        {activeSheet === "reactions" && (
          <Pressable
            onPress={closeSheet}
            className="flex-1 bg-black/50 justify-center items-center"
          >
            {/* Prevent inner modal box from closing when tapped */}
            <Pressable
              onPress={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-[90%] h-[50%] p-4"
            >
              {/* <Text className="font-Bold text-xl mb-4">Reactions</Text> */}

              <FlatList
                data={contacts}
                renderItem={renderContactItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={true}
                className="flex-1"
              />
            </Pressable>
          </Pressable>
        )}
        {activeSheet === "react" && (
          <EmojiModal
            emojiSize={32}
            visible={activeSheet === "react"}
            onEmojiSelected={(emojiObj) => {
              setEmoji(emojiObj.emoji);
              closeSheet();
            }}
            onPressOutside={() => closeSheet()}
          />
        )}
      </Modal>

      <DropdownMenu
        visible={showDropdown}
        onClose={() => setShowDropdown(false)}
        position={dropdownPosition}
      />
      <Sidebar
        visible={showSidebar}
        onClose={() => setShowSidebar(false)}
        setShowShareModal={setShowShareModal}
      />

      <ShareSheet
        visible={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // header: {
  //   paddingTop: 50,
  // },
  emojiPickerContainer: {
    height: 350, // ADD THIS
    width: "90%",
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden",
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
    padding: responsiveWidth(4),
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
    // backgroundColor: 'red',
    padding: 10,
    // left: responsiveWidth(5),
    right: responsiveWidth(20),
  },
  closeText2: {
    fontSize: 16,
    color: "#888",
    position: "absolute",
    top: -10,
    // left: responsiveWidth(5),
    right: responsiveWidth(30),
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
