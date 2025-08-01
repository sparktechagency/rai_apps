// import { StatusBar } from "expo-status-bar";
// import { Upload } from "lucide-react-native";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   SafeAreaView,
//   ScrollView,
//   Pressable,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
// } from "react-native";
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from "react-native-responsive-dimensions";

// const SetProfileScreen = () => {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [selectedGender, setSelectedGender] = useState("Male");
//   const [photoUploaded, setPhotoUploaded] = useState(true);
//   const [usernameError, setUsernameError] = useState(true);

//   const handleGenderSelect = (gender) => setSelectedGender(gender);
//   const handleNext = () => console.log("Next pressed");

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//           style={{
//             flex: 1,
//             paddingHorizontal: responsiveWidth(5),
//             paddingTop: StatusBar.currentHeight || 0,
//             paddingBottom: responsiveHeight(2),
//           }}
//         >
//           {/* Header */}
//           <View
//             className="items-center "
//             style={{ marginVertical: responsiveHeight(3) }}
//           >
//             <Text className="text-[24px] font-SemiBold text-textPrimary mb-2">
//               Personal Data
//             </Text>
//             <Text className="text-[14px] font-Regular text-textSecondary text-center">
//               Please fill all the data to start organizing your wardrobe
//             </Text>
//           </View>

//           {/* Photo Section */}
//           <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//             <View className=" mb-10">
//               <Text className="text-[18px] font-semibold text-gray-900 mb-5">
//                 Add Profile Photo
//               </Text>

//               <View
//                 className="w-full border border-gray-400 border-dashed rounded-xl items-center justify-center"
//                 style={{
//                   gap: responsiveHeight(3),
//                   paddingVertical: responsiveHeight(5),
//                 }}
//               >
//                 <Pressable className="items-center justify-center gap-2">
//                   <Image
//                     source={require("../../../assets/images/camera.png")}
//                   />
//                   <Text className="text-textSecondary text-center font-Medium text-[16px]">
//                     Tap the camera to take a photo
//                   </Text>
//                 </Pressable>

//                 <Pressable
//                   className="bg-surfaceActionTertiary py-4 rounded-full flex-row items-center justify-center gap-3"
//                   style={{ paddingHorizontal: responsiveWidth(5) }}
//                 >
//                   <Upload size={20} color="#f4f4f4" />
//                   <Text className="text-[16px] text-textPrimaryInverted font-SemiBold">
//                     Upload from Gallery
//                   </Text>
//                 </Pressable>
//               </View>
//             </View>

//             {/* Form */}
//             <View className="">
//               {/* Name */}
//               <View style={{ marginBottom: responsiveHeight(2) }}>
//                 <Text className="text-[16px] font-Medium text-textPrimary mb-2">
//                   Name
//                 </Text>
//                 <TextInput
//                   className="border border-borderTertiary rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
//                   placeholder="Enter Name"
//                   placeholderTextColor="#A0A0A0"
//                   value={name}
//                   onChangeText={setName}
//                 />
//               </View>

//               {/* Username */}
//               <View style={{ marginBottom: responsiveHeight(2) }}>
//                 <Text className="text-[16px] font-Medium text-textPrimary mb-2">
//                   Username
//                 </Text>
//                 <TextInput
//                   className="border border-borderTertiary rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
//                   placeholder="Enter Username"
//                   placeholderTextColor="#A0A0A0"
//                   value={username}
//                   onChangeText={setUsername}
//                 />
//               </View>

//               {/* Gender */}
//               <View className="mb-6">
//                 <Text className="text-[16px] font-Medium text-textPrimary mb-2">
//                   Gender
//                 </Text>

//                 <View className="flex-row gap-4">
//                   {["Male", "Female", "Other"].map((gender) => (
//                     <TouchableOpacity
//                       key={gender}
//                       className="flex-row items-center"
//                       onPress={() => handleGenderSelect(gender)}
//                     >
//                       <View
//                         className={`w-5 h-5 rounded-full 
//                             ${ selectedGender === gender ? "border-4" : "border-2" }
//                              items-center justify-center mr-2 ${
//                           selectedGender === gender
//                             ? "border-purple-700"
//                             : "border-gray-300"
//                         }`}
//                       >
//                         <View
//                           className={`w-2.5 h-2.5 rounded-full bg-white ${
//                             selectedGender === gender
//                               ? " bg-white"
//                               : "bg-gray-200"
//                           } `}
//                         />
//                       </View>
//                       <Text className="text-[16px] text-textPrimary font-Regular">
//                         {gender}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </View>
//             </View>
//             <View className=" pb-5"></View>
//           </ScrollView>

