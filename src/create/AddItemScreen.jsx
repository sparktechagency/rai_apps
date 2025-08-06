// import { StatusBar } from "expo-status-bar";
// import { Upload } from "lucide-react-native";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Pressable,
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
//                     <Pressable
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
//                     </Pressable>
//                   ))}
//                 </View>
//               </View>
//             </View>
//             <View className=" pb-5"></View>
//           </ScrollView>

//           {/* Bottom Section */}
//           <Pressable
//             className="bg-surfaceAction py-4 rounded-xl flex-row items-center justify-center"
//             onPress={handleNext}
//           >
//             <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
//               Next
//             </Text>
//           </Pressable>
//         </KeyboardAvoidingView>
//       </TouchableWithoutFeedback>
//     </SafeAreaView>
//   );
// };

// export default SetProfileScreen;

import { useNavigation } from "@react-navigation/native";
import {
  Upload,
  CheckCircle2,
  ArrowLeft,
  Eye,
  Trash2,
  X,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
  StatusBar,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBottomSheet from "../components/CustomBottomSheet";
import { categories, seasons, styles } from "../../assets/data/data";
import OptionSelector from "../components/OptionSelector";
import ColorPalette from "../components/ColorPallete";
const options = ["Male", "Female", "Other"];
import * as ImagePicker from "expo-image-picker";
import CameraUI from "../components/CameraUI";

const ViewImageModal = ({
  isImageViewVisible,
  setIsImageViewVisible,
  image,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isImageViewVisible}
      onRequestClose={() => setIsImageViewVisible(false)}
    >
      <View className="flex-1 bg-black/90 justify-center items-center">
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          className="w-[90%] h-[70%] rounded-2xl"
        />
        <Pressable
          onPress={() => setIsImageViewVisible(false)}
          className="mt-6 p-4 rounded-2xl bg-red-300/50"
        >
          <X color="red" />
        </Pressable>
      </View>
    </Modal>
  );
};

const AddItemScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [selectedGender, setSelectedGender] = useState("Male");
  const [successVisible, setSuccessVisible] = useState(false);
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);

  const handleGenderSelect = (gender) => setSelectedGender(gender);
  const handleNext = () => {
    // setSuccessVisible(true);
    // setTimeout(() => {
    //   setSuccessVisible(false);
    //   // You can also navigate to another screen here, e.g.:
    //   // navigation.navigate('Home');
    // }, 2000); // Auto-close after 2 seconds
    navigation.navigate("BottomNavigator", {
      screen: "Wardrobe",
      params: { tab: "Items" },
    });
  };
  const handleGoBack = () => {
    navigation?.goBack?.();
  };
  const [selectedFruits, setSelectedFruits] = useState([]);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
    }
  };
  return (
    <SafeAreaView className="flex-1 ">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            paddingHorizontal: responsiveWidth(5),
            // paddingTop: StatusBar.currentHeight || 0,
            paddingBottom: responsiveHeight(2),
            backgroundColor: "white",
          }}
        >
          {/* Header */}
          <View
            className="flex-row items-center"
            style={{
              paddingVertical: responsiveHeight(3),
            }}
          >
            <Pressable
              onPress={handleGoBack}
              activeOpacity={0.7}
              className="w-10 h-10 justify-center items-center -ml-2"
            >
              <ArrowLeft color="#81739A" />
            </Pressable>
            <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
              Add Item
            </Text>
            <View
              style={{
                width: responsiveWidth(10),
              }}
            />
          </View>

          {/* Photo Upload */}
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <View className="mb-10">
              <Text className="text-[18px] font-semibold text-gray-900 mb-5">
                Add Profile Photo
              </Text>

              {/* <View
                className="w-full border border-gray-400 border-dashed rounded-xl items-center justify-center"
                style={{
                  gap: responsiveHeight(3),
                  paddingVertical: responsiveHeight(5),
                }}
              >
                <Pressable className="items-center justify-center gap-2">
                  <Image source={require("../../assets/images/camera.png")} />
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
              </View> */}
              {image ? (
                <View
                  className="w-full border border-gray-400 border-dashed rounded-xl items-center justify-center"
                  style={{
                    gap: responsiveHeight(3),
                    paddingVertical: responsiveHeight(5),
                  }}
                >
                  <Image source={require("../../assets/images/tick3.png")} />
                  <Text className="text-lg font-Medium">
                    Photo is successfully uploaded
                  </Text>

                  <View className="flex-row gap-2">
                    <Pressable
                      onPress={() => setImage(null)}
                      className="p-4 rounded-2xl bg-red-300/50"
                    >
                      <Trash2 color="red" />
                    </Pressable>
                    {/* view image */}
                    <Pressable
                      onPress={() => setIsImageViewVisible(true)}
                      className="p-4 rounded-2xl bg-green-300/50"
                    >
                      <Eye color="green" />
                    </Pressable>
                  </View>
                </View>
              ) : (
                <View
                  className="w-full border border-gray-400 border-dashed rounded-xl items-center justify-center"
                  style={{
                    gap: responsiveHeight(3),
                    paddingVertical: responsiveHeight(5),
                  }}
                >
                  <Pressable
                    onPress={() => setIsCameraActive(true)}
                    className="items-center justify-center gap-2"
                  >
                    <Image source={require("../../assets/images/camera.png")} />
                    <Text className="text-textSecondary text-center font-Medium text-[16px]">
                      Tap the camera to take a photo
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={pickImage}
                    className="bg-surfaceActionTertiary py-4 rounded-full flex-row items-center justify-center gap-3"
                    style={{ paddingHorizontal: responsiveWidth(5) }}
                  >
                    <Upload size={20} color="#f4f4f4" />
                    <Text className="text-[16px] text-textPrimaryInverted font-SemiBold">
                      Upload from Gallery
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>

            {/* Form */}
            <View
              style={{
                gap: responsiveHeight(2),
                paddingBottom: responsiveHeight(1),
              }}
            >
              {/* Name */}
              <View>
                <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
                  Title
                </Text>
                <TextInput
                  className="border border-borderTertiary focus:border-borderAction rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                  placeholder="Enter Title"
                  placeholderTextColor="#A0A0A0"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              {/* Username */}
              <View>
                <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
                  Brand
                </Text>
                <TextInput
                  className="border border-borderTertiary focus:border-borderAction rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                  placeholder="Enter Brand"
                  placeholderTextColor="#A0A0A0"
                  value={username}
                  onChangeText={setUsername}
                />
              </View>

              {/* Gender */}

              <CustomBottomSheet
                title="Category"
                data={categories}
                // initialSelected={}
                onChange={(items) => setSelectedFruits(items)}
              />
              <CustomBottomSheet
                title="Material"
                data={categories}
                // initialSelected={}
                onChange={(items) => setSelectedFruits(items)}
              />
              <ColorPalette />
              <View>
                <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
                  Season
                </Text>
                <View className="flex-row gap-4 flex-wrap">
                  {seasons.map((opt) => (
                    <OptionSelector
                      key={opt}
                      title={opt}
                      selectedValue={selectedOption}
                      onSelect={setSelectedOption}
                    />
                  ))}
                </View>
              </View>
              <View>
                <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
                  Style
                </Text>
                <View className="flex-row gap-4 flex-wrap">
                  {styles.map((opt) => (
                    <OptionSelector
                      key={opt}
                      title={opt}
                      selectedValue={selectedOption}
                      onSelect={setSelectedOption}
                    />
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Next Button */}
          <Pressable
            className="bg-surfaceAction py-4 rounded-xl flex-row items-center justify-center"
            onPress={handleNext}
          >
            <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
              Apply
            </Text>
          </Pressable>

          {/* Success Modal */}
          <ViewImageModal
            isImageViewVisible={isImageViewVisible}
            setIsImageViewVisible={setIsImageViewVisible}
            image={image}
          />

          {/* Camera UI */}
          <CameraUI
            isCameraActive={isCameraActive}
            setIsCameraActive={setIsCameraActive}
            setPhotoPath={setImage}
            setShowFolderModal={setShowFolderModal}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AddItemScreen;
