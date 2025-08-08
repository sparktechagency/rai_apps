import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions,
  Modal,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeft,
  Ban,
  EllipsisVertical,
  Flag,
  LockKeyhole,
  Share,
  X,
} from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SceneMap, TabView } from "react-native-tab-view";

import CommunityItemsTab from "./communityTabs/CommunityItemsTab";
import CommunityOutfitsTab from "./communityTabs/CommunityOutfitsTab";
import CommunityLookbooksTab from "./communityTabs/CommunityLookbooksTab";
import {
  ShareSheet,
  TAB_IDS,
  TAB_OPTIONS,
} from "../bottomNavigator/WardrobeScreen";
import { reportReasons } from "../../../assets/data/data";

export const options = [
  { icon: <Ban />, label: "Block", type: "block" },
  { icon: <Flag />, label: "Report", type: "report" },
  { icon: <Share />, label: "Share Profile" },
];

const BlockAccountModal = ({ visible, onCancel, onConfirm }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Pressable
        className="flex-1 bg-black/50 justify-center items-center px-8"
        activeOpacity={1}
        onPress={onCancel}
      >
        <Pressable
          className="bg-white rounded-3xl p-6 w-full max-w-sm"
          activeOpacity={1}
          onPress={() => {}} // Prevent closing when touching modal content
        >
          {/* User Avatar */}
          <View className="items-center mb-6">
            <View className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>

          {/* Modal Title */}

          {/* Modal Description */}
          <Text className="text-base font-Medium text-gray-600 text-center mb-8 leading-6">
            Your account will be deleted within 30 days
          </Text>

          {/* Action Buttons */}
          <View className="gap-3">
            {/* Unblock Button */}
            <Pressable
              className="bg-red-500 rounded-2xl py-4 items-center"
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-SemiBold">
                Yes, delete account
              </Text>
            </Pressable>

            {/* Cancel Button */}
            <Pressable
              className="bg-gray-200 rounded-2xl py-4 items-center"
              onPress={onCancel}
              activeOpacity={0.8}
            >
              <Text className="text-black text-lg font-SemiBold">Cancel</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const ReportModal = ({
  visible,
  onClose,
  reportReasons,
  selectedReason,
  setSelectedReason,
  handleReport,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      {/* <TouchableWithoutFeedback onPress={onClose}> */}
      <Pressable onPress={onClose} className="flex-1 bg-black/30 justify-end">
        <Pressable
          onPress={() => {}}
          className="bg-white p-6 rounded-t-3xl"
          style={{ maxHeight: responsiveHeight(80) }}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Pressable onPress={onClose} className="p-2">
              <X />
            </Pressable>
            <Text className="text-2xl font-Bold">Report</Text>
            <View className="w-8" /> {/* Placeholder for symmetry */}
          </View>

          {/* Title */}
          <Text className="text-xl font-SemiBold text-gray-900 mb-4">
            Why are you reporting this?
          </Text>

          {/* Report Reasons List */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
              gap: responsiveHeight(3),
            }}
            style={{
              maxHeight: responsiveHeight(50),
              width: "100%",
            }}
          >
            {reportReasons.map((reason, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedReason(reason)}
                className={`p-4 w-full rounded-2xl ${
                  selectedReason === reason ? "bg-zinc-200" : ""
                }`}
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

          {/* Submit Button */}
          <View className="mt-6">
            <Pressable
              onPress={handleReport}
              disabled={!selectedReason}
              className={`py-4 w-full px-6 rounded-2xl ${
                selectedReason ? "bg-surfaceAction" : "bg-gray-300"
              }`}
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
        </Pressable>
      </Pressable>
    </Modal>
  );
};

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

  const [showUnblockModal, setShowUnblockModal] = useState(false);

  const [showThreeDotModal, setShowThreeDotModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const [selectedReason, setSelectedReason] = useState("");

  const ThreeDotSheet = ({ visible, onClose }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <Pressable onPress={onClose} className="flex-1 justify-end bg-black/40">
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 25,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 10,
            }}
          >
            {/* Header */}

            {/* Options */}
            <View
              className="w-full justify-between"
              style={{
                gap: responsiveHeight(2),
              }}
            >
              {options.map((item, index) => (
                <Pressable
                  onPress={() => {
                    if (item.type === "block") {
                      setShowThreeDotModal(false);
                      setShowUnblockModal(true);
                    } else if (item.type === "report") {
                      setShowThreeDotModal(false);
                      setShowReportModal(true);
                    } else {
                      setShowThreeDotModal(false);
                      setShowShareModal(true);
                    }
                  }}
                  key={index}
                  className="flex-row"
                  style={{
                    gap: responsiveHeight(2),
                  }}
                >
                  {item.icon}
                  <Text className="font-medium text-base">{item.label}</Text>
                </Pressable>
              ))}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
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
          onPress={() => setShowThreeDotModal(true)}
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
      <ThreeDotSheet
        visible={showThreeDotModal}
        onClose={() => setShowThreeDotModal(false)}
      />
      <BlockAccountModal
        visible={showUnblockModal}
        onCancel={() => setShowUnblockModal(false)}
        onConfirm={() => setShowUnblockModal(false)}
      />
      <ReportModal
        visible={showReportModal}
        onClose={() => setShowReportModal(false)}
        reportReasons={reportReasons}
        selectedReason={selectedReason}
        setSelectedReason={setSelectedReason}
        handleReport={() => setShowReportModal(false)}
      />
      <ShareSheet
        visible={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </SafeAreaView>
  );
};

export default CommunityProfileScreen;
