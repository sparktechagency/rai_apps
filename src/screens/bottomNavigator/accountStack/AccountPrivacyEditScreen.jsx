import { ArrowLeft, Upload } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar,
  Pressable,
  Image,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import CustomDatePicker from "../tabComponents/CustomDatePicker";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomLocationModal from "../tabComponents/CustomLocationModal";

const AccountPrivacyEditScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gender, setGender] = useState("Male");

  const handleGoBack = () => navigation?.goBack();

  const handleUsernameChange = (text) => {
    setUsername(text);
    setUsernameError(["johndoe", "admin"].includes(text.toLowerCase()));
  };

  const handleDeletePhoto = () => {
    Alert.alert("Delete Photo", "Are you sure you want to delete?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => setPhotoUploaded(false),
      },
    ]);
  };

  const handleSave = async () => {
    if (!name.trim() || !username.trim()) {
      Alert.alert("Error", "Name and Username are required.");
      return;
    }
    if (usernameError) {
      Alert.alert("Error", "Username is already taken.");
      return;
    }
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1500));
    Alert.alert("Success", "Profile updated.", [
      { text: "OK", onPress: handleGoBack },
    ]);
    setIsSubmitting(false);
  };
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const GenderOption = ({ title }) => (
    <TouchableOpacity
      className="flex-row items-center gap-2"
      onPress={() => setGender(title)}
    >
      <View
        className={`w-5 h-5 rounded-full  ${gender === title ? "border-surfaceAction border-4 " : "border-gray-300 border-2"} justify-center items-center`}
      >
        {
          <View
            className={`w-2.5 h-2.5  rounded-full ${gender === title ? "bg-white" : "bg-zinc-200"} `}
          />
        }
      </View>
      <Text
        className={`${gender === title ? "text-violet-500 font-medium" : "text-gray-500"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          paddingHorizontal: responsiveWidth(5),
          paddingTop: StatusBar.currentHeight || 0,
          paddingBottom: responsiveHeight(2),
        }}
      >
        {/* Header */}
        <View className="flex-row items-center pb-5 ">
          <Pressable
            onPress={handleGoBack}
            activeOpacity={0.7}
            className="w-10 h-10 justify-center items-center -ml-2"
          >
            <ArrowLeft color="#81739A" />
          </Pressable>
          <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
            Profile
          </Text>
          <View
            style={{
              width: responsiveWidth(10),
            }}
          />
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text className="text-[18px] font-Semibold text-textPrimary mb-5">
              Add Profile Photo
            </Text>

            <View
              className="w-full border border-gray-400 border-dashed rounded-xl items-center justify-center"
              style={{
                gap: responsiveHeight(3),
                paddingVertical: responsiveHeight(5),
              }}
            >
              <Pressable className="items-center justify-center gap-2">
                <Image
                  source={require("../../../../assets/images/camera.png")}
                />
                <Text className="text-textSecondary text-center font-Medium text-[16px]">
                  Tap the camera to take a photo
                </Text>
              </Pressable>

              <Pressable
                className="bg-surfaceActionTertiary py-4 rounded-full flex-row items-center justify-center gap-3"
                style={{ paddingHorizontal: responsiveWidth(5) }}
              >
                <Upload size={20} color="#f4f4f4" />
                <Text className="text-[16px] text-textPrimaryInverted font-SemiBold">
                  Upload from Gallery
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Form Fields */}
          <View className=" pt-4">
            {/* Name */}
            <View className="mb-6 gap-2">
              <Text className="text-[16px] font-SemiBold text-textPrimary ">
                Name
              </Text>
              <TextInput
                className="border border-gray-200 focus:border-surfaceAction  rounded-xl px-4 py-3 text-base text-black font-Regular"
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#C7C7CC"
                maxLength={50}
              />
            </View>

            {/* Username */}
            <View className="mb-6 gap-2">
              <Text className="ext-[16px] font-SemiBold text-textPrimary ">
                Username
              </Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 text-base ${usernameError ? "border-red-400 bg-red-50" : "border-gray-200 "} font-Regular focus:border-surfaceAction text-black`}
                value={username}
                onChangeText={handleUsernameChange}
                placeholder="Enter username"
                placeholderTextColor="#C7C7CC"
                autoCapitalize="none"
                maxLength={30}
              />
              {usernameError && (
                <Text className="text-red-500 text-sm mt-1">
                  Username already taken
                </Text>
              )}
            </View>
            <CustomDatePicker />
            <View className="mb-6 gap-2">
              <Text className="text-[16px] font-SemiBold text-textPrimary ">
                Bio
              </Text>
              <TextInput
                className="border border-gray-200 focus:border-surfaceAction  rounded-xl px-4 py-3 text-base text-black font-Regular"
                value={name}
                onChangeText={setName}
                placeholder="Enter your bio"
                placeholderTextColor="#C7C7CC"
                maxLength={50}
              />
            </View>
            {/* Gender */}
            <View className="mb-6">
              <Text className="text-base font-semibold text-black mb-2">
                Gender
              </Text>
              <View className="flex-row gap-6">
                <GenderOption title="Male" />
                <GenderOption title="Female" />
                <GenderOption title="Other" />
              </View>
            </View>
            <CustomLocationModal
              visible={showLocationModal}
              onCancel={() => setShowLocationModal(false)}
              onLocationSelect={(location) => {
                setSelectedLocation(location);
                setShowLocationModal(false);
                console.log("Selected location:", location);
              }}
            />
          </View>
        </ScrollView>

        {/* Save Button */}
        <View>
          <TouchableOpacity
            className={`h-12 rounded-xl justify-center items-center ${isSubmitting ? "bg-violet-300" : "bg-surfaceAction"}`}
            onPress={handleSave}
            disabled={isSubmitting}
          >
            <Text className="text-white text-lg font-SemiBold">
              {isSubmitting ? "Saving..." : "Save"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountPrivacyEditScreen;
