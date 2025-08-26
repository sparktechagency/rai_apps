import { useNavigation } from "@react-navigation/native";
import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
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
import { useFormContext, Controller } from "react-hook-form";
import { useRegisterMutation } from "../../redux/slices/authSlice";

const SignupScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
    clearErrors,
    reset, // ✅ Get reset function from useFormContext
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [register, { isLoading }] = useRegisterMutation(); // ✅ Track loading state

  // ✅ handle signup
  const handleSignup = async (data) => {
    console.log("📩 Signup Data:", data);
    clearErrors();

    try {
      const response = await register({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }).unwrap();

      console.log("✅ Signup Success:", response);

      // 🧹 clear form + errors
      reset({
        email: "",
        password: "",
        confirmPassword: "",
      });

      // 👉 navigate on success
      navigation.navigate("SetProfile");
    } catch (err) {
      console.log("❌ Signup Error:", err);

      // Handle different error formats
      const errorMessage =
        err?.data?.message || err?.error || "Signup failed. Please try again.";

      setError("root", {
        type: "manual",
        message: errorMessage,
        formType: "signup",
      });

      // Show alert for better user feedback
      // Alert.alert("Signup Failed", errorMessage);
    }
  };
  console.log("Signup Errors:", errors);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            paddingHorizontal: responsiveWidth(5),
            paddingTop: StatusBar.currentHeight || 0,
            paddingBottom: responsiveHeight(2),
          }}
          className="flex-1"
        >
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              // justifyContent: "space-between",
              gap: responsiveHeight(2),
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* Form Content */}
            <View style={{ gap: responsiveHeight(2) }}>
              {/* Logo Section */}
              <View className="items-center">
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
              <View className="items-center">
                <Text className="text-[24px] font-SemiBold text-textPrimary mb-2">
                  Create an account
                </Text>
              </View>

              {/* Email */}
              <View>
                <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                  Email
                </Text>
                <Controller
                  control={control}
                  name="email"
                  // rules={{
                  //   required: "Email is required",
                  //   pattern: {
                  //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  //     message: "Enter a valid email address",
                  //   },
                  // }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <TextInput
                        className="border border-borderTertiary rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                        placeholder="Enter email"
                        placeholderTextColor="#A0A0A0"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                      {error && (
                        <Text className="text-red-500 text-sm mt-1">
                          {error.message}
                        </Text>
                      )}
                    </>
                  )}
                />
              </View>

              {/* Password */}
              <View>
                <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                  New Password
                </Text>
                <Controller
                  control={control}
                  name="password"
                  // rules={{
                  //   required: "Password is required",
                  //   minLength: {
                  //     value: 6,
                  //     message: "Password must be at least 6 characters",
                  //   },
                  // }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <View className="flex-row items-center border border-borderTertiary rounded-2xl bg-white">
                        <TextInput
                          className="flex-1 px-4 py-4 text-base text-gray-900"
                          placeholder="Enter Password"
                          placeholderTextColor="#A0A0A0"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
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
                      {error && (
                        <Text className="text-red-500 text-sm mt-1">
                          {error.message}
                        </Text>
                      )}
                    </>
                  )}
                />
              </View>

              {/* Confirm Password */}
              <View>
                <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                  Confirm Password
                </Text>
                <Controller
                  control={control}
                  name="confirmPassword"
                  // rules={{
                  //   required: "Please confirm your password",
                  //   validate: (value, formValues) =>
                  //     value === formValues.password || "Passwords do not match",
                  // }}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <>
                      <View className="flex-row items-center border border-borderTertiary rounded-2xl bg-white">
                        <TextInput
                          className="flex-1 px-4 py-4 text-base text-gray-900"
                          placeholder="Re-type Password"
                          placeholderTextColor="#A0A0A0"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          secureTextEntry={!showPassword2}
                        />
                        <Pressable
                          className="px-4 py-4"
                          onPress={() => setShowPassword2(!showPassword2)}
                        >
                          {showPassword2 ? (
                            <Eye size={20} color={"#C5BFD1"} />
                          ) : (
                            <EyeClosed size={20} color={"#C5BFD1"} />
                          )}
                        </Pressable>
                      </View>
                      {error && (
                        <Text className="text-red-500 text-sm mt-1">
                          {error.message}
                        </Text>
                      )}
                    </>
                  )}
                />
              </View>
            </View>

            {/* Submit + Extras */}
            <View
              style={{
                gap: responsiveHeight(2),
                // marginTop: responsiveHeight(2),
              }}
            >
              <Pressable
                onPress={handleSubmit(handleSignup)}
                // disabled={!isValid || isLoading}
                disabled={ isLoading}
                // className={`py-4 rounded-xl flex-row items-center justify-center ${
                //   !isValid || isLoading ? "bg-gray-300" : "bg-surfaceAction"
                // }`}
                className={`py-4 rounded-xl flex-row items-center justify-center ${
                   isLoading ? "bg-gray-300" : "bg-surfaceAction"
                }`}
              >
                <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
                  {isLoading ? "Processing..." : "Sign up"}
                </Text>
              </Pressable>

              {errors?.root?.formType === "signup" && (
                <View className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <Text className="text-red-700 text-sm font-Medium text-center">
                    {errors.root.message}
                  </Text>
                </View>
              )}

              <View className="flex-row justify-center items-center ">
                <Text className="text-[14px] text-textSecondary font-Medium">
                  Already have an account?{" "}
                </Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                  <Text className="text-[14px] text-textAction font-Medium">
                    Login
                  </Text>
                </Pressable>
              </View>

              {/* Divider */}
              <View className="flex-row items-center">
                <View className="flex-1 h-px bg-gray-200" />
                <Text className="mx-4 text-base text-textTertiary font-Medium">
                  OR
                </Text>
                <View className="flex-1 h-px bg-gray-200" />
              </View>

              {/* Social Buttons */}
              <View className="flex-row gap-3">
                <Pressable className="flex-1 bg-surfaceSecondary rounded-xl py-4 items-center flex-row justify-center gap-2">
                  <Image
                    source={require("../../../assets/images/google.webp")}
                    style={{
                      width: responsiveWidth(7),
                      height: responsiveWidth(7),
                    }}
                  />
                  <Text className="text-xl text-textAction font-SemiBold">
                    Google
                  </Text>
                </Pressable>
                <Pressable className="flex-1 bg-surfaceSecondary rounded-xl py-4 items-center flex-row justify-center gap-2">
                  <Image
                    source={require("../../../assets/images/apple.webp")}
                    style={{
                      width: responsiveWidth(7),
                      height: responsiveWidth(7),
                    }}
                  />
                  <Text className="text-xl text-textAction font-SemiBold">
                    Apple
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignupScreen;
