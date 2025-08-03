import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, FolderClosed, FolderPlus, Plus } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
  Modal,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import * as ImagePicker from "expo-image-picker";
import CameraUI from "../../components/CameraUI";

const WishlistFolderScreen = () => {
  const wishlistItems = [
    { id: 1, title: "Title", images: [1, 2, 3, 4] },
    { id: 2, title: "Title", images: [5, 6, 7, 8] },
  ];

  const renderWishlistItem = (item) => (
    <View key={item.id} className="mb-8">
      <View className="flex-row flex-wrap mb-3">
        {item.images.map((imageId, index) => (
          <View
            key={index}
            className="w-[48%] aspect-square bg-gray-300 rounded-lg mr-[2%] mb-[2%] overflow-hidden"
          >
            <Image
              source={{
                uri: `https://via.placeholder.com/150x150/CCCCCC/FFFFFF?text=Image+${imageId}`,
              }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
      <Text className="text-base font-medium text-black ml-1">
        {item.title}
      </Text>
    </View>
  );
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);
  const openCamera = () => {
    setIsCameraActive(true);
    setAlertVisible(false);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [currentOnChange, setCurrentOnChange] = useState(null);
  const [photoPath, setPhotoPath] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [pickedImage, setPickedImage] = useState(null);

  const [showFolderModal, setShowFolderModal] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleImagePicked = (uri) => {
    setPickedImage(uri);
    closeModal();
  };

  const handleGalleryOpen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // quality: 1,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uris = result.assets.map((asset) => asset.uri);
      setSelectedImages(uris);
      setShowFolderModal(true);
    }
  };
  const AddOptions = ({ visible, onClose }) => {
    const menuItems = [
      {
        id: 1,

        label: "Click Photo",
        //   path: "CommunityStack",
        func: openCamera,
      },
      {
        id: 2,
        label: "Upload from Gallery",
        func: handleGalleryOpen,
      },
      {
        id: 3,
        label: "Create Folder",
          path: "CreateNewWishlist",
      },
    ];

    if (!visible) return null;
    const navigation = useNavigation();
    return (
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={onClose}
      >
        <Pressable className="flex-1 bg-black/50" onPress={onClose}>
          <View
            className="absolute rounded-xl border border-gray-100 bg-white shadow-md min-w-[160px]"
            style={{ bottom: responsiveHeight(10), right: responsiveWidth(6) }}
          >
            {menuItems.map((item, index) => (
              <Pressable
                key={item.id}
                className={` px-5 py-3`}
                // onPress={() => {
                //   onClose();

                //   navigation.navigate(item.path);

                //   item.func();
                // }}
                onPress={() => {
                  onClose();
                  if (item.func) item.func();
                  if (item.path) navigation.navigate(item.path);
                }}
              >
                <Text className="text-[15px] text-center text-gray-800 font-Medium">
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    );
  };

  const SelectFolderModal = ({ showFolderModal }) => {
    return (
      <Modal visible={showFolderModal} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
              width: "80%",
              gap: responsiveHeight(2),
            }}
          >
            <Pressable
              onPress={() => {
                // Handle add new folder logic
                setShowFolderModal(false);
                navigation.navigate("AddExistingWishlist");
              }}
              className="bg-surfaceSecondary p-2 rounded-xl flex-row items-center justify-center gap-2"
            >
              <FolderPlus color="#000" />

              <Text className="text-textPrimary font-SemiBold">
                Add Existing Wishlist
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                // Handle add new folder logic
                setShowFolderModal(false);
                navigation.navigate("CreateNewWishlist");
              }}
              className="bg-surfaceAction p-2 rounded-xl flex-row items-center justify-center gap-2"
            >
              <FolderClosed color="#f4f4f4" />

              <Text className="text-textPrimaryInverted font-SemiBold">
                Create New Wishlist
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setShowFolderModal(false)}
              style={{ marginTop: 20 }}
            >
              <Text className="text-center text-red-500 font-SemiBold ">
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
      }}
    >
      {/* Header */}
      <View className="flex-row items-center  py-5">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Wishlists
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      {/* Content */}
      <ScrollView className="flex-1 " showsVerticalScrollIndicator={false}>
        {wishlistItems.map(renderWishlistItem)}
      </ScrollView>

      {/* Floating Action Button */}
      <Pressable
        onPress={() => setShowDropdown(true)}
        className="bg-surfaceAction p-4 rounded-full self-start absolute"
        style={{
          right: responsiveWidth(4),
          bottom: responsiveHeight(8),
        }}
      >
        <Plus color="white" />
      </Pressable>
      <AddOptions
        visible={showDropdown}
        onClose={() => setShowDropdown(false)}
        //   position={dropdownPosition}
      />
      <CameraUI
        isCameraActive={isCameraActive}
        setIsCameraActive={setIsCameraActive}
        setPhotoPath={setPhotoPath}
        setShowFolderModal={setShowFolderModal}
      />
      {/* <UploadUI
             visible={modalVisible}
             onClose={closeModal}
             onImagePicked={handleImagePicked}
           /> */}
      <SelectFolderModal showFolderModal={showFolderModal} />
    </SafeAreaView>
  );
};

export default WishlistFolderScreen;