//           {/* Bottom Section */}
//           <TouchableOpacity
//             className="bg-surfaceAction py-4 rounded-xl flex-row items-center justify-center"
//             onPress={handleNext}
//           >
//             <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
//               Next
//             </Text>
//           </TouchableOpacity>
//         </KeyboardAvoidingView>
//       </TouchableWithoutFeedback>
//     </SafeAreaView>
//   );
// };

// export default SetProfileScreen;


import { StatusBar } from "expo-status-bar";
import { Upload, CheckCircle2 } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const SetProfileScreen = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [successVisible, setSuccessVisible] = useState(false);

  const handleGenderSelect = (gender) => setSelectedGender(gender);
const handleNext = () => {
  setSuccessVisible(true);
  setTimeout(() => {
    setSuccessVisible(false);
    // You can also navigate to another screen here, e.g.:
    // navigation.navigate('Home');
  }, 2000); // Auto-close after 2 seconds
};

  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <View
            className="items-center"
            style={{ marginVertical: responsiveHeight(3) }}
          >
            <Text className="text-[24px] font-SemiBold text-textPrimary mb-2">
              Personal Data
            </Text>
            <Text className="text-[14px] font-Regular text-textSecondary text-center">
              Please fill all the data to start organizing your wardrobe
            </Text>
          </View>

          {/* Photo Upload */}
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <View className="mb-10">
              <Text className="text-[18px] font-semibold text-gray-900 mb-5">
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
                    source={require("../../../assets/images/camera.png")}
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

            {/* Form */}
            <View>
              {/* Name */}
              <View style={{ marginBottom: responsiveHeight(2) }}>
                <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                  Name
                </Text>
                <TextInput
                  className="border border-borderTertiary rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                  placeholder="Enter Name"
                  placeholderTextColor="#A0A0A0"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              {/* Username */}
              <View style={{ marginBottom: responsiveHeight(2) }}>
                <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                  Username
                </Text>
                <TextInput
                  className="border border-borderTertiary rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                  placeholder="Enter Username"
                  placeholderTextColor="#A0A0A0"
                  value={username}
                  onChangeText={setUsername}
                />
              </View>

              {/* Gender */}
              <View className="mb-6">
                <Text className="text-[16px] font-Medium text-textPrimary mb-2">
                  Gender
                </Text>

                <View className="flex-row gap-4">
                  {["Male", "Female", "Other"].map((gender) => (
                    <TouchableOpacity
                      key={gender}
                      className="flex-row items-center"
                      onPress={() => handleGenderSelect(gender)}
                    >
                      <View
                        className={`w-5 h-5 rounded-full 
                            ${selectedGender === gender ? "border-4" : "border-2"}
                            items-center justify-center mr-2 ${
                              selectedGender === gender
                                ? "border-purple-700"
                                : "border-gray-300"
                            }`}
                      >
                        <View
                          className={`w-2.5 h-2.5 rounded-full ${
                            selectedGender === gender
                              ? "bg-white"
                              : "bg-gray-200"
                          }`}
                        />
                      </View>
                      <Text className="text-[16px] text-textPrimary font-Regular">
                        {gender}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
            <View className="pb-5"></View>
          </ScrollView>

          {/* Next Button */}
          <TouchableOpacity
            className="bg-surfaceAction py-4 rounded-xl flex-row items-center justify-center"
            onPress={handleNext}
          >
            <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
              Next
            </Text>
          </TouchableOpacity>

          {/* Success Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={successVisible}
            // onRequestClose={() => setSuccessVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-black/40">
              <View className="bg-white rounded-2xl w-[80%] p-6 items-center">
                <Image
                source={require("../../../assets/images/profile-success.webp")}
                />
                <Text className="text-3xl font-SemiBold text-textPrimary mt-4 text-center">
                  Successfully created your profile
                </Text>
                <Text className="text-[16px] text-center font-Medium text-textPrimary mt-4 mb-4 px-3">
                  Fill rest of the data into privacy & setting option
                </Text>
               
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SetProfileScreen;
