import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Check, X } from "lucide-react-native";
import CustomBottomSheetCreateItem from "./CustomBottomSheetCreateItem";
import { useNavigation } from "@react-navigation/native";
const products = [
  {
    id: 1,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category1",
  },
  {
    id: 2,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category2",
  },
  {
    id: 3,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category3",
  },
  {
    id: 4,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category4",
  },
];

const BottomSheet = ({ visible, onCancel, onSave }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef(null);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View
          className="bg-white rounded-t-3xl"
          style={{ maxHeight: responsiveHeight(85) }}
        >
          {/* Header */}
          <View className="flex-row items-center  p-4 pt-6 border-b border-gray-100">
            <Pressable onPress={onCancel} className="p-2">
              <X size={24} color="#000" />
            </Pressable>
            <Text
              className="text-center text-xl font-SemiBold text-textPrimary"
              style={{
                paddingLeft: responsiveWidth(28),
              }}
            >
              Style Name
            </Text>
            {/* <Pressable onPress={handleReset}>
              <Text className="text-base font-Medium text-textPrimary">
                Reset
              </Text>
            </Pressable> */}
          </View>

          {/* Search Bar */}
          <View className="p-4">
            <View className="flex-row items-center border border-borderAction rounded-xl px-4 py-1 bg-white">
              {/* <Search size={20} color="#8b5cf6" /> */}
              <TextInput
                ref={searchRef}
                className="flex-1 px-2 text-base font-Medium text-black"
                value={searchQuery}
                onChangeText={(p) => setSearchQuery(p)}
                placeholder=""
                placeholderTextColor="#9ca3af"
              />
              {searchQuery.length > 0 && (
                <Pressable onPress={clearSearch} className="p-1">
                  <X size={16} color="#6b7280" />
                </Pressable>
              )}
            </View>
          </View>

          {/* Location List */}

          {/* Apply Button */}
          <View className="p-4 pt-2">
            <Pressable
              className="bg-surfaceAction rounded-2xl py-4 items-center"
              onPress={onSave}
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-SemiBold">Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const LookbookOutfitsTab = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const navigation = useNavigation();
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderProductItem = ({ item, index }) => {
    const isSelected = selectedIds.includes(item.id);

    return (
      <Pressable
        onPress={() => toggleSelect(item.id)}
        className={`flex-1 max-w-[48%]`}
      >
        {/* Product Image Container */}
        <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center overflow-hidden relative">
          <Image source={require("../../../assets/images/outfit.png")} />

          {/* Overlay + Tick */}
          {isSelected && (
            <View className="absolute inset-0 bg-black/40 items-center justify-center">
              <Image
                source={require("../../../assets/images/tick2.png")}
                style={{
                  width: responsiveWidth(8),
                  height: responsiveWidth(8),
                  objectFit: "contain",
                }}
              />
            </View>
          )}
        </View>

        {/* Product Info */}
        <View className="space-y-1 mt-2">
          <Text className="text-lg text-textPrimary font-SemiBold">
            {item.name}
          </Text>
          <Text className="text-md text-textPrimary font-Medium">
            {item.description}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View className="flex-1 justify-center">
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          padding: responsiveWidth(5),
        }}
      >
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            gap: responsiveWidth(4),
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ rowGap: responsiveWidth(3) }}
        />

        <Pressable
          onPress={() => setShowLocationModal(true)}
          activeOpacity={0.8}
          className={`p-4 rounded-2xl justify-center items-center  
                               bg-surfaceAction
                            
                        `}
        >
          <Text
            className={`text-xl font-Medium 
                            text-white
                          `}
          >
            Create {selectedIds.length > 0 ? `(${selectedIds.length})` : ""}
          </Text>
        </Pressable>
        <BottomSheet
          visible={showLocationModal}
          onSave={() => {
            setShowLocationModal(false);
            navigation.navigate("BottomNavigator", {
              screen: "Wardrobe",
              params: { tab: "Lookbooks" },
            });
          }}
          onCancel={() => setShowLocationModal(false)}
        />
      </ScrollView>
    </View>
  );
};

export default LookbookOutfitsTab;
