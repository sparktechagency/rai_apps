import {
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  Platform,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { products } from "../screens/bottomNavigator/tabComponents/ItemTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, CopyCheck } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { Image } from "react-native";

  const DeleteAccountModal = ({ visible,  onCancel, onConfirm }) => {
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
            <Text className="text-base font-Medium text-gray-600 text-center mb-8 leading-6">
             Are you sure, you want to delete?
            </Text>
  
            {/* Action Buttons */}
            <View className="gap-3">
              {/* Unblock Button */}
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

const CreateLookbookEditDetailScreen = () => {
  const navigation = useNavigation();
  const [selectionMode, setSelectionMode] = useState(false);

  // const renderProductItem = ({ item, index }) => (
  //   <Pressable
  //     onPress={() => navigation.navigate("CreateLookbookEdit")}
  //     className={`flex-1 max-w-[48%] `}
  //   >
  //     {/* Product Image Container */}

  //     <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center  overflow-hidden relative">
  //       <Image source={require("../../assets/images/shirt.png")} />
  //     </View>

  //     {/* Product Info */}
  //     <View className="space-y-1">
  //       <Text className="text-lg text-textPrimary font-SemiBold">
  //         {item.name}
  //       </Text>
  //       <Text className="text-md text-textPrimary font-Medium">
  //         {item.description}
  //       </Text>
  //     </View>
  //   </Pressable>
  // );

  const renderProductItem = ({ item, index }) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <Pressable
        className={`flex-1 max-w-[48%]`}
        onPress={() => {
          if (selectionMode) {toggleSelect(item.id)}else{
            navigation.navigate("CreateLookbookEdit", { item: item });
          }
        }}
      >
        {/* Product Image Container */}
        <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center  overflow-hidden relative">
          <Image
            source={require("../../assets/images/shirt.png")}
            className="object-contain"
          />
          {selectionMode && (
            <View className="absolute inset-0 bg-black/40 items-center justify-center">
              {isSelected ? (
                <Image
                  source={require("../../assets/images/tick2.png")}
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveWidth(8),
                    objectFit: "contain",
                  }}
                />
              ) : (
                <View className="w-[22px] h-[22px] rounded-full border border-gray-300 bg-white" />
              )}
            </View>
          )}
        </View>

        {/* Product Info */}
        <View className="space-y-1">
          <Text className="text-lg text-textPrimary font-SemiBold">
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
    const [showUnblockModal, setShowUnblockModal] = useState(false);
  
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        paddingTop: Platform.OS === "android" ? 0 : 0,
        padding: responsiveWidth(5),
      }}
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-row items-center py-5 ">
        <Pressable
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          className="w-10 h-10 justify-center items-center -ml-2"
        >
          <ArrowLeft color="black" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Title
        </Text>
        {/* <Image
          source={require("../../assets/images/select.png")}
          className="object-contain w-8"
        /> */}
        <Pressable onPress={() => setSelectionMode(!selectionMode)}>
          <CopyCheck />
        </Pressable>
      </View>
      <Text className="text-base font-Regular text-center mb-2">
        {selectedItems.length > 0 && ` ${selectedItems.length} items selected`}
      </Text>
      <ScrollView
        className="flex-1 bg-white "
        showsVerticalScrollIndicator={false}
      >
        {/* Category Filter */}

        {/* Product Grid */}
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            gap: responsiveWidth(4),
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ rowGap: responsiveWidth(3) }}
        />
      </ScrollView>
      {selectionMode && (
        <View className="flex-row justify-between gap-2">
          <Pressable
            onPress={() => setShowUnblockModal(true)}
            className={`py-4 rounded-xl items-center mb-3  bg-red-500 flex-1`}
          >
            <Text className={`text-lg font-SemiBold text-white`}>Delete</Text>
          </Pressable>
          <Pressable
            onPress={() => setSelectionMode(!selectionMode)}
            className={`py-4 rounded-xl items-center mb-3  bg-white flex-1`}
          >
            <Text className={`text-lg font-SemiBold text-textPrimary`}>
              Cancel
            </Text>
          </Pressable>
        </View>
      )}

      <DeleteAccountModal
          visible={showUnblockModal}
          // user={selectedUser}
          onCancel={()=> setShowUnblockModal(false)}
          onConfirm={()=> setShowUnblockModal(false)}
        />
    </SafeAreaView>
  );
};

export default CreateLookbookEditDetailScreen;
