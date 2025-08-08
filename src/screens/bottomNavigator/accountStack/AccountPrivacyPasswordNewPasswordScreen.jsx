import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountPrivacyPasswordNewPasswordScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [description2, setDescription2] =useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoBack = () => {
    navigation?.goBack?.();
  };

  const handleSend = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title for your feedback");
      return;
    }

    if (!description.trim()) {
      Alert.alert("Error", "Please enter a description");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      Alert.alert("Success", "Your feedback has been sent successfully!", [
        {
          text: "OK",
          onPress: () => {
            setTitle("");
            setDescription("");
            handleGoBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to send feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = title.trim() && description.trim();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 "
      >
        {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
        {/* Header */}
        <View className="flex-row items-center  p-5 ">
          <Pressable
            onPress={handleGoBack}
            activeOpacity={0.7}
            className="w-10 h-10 justify-center items-center -ml-2"
          >
            <ArrowLeft color="#81739A" />
          </Pressable>
          <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
            Password
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
          keyboardShouldPersistTaps="handled"
        >
          <View className="px-5 pt-8">
            {/* <Text className="text-3xl font-SemiBold text-black text-center mb-3">
              Did we forget something?
            </Text>
            <Text className="text-md text-gray-500 text-center leading-6 mb-10 px-2 font-Medium">
              We don't bite. Get in touch with our support team if you've got
              any.
            </Text> */}

            {/* Title Input */}
            <View className="mb-6">
              <Text className="text-lg font-Medium text-black mb-2">
                Current Password
              </Text>
              <TextInput
                className={`border rounded-xl px-4 py-3 h-12 text-base font-Medium text-black ${
                  title ? "border-borderAction bg-white" : "border-gray-200 "
                }`}
                placeholder="Type a strong password"
                placeholderTextColor="#C7C7CC"
                value={title}
                onChangeText={setTitle}
                maxLength={100}
                returnKeyType="next"
                // blurOnSubmit={false}
              />
            </View>

            {/* Description Input */}
            <View className="mb-6">
              <Text className="text-lg font-Medium text-black mb-2">
                New Password
              </Text>
              <TextInput
                className={`border rounded-xl px-4 py-3  text-base font-Medium text-black ${
                  description
                    ? "border-borderAction bg-white"
                    : "border-gray-200 "
                }`}
                placeholder="Type a strong password"
                placeholderTextColor="#C7C7CC"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={8}
                textAlignVertical="top"
                maxLength={1000}
                returnKeyType="done"
              />
            </View>

            <View className="mb-6">
              <Text className="text-lg font-Medium text-black mb-2">
                Confirm Password
              </Text>
              <TextInput
                className={`border rounded-xl px-4 py-3  text-base font-Medium text-black ${
                  description
                    ? "border-borderAction bg-white"
                    : "border-gray-200 "
                }`}
                placeholder="Re-type password"
                placeholderTextColor="#C7C7CC"
                value={description2}
                onChangeText={setDescription2}
                multiline
                numberOfLines={8}
                textAlignVertical="top"
                maxLength={1000}
                returnKeyType="done"
              />
            </View>

            <View className="py-5">
              <Pressable
                onPress={handleSend}
                disabled={!isFormValid || isSubmitting}
                activeOpacity={0.8}
                className={`p-4 rounded-2xl justify-center items-center shadow-md ${
                  isSubmitting ? "bg-indigo-300" : "bg-surfaceAction"
                }`}
              >
                <Text
                  className={`text-xl font-Medium 
                    text-white
                  `}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>

        {/* Send Button */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AccountPrivacyPasswordNewPasswordScreen;
