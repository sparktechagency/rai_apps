import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
  Modal,
  Image,
} from "react-native";
import {
  ArrowLeft,
  UserRound,
  SquarePen,
  LockKeyhole,
  Languages,
  ChevronRight,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ icon: Icon, title, onPress }) => (
  <Pressable
    onPress={onPress}
    className="flex-row items-center justify-between px-5 py-4 "
    activeOpacity={0.7}
  >
    <View className="flex-row items-center gap-4 flex-1">
      {/* <Icon
        size={20}
        strokeWidth={1.5}
        className="text-textPrimary font-Medium text-lg"
      /> */}
      <Text className="text-base text-black font-Medium">{title}</Text>
    </View>
    <ChevronRight size={18} strokeWidth={1.5} className="text-gray-400" />
  </Pressable>
);

const DeleteAccountModal = ({ visible, user, onCancel, onConfirm }) => {
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

const AccountPrivacyPasswordScreen = () => {
  const handleGoBack = () => {
    if (navigation) navigation.goBack();
    else console.log("Go back pressed");
  };
  const navigation = useNavigation();
  const [showUnblockModal, setShowUnblockModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleUnblockPress = () => {
    setSelectedUser();
    setShowUnblockModal(true);
  };

  const handleUnblockConfirm = () => {
    if (selectedUser) {
      setBlockedUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    }
    setShowUnblockModal(false);
    setSelectedUser(null);
  };
  const handleUnblockCancel = () => {
    setShowUnblockModal(false);
    setSelectedUser(null);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <StatusBar barStyle="dark-content" /> */}
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
          Password & Privacy
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingTop: 20 }}
      >
        <View className="bg-white">
          <MenuItem
            icon={UserRound}
            title="Password"
            onPress={() =>
              navigation.navigate("AccountPrivacyPasswordNewPassword")
            }
          />
          <MenuItem
            icon={SquarePen}
            title="Privacy"
            onPress={() =>
              navigation.navigate("AccountPrivacyPasswordPrivacySetup")
            }
          />
          <MenuItem
            icon={LockKeyhole}
            title="Blocked Profile"
            onPress={() => navigation.navigate("AccountPrivacyPasswordBlocked")}
          />
          <Pressable
            onPress={() => handleUnblockPress()}
            className="flex-row items-center justify-between px-5 py-4 "
            activeOpacity={0.7}
          >
            <View className="flex-row items-center gap-4 flex-1">
              <Text className="text-base text-red-500 font-Medium">
                Delete Account
              </Text>
            </View>
            <ChevronRight
              size={18}
              strokeWidth={1.5}
              className="text-gray-400"
            />
          </Pressable>
        </View>
        <DeleteAccountModal
          visible={showUnblockModal}
          user={selectedUser}
          onCancel={handleUnblockCancel}
          onConfirm={handleUnblockConfirm}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountPrivacyPasswordScreen;
