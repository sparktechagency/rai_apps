import { useNavigation } from "@react-navigation/native";
import {
  Upload,
  CheckCircle2,
  ArrowLeft,
  SquarePen,
  Trash2,
  Eye,
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
import { categories, seasons, styles, stylesList } from "../../assets/data/data";
import OptionSelector from "../components/OptionSelector";
import ColorPalette from "../components/ColorPallete";
const options = ["Male", "Female", "Other"];
import * as ImagePicker from "expo-image-picker";

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

const CreateOutfitEditScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [image, setImage] = useState(null);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);

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
      params: { tab: "Outfit" },
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
            // paddingBottom: responsiveHeight(2),
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
              Outfit Details
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
                
                {image ? (
                  <View
                    className="items-center justify-center"
                    style={{
                      gap: responsiveHeight(3),
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
                  <Image source={require("../../assets/images/shirt.png")} />
                )}
              </View>
              <Pressable
                onPress={pickImage}
                className="items-center bg-surfaceAction rounded-md p-3 justify-center gap-2 absolute right-5 bottom-5 z-20"
              >
                <SquarePen color="#fff" />
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
              {/* <View>
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
              </View> */}

              {/* Gender */}

              {/* <CustomBottomSheet
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
              /> */}
              {/* <ColorPalette /> */}
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
                  {stylesList.map((opt) => (
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
          <View className="flex-row gap-2 items-center justify-between py-2">
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
              onPress={() => setShowDeleteModal(true)}
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

          <ViewImageModal
            isImageViewVisible={isImageViewVisible}
            setIsImageViewVisible={setIsImageViewVisible}
            image={image}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CreateOutfitEditScreen;
