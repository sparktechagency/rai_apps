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
import {
  // categories,
  seasons,
  styles,
  stylesList,
} from "../../assets/data/data";
import OptionSelector from "../components/OptionSelector";
import ColorPalette from "../components/ColorPallete";
const options = ["Male", "Female", "Other"];
import * as ImagePicker from "expo-image-picker";
import CameraUI from "../components/CameraUI";
import { Controller, useFormContext } from "react-hook-form";
import {
  useCreateAddItemMutation,
  useGetAllCategoryQuery,
  useGetAllMaterialQuery,
} from "../redux/slices/addItem/addItemSlice.js";

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
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

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

  // const { category, material, season, style } = getValues();

  const category = watch("category");
  const material = watch("material");
  const colors = watch("colors") || [];
  const season = watch("season");
  const style = watch("style");

  const handleCategorySelect = (selected) => {
    setValue("category", selected[0] || "");
  };

  const handleMaterialSelect = (selected) => {
    setValue("material", selected[0] || "");
  };

  const handleSeasonSelect = (selectedSeason) => {
    console.log("Selected Season:", selectedSeason);

    setValue("season", selectedSeason);
  };

  const handleStyleSelect = (selectedStyle) => {
    console.log("Selected Style:", selectedStyle);
    setValue("style", selectedStyle);
  };

  const [createAddItem, { isLoading }] = useCreateAddItemMutation();

  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError,
  } = useGetAllCategoryQuery();
  const {
    data: materials,
    isLoading: materialLoading,
    error: materialError,
  } = useGetAllMaterialQuery();
  console.log("Categories Data:", categories, materials);

  const handleApply = async (data) => {
    console.log("Form Data:", data);

    try {
      // Create FormData object
      const formData = new FormData();

      // ✅ Append all text fields
      formData.append("title", data.itemTitle);
      formData.append("brand", data.itemBrand);
      formData.append("category", data.category);
      formData.append("material", data.material);
      formData.append("season", data.season);
      formData.append("style", data.style);

      // ✅ Append colors array as JSON string
      if (data.itemColors && data.itemColors.length > 0) {
        formData.append("colors", JSON.stringify(data.itemColors));
      }

      // ✅ Append image file if exists
      if (image) {
        const filename = image.split("/").pop();
        const match = /\.(\w+)$/.exec(filename || "");
        const type = match ? `image/${match[1]}` : "image/jpeg";

        formData.append("file", {
          uri: image,
          type: type,
          name: filename || "item.jpg",
        });
      }

      // // ✅ Log FormData contents for debugging
      // console.log("FormData being sent:", formData);
      // for (let [key, value] of formData._parts) {
      //   if (key === "file" && typeof value === "object") {
      //     console.log(`${key}:`, {
      //       uri: value.uri,
      //       type: value.type,
      //       name: value.name,
      //     });
      //   } else {
      //     console.log(`${key}:`, value);
      //   }
      const response = await createAddItem(formData).unwrap();
      console.log("✅ Item created successfully:", response);

      navigation.navigate("BottomNavigator", {
        screen: "Wardrobe",
        params: { tab: "Items" },
      });
    } catch (err) {
      // ✅ Call the mutation with FormData

      // console.log("✅ Item created successfully:", response);

      // ✅ Show success message or navigate
      // Alert.alert("Success", "Item added successfully!");

      // ✅ Reset form or navigate away
      // navigation.goBack();
      // or reset form values

      // const itemData = {
      //   title: data.itemTitle,
      //   brand: data.itemBrand,
      //   category: data.category,
      //   material: data.material,
      //   season: data.season,
      //   style: data.style,
      //   colors: data.colors || [], // Direct array, no need to stringify
      //   // imageUrl: image, // Send the image URI as string
      // };
      // console.log("Item Data being sent:", itemData);

      // const response = await createAddItem(itemData).unwrap();
      // console.log("✅ Item created successfully:", response);

      console.log("❌ Add Item Error:", err);
      const errorMessage =
        err?.data?.message || "Add Item failed. Please try again.";

      setError("root", {
        type: "manual",
        message: errorMessage,
      });
    }
  };

  // const handleApply = async (data) => {
  //   console.log("onSubmit called"); // Add this
  //   console.log("Form Data:", data);
  //   clearErrors();
  //   // try {
  //   //   const itemData = {
  //   //     title: data.itemTitle,
  //   //     brand: data.itemBrand,
  //   //     category: data.category,
  //   //     material: data.material,
  //   //     season: data.season,
  //   //     style: data.style,
  //   //     colors: data.colors || [],
  //   //   };
  //   //   console.log("Item Data being sent:", itemData); // Add this

  //   //   console.log("createAddItem:", createAddItem); // Add this

  //   //   const response = await createAddItem(itemData).unwrap();
  //   //   console.log("✅ Item created successfully:", response);
  //   // } catch (err) {
  //   //   console.log("❌ Add Item Error:", err);
  //   //   // ...existing code...
  //   // }

  //   try {
  //     console.log("Testing mutation directly");
  //     const testData = {
  //       title: data?.itemTitle || "Test Title",
  //       // brand: data?.itemBrand || "Test Brand",
  //       // category: data?.category || "Shirt",
  //       // material: data?.material || "Cotton",
  //       // season: data?.season || "Summer",
  //       // style: data?.style || "Casual",
  //       // colors: ["#3B82F6"],
  //     };
  //     console.log("Test Data:", testData);

  //     const response = await createAddItem(testData).unwrap();
  //     console.log("Direct test success:", response);
  //   } catch (error) {
  //     console.log("Direct test error:", error);
  //   }
  // };
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
          <ScrollView
            className="flex-1"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            contentContainerStyle={{
              // paddingBottom: responsiveHeight(15),
              gap: responsiveHeight(3),
            }}
          >
            <View>
              <Text className="text-[18px] font-semibold text-gray-900 mb-5">
                Add Profile Photo
              </Text>

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

            <View
              style={{
                gap: responsiveHeight(2),
                paddingBottom: responsiveHeight(1),
              }}
            >
              <View>
                <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
                  Title
                </Text>
                <Controller
                  control={control}
                  name="itemTitle"
                  // rules={{ required: "Title is required" }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <TextInput
                        className="border border-borderTertiary focus:border-borderAction rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                        placeholder="Enter Title"
                        placeholderTextColor="#A0A0A0"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                      {/* {errors.title && (
                  <Text className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </Text>
                )} */}
                    </>
                  )}
                />
              </View>

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

              <View>
                <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
                  Brand
                </Text>
                <Controller
                  control={control}
                  name="itemBrand"
                  // rules={{ required: "Title is required" }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <TextInput
                        className="border border-borderTertiary focus:border-borderAction rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
                        placeholder="Enter Title"
                        placeholderTextColor="#A0A0A0"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                      {/* {errors.title && (
                  <Text className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </Text>
                )} */}
                    </>
                  )}
                />
              </View>

              {/* <CustomBottomSheet
                title="Category"
                data={categories}
                // initialSelected={}
                onChange={(items) => setSelectedFruits(items)}
              /> */}
              {/* <CustomBottomSheet
                title="Category"
                data={categories}
                initialSelected={category ? [category] : []}
                onChange={handleCategorySelect}
              />
              <CustomBottomSheet
                title="Material"
                data={materials}
                initialSelected={material ? [material] : []}
                onChange={handleMaterialSelect}
              /> */}

              <CustomBottomSheet
                title="Category"
                data={categories?.styles}
                initialSelected={category ? [category] : []}
                onChange={handleCategorySelect}
                isLoading={categoryLoading}
                loadingText="Loading categories..."
                error={categoryError}
                errorText="Failed to load categories"
              />

              <CustomBottomSheet
                title="Material"
                data={materials?.Metarial}
                initialSelected={material ? [material] : []}
                onChange={handleMaterialSelect}
                isLoading={materialLoading}
                loadingText="Loading materials..."
                error={materialError}
                errorText="Failed to load materials"
              />

              <ColorPalette name="itemColors" />
              <View>
                <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
                  Season
                </Text>
                <View className="flex-row gap-4 flex-wrap">
                  {seasons.map((opt) => (
                    <OptionSelector
                      key={opt}
                      title={opt}
                      selectedValue={season}
                      onSelect={handleSeasonSelect}
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
                      selectedValue={style}
                      onSelect={handleStyleSelect}
                    />
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Next Button */}
          <Pressable
            className="bg-surfaceAction py-4 rounded-xl flex-row items-center justify-center"
            style={{ marginTop: responsiveHeight(1) }}
            onPress={handleSubmit(handleApply)}
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
