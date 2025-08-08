import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Switch,
  ScrollView,
  StatusBar,
  Modal,
} from "react-native";
import {
  Bell,
  Languages,
  Settings,
  HelpCircle,
  Star,
  Share,
  LogOut,
  ChevronRight,
  X,
} from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomSwitch from "./tabComponents/CustomSwitch";
import CustomLanguageSelector from "./tabComponents/CustomLanguageSelector";
import { useNavigation } from "@react-navigation/native";



export const SHARE_OPTIONS = [
  { img: require('../../../assets/images/fb.png'), label: 'Facebook' },
  { img: require('../../../assets/images/insta.png'), label: 'Instagram' },
  { img: require('../../../assets/images/x.png'), label: 'X' },
  { img: require('../../../assets/images/copy.png'), label: 'Copy Link' },
];

const ShareSheet = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/40">
        <View
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 25,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 10,
          }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between mb-5">
            <Pressable onPress={onClose}>
              <View className="p-1 rounded-full bg-gray-200">
                <X size={22} />
              </View>
            </Pressable>
            <Text className="font-bold text-2xl">Share Outfit</Text>
            <View style={{ width: 32 }} /> {/* Spacer */}
          </View>

          {/* Options */}
          <View className="flex-row w-full justify-between gap-2 mt-2">
            {SHARE_OPTIONS.map((item, index) => (
              <View key={index} className="justify-center items-center gap-1">
                <Image
                  source={item.img}
                  style={{ width: 50, height: 50, resizeMode: 'contain' }}
                />
                <Text className="font-medium text-base">{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};



const AccountScreen = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const navigation = useNavigation();
  const [showShareModal, setShowShareModal] = useState(false);

  // This would come from your backend API
  const availableLanguages = ["ENG", "RUS"];
  const MenuItem = ({ Icon, title, rightElement, onPress, className }) => (
    <Pressable
      className={`flex-row items-center justify-between p-5  ${className}`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center flex-1 gap-2">
        {Icon && <Icon size={20} stroke="#000" />}
        <Text className="text-base font-Medium text-black flex-1">{title}</Text>
      </View>
      {rightElement}
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-5 items-center ">
        <Text className="text-xl font-SemiBold text-black">Account</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View className="items-center px-5">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            }}
            className="w-20 h-20 rounded-full mb-4 border border-borderAction"
          />
          <Text className="text-lg font-SemiBold text-textPrimary mb-1">
            Mahfuzur Rahman
          </Text>
          <Text className="text-base text-textSecondary font-Regular">
            @useremail
          </Text>
        </View>

        {/* Quick Settings Section */}
        <View className="">
          <Text className="text-lg font-SemiBold text-textPrimary px-5 ">
            Quick Setting
          </Text>

          <MenuItem
            Icon={Bell}
            title="Notification"
            className=" "
            rightElement={
              <CustomSwitch
                value={notificationEnabled}
                onValueChange={setNotificationEnabled}
                trackColor={{ false: "#E5E5E5", true: "#5700FE" }}
                thumbColor="#FFFFFF"
              />
            }
            // rightElement={
            //   <View className="bg-gray-200 px-3 py-1.5 rounded-full">
            //     <Text className="text-xs font-medium text-gray-600">ENG</Text>
            //   </View>
            // }
          />

          <MenuItem
            Icon={Languages}
            title="Language"
            className=""
            rightElement={
              <CustomLanguageSelector
                selectedLanguage={selectedLanguage}
                languages={availableLanguages}
                onLanguageChange={setSelectedLanguage}
              />
            }
          />
        </View>

        {/* Account Section */}
        <View className="">
          <Text className="text-lg font-SemiBold text-textPrimary px-5 ">
            Account
          </Text>

          <MenuItem
            Icon={Settings}
            title="Privacy & Settings"
            className=""
            rightElement={<ChevronRight size={20} stroke="#000" />}
            onPress={() => {
              navigation.navigate("AccountStack", {
                screen: "AccountPrivacy", // This is inside the nested AccountPrivacyStack
              });
            }}
          />

          <MenuItem
            Icon={HelpCircle}
            title="Feedback & Help"
            className=""
            rightElement={<ChevronRight size={20} stroke="#000" />}
            onPress={() =>
              navigation.navigate("AccountStack", {
                screen: "AccountFeedback", // This is inside the nested AccountPrivacyStack
              })
            }
          />

          <MenuItem
            Icon={Star}
            title="Rate Rai"
            className=""
            onPress={() => console.log("Rate Rai pressed")}
          />

          <MenuItem
            Icon={Share}
            title="Share Profile"
            className=""
            onPress={() => setShowShareModal(true)}
          />

          <MenuItem
            Icon={LogOut}
            title="Logout"
            onPress={() => console.log("Logout pressed")}
          />
        </View>
      </ScrollView>
      <ShareSheet visible={showShareModal} onClose={()=>setShowShareModal(false)} />
    </SafeAreaView>
  );
};

export default AccountScreen;
