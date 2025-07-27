import { useNavigation } from "@react-navigation/native";
import { Eye, EyeClosed, MoveLeft } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import OTPTextInput from "react-native-otp-textinput";

const VerifyCodeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const otpInput = useRef(null);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            // flex: 1,
            paddingHorizontal: responsiveWidth(5),
            paddingTop: StatusBar.currentHeight || 0,
            paddingBottom: responsiveHeight(2),
          }}
        >
          {/* Logo Section */}
          <View className="items-center ">
            <Image
              source={require("../../../assets/images/logo.webp")}
              style={{
                width: responsiveWidth(40),
                height: responsiveHeight(15),
              }}
              resizeMode="contain"
            />
          </View>

          {/* Welcome */}
          <View
            className="items-center "
            style={{ marginBottom: responsiveHeight(3) }}
          >
            <Text className="text-[24px] font-SemiBold text-textPrimary mb-2">
              Verify Code
            </Text>
            <Text className="text-[14px] font-Regular text-textSecondary text-center">
              We Sent OTP code to your email example@gmail.com. Enter the code
              below to verify
            </Text>
          </View>

          {/* Form Section */}
          <ScrollView
            contentContainerStyle={{ justifyContent: "center" }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Email */}
            {/* <View style={{ marginBottom: responsiveHeight(2) }}>
              <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                Email
              </Text>
              <TextInput
                className="border border-borderTertiary rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                placeholder="Enter email"
                placeholderTextColor="#A0A0A0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View> */}
            <View className="items-center mb-8">
              <OTPTextInput
                ref={otpInput}
                inputCount={4}
                handleTextChange={(otp) => console.log("Entered OTP:", otp)}
                containerStyle={{
                  width: "80%",
                  justifyContent: "space-between",
                }}
                textInputStyle={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  borderWidth: 1,
                  borderBottomWidth:1,
                  borderColor: "#5700FE",
                  color: "#111827",
                  fontSize: 18,
                  fontWeight: "600",
                }}
                tintColor="#5700FE"      // Active input border color
//   offTintColor="#5700FE" 
              />
            </View>
            {/* Password */}
            {/* <View style={{ marginBottom: responsiveHeight(1) }}>
              <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                Password
              </Text>
              <View className="flex-row items-center border border-borderTertiary rounded-2xl bg-white">
                <TextInput
                  className="flex-1 px-4 py-4 text-base text-gray-900"
                  placeholder="Enter Password"
                  placeholderTextColor="#A0A0A0"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <Pressable
                  className="px-4 py-4"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye size={20} color={"#C5BFD1"} />
                  ) : (
                    <EyeClosed size={20} color={"#C5BFD1"} />
                  )}
                </Pressable>
              </View>
            </View> */}

            {/* Forgot Password */}
            {/* <Pressable
              className="items-end"
              style={{ marginBottom: responsiveHeight(3) }}
            >
              <Text className="text-[16px] text-textAction font-Medium">
                Forgot Password?
              </Text>
            </Pressable> */}

            {/* Login Button */}
            <Pressable
            onPress={() => navigation.navigate("ResetPassword")}
              className="bg-surfaceAction py-4 rounded-xl flex-row items-center justify-center"
              style={{ marginBottom: responsiveHeight(3) }}
            >
              <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
                Next
              </Text>
            </Pressable>

            {/* Create Account */}

            <View className="flex-row justify-center items-center mb-8">
              <Text className="text-[14px] text-textSecondary font-Medium">
                Don’t receive OTP?{" "}
              </Text>
              <Pressable>
                <Text className="text-[14px] text-textAction font-Medium">
                  Resend again
                </Text>
              </Pressable>
            </View>

            <Pressable
              onPress={() => navigation.navigate("Login")}
              className="flex-row justify-center items-center gap-3 mb-8"
            >
              <MoveLeft size={20} color="#09020D" />

              <Text className="text-[16px] text-textPrimary font-SemiBold">
                Back To Login
              </Text>
            </Pressable>

            {/* Divider */}
            {/* <View className="flex-row items-center mb-6">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="mx-4 text-base text-textTertiary font-Medium">
                OR
              </Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View> */}

            {/* Social Buttons */}
            {/* <View className="flex-row gap-3">
              <Pressable className="flex-1 bg-surfaceSecondary  rounded-xl py-4 items-center flex-row justify-center gap-2">
                <Image
                  source={require("../../../assets/images/google.webp")}
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveWidth(8),
                  }}
                />
                <Text className="text-2xl text-textAction font-SemiBold">
                  Google
                </Text>
              </Pressable>
              <Pressable className="flex-1 bg-surfaceSecondary  rounded-xl py-4 items-center flex-row justify-center gap-2">
                <Image
                  source={require("../../../assets/images/apple.webp")}
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveWidth(8),
                  }}
                />
                <Text className="text-2xl text-textAction font-SemiBold">
                  Apple
                </Text>
              </Pressable>
            </View> */}
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default VerifyCodeScreen;
