import { useNavigation } from "@react-navigation/native";
import { Upload, CheckCircle2, ArrowLeft, SquarePen } from "lucide-react-native";
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

const DeleteAccountModal = ({ visible, onCancel, onConfirm }) => {
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
          {/* <View className="items-center mb-6">
            <View className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View> */}

          {/* Modal Title */}

          {/* Modal Description */}
          <Text className="text-base font-Medium text-textPrimarytext-center mb-8 leading-6">
            Are you sure, you want to delete?
          </Text>

          {/* Action Buttons */}
          <View className="gap-3">
            {/* Delete Button */}
            <Pressable
              className="bg-red-500 rounded-2xl py-4 items-center"
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-SemiBold">
                Yes, delete it
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

const AddItemEditScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
  };
  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

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

  return (
    <SafeAreaView className="flex-1 ">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            paddingHorizontal: responsiveWidth(5),
            paddingTop: StatusBar.currentHeight || 0,
            paddingBottom: responsiveHeight(2),
            backgroundColor: "white",
          }}
        >
          {/* Header */}
          <View className="flex-row items-center  py-5 ">
            <Pressable
              onPress={handleGoBack}
              activeOpacity={0.7}
              className="w-10 h-10 justify-center items-center -ml-2"
            >
              <ArrowLeft color="#81739A" />
            </Pressable>
            <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
              Item Details
            </Text>
            <View
              style={{
                width: responsiveWidth(10),
              }}
            />
          </View>

          {/* Photo Upload */}
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            <View className="mb-10 relative">
              <View
                className="w-full bg-surfaceSecondary rounded-xl items-center justify-center"
                style={{
                  gap: responsiveHeight(3),
                  paddingVertical: responsiveHeight(5),
                }}
              >
                {/* <Pressable className="items-center justify-center gap-2">
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
                </Pressable> */}
                <Image source={require("../../assets/images/shirt.png")} />
              
              </View>
              <Pressable className="items-center bg-surfaceAction rounded-md p-3 justify-center gap-2 absolute right-5 bottom-5 z-20">
                     <SquarePen color="#fff"/>

                  
                </Pressable>
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
          <View className="flex-row gap-2 items-center justify-between">
            <Pressable
              className="flex-1 bg-surfaceSecondary py-4 rounded-xl flex-row items-center justify-center"
              onPress={handleNext}
            >
              <Text className="text-surfaceActionTertiary font-SemiBold text-[16px]">
                Save
              </Text>
            </Pressable>
            <Pressable
              className="flex-1 bg-red-500 py-4 rounded-xl flex-row items-center justify-center"
              onPress={()=> setShowDeleteModal(true)}
            >
              <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
                Delete
              </Text>
            </Pressable>
          </View>
          <DeleteAccountModal
            visible={showDeleteModal}
            onCancel={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AddItemEditScreen;
