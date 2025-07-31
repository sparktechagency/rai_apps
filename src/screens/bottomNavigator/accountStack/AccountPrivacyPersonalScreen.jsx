import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveWidth } from "react-native-responsive-dimensions";

const AccountPrivacyPersonalScreen = ({ navigation }) => {
  const userInfo = {
    name: "Timur Romanenko",
    username: "romanenko123",
    email: "example@gmail.com",
    dateOfBirth: "Jan 1, 2000",
    gender: "Male",
    bio: "bio content",
    location: "your location",
  };

  const handleGoBack = () => {
    if (navigation) {
      navigation.goBack();
    } else {
      console.log("Go back pressed");
    }
  };

  const InfoField = ({ label, value, onPress, className }) => (
    <Pressable
      className={`px-5 py-5 min-h-[70px] border-b border-[#F0F0F0] ${className || ""}`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text className="text-base font-SemiBold text-black mb-2">{label}</Text>
      <Text
        className={`text-base font-Rrgular leading-[22px] ${
          value ? "text-[#333]" : "text-[#C7C7CC] italic"
        }`}
      >
        {value || `Enter ${label.toLowerCase()}`}
      </Text>
    </Pressable>
  );

  const handleFieldPress = (fieldName) => {
    console.log(`Edit ${fieldName} pressed`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}

      {/* Header */}
      <View className="flex-row items-center  p-5 ">
        <Pressable
          onPress={handleGoBack}
          className="w-10 h-10 justify-center items-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} color="#000" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Personal Information
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      {/* Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ paddingTop: 20 }}
      >
        {/* Fields */}
        <View className="bg-white">
          <InfoField
            label="Name"
            value={userInfo.name}
            onPress={() => handleFieldPress("Name")}
          />
          <InfoField
            label="Username"
            value={userInfo.username}
            onPress={() => handleFieldPress("Username")}
          />
          <InfoField
            label="Email"
            value={userInfo.email}
            onPress={() => handleFieldPress("Email")}
          />
          <InfoField
            label="Date Of Birth"
            value={userInfo.dateOfBirth}
            onPress={() => handleFieldPress("Date Of Birth")}
          />
          <InfoField
            label="Gender"
            value={userInfo.gender}
            onPress={() => handleFieldPress("Gender")}
          />
          <InfoField
            label="Bio"
            value={userInfo.bio}
            onPress={() => handleFieldPress("Bio")}
          />
          <InfoField
            label="Location"
            value={userInfo.location}
            onPress={() => handleFieldPress("Location")}
            className="border-b-0"
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default AccountPrivacyPersonalScreen;
