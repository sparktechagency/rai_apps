import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Search, SlidersHorizontal, X } from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import { categories, seasons, stylesList } from "../../../assets/data/data";
import ColorPalette from "../../components/ColorPallete";
import { Slider } from "@miblanchard/react-native-slider";

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

const BottomSheet = ({ visible, onCancel }) => {
  const [usageValue, setUsageValue] = useState(50);
  const [selectedSeasons, setSelectedSeasons] = useState(["Fall", "Summer"]);
  const [selectedStyles, setSelectedStyles] = useState(["Casual", "Office"]);

  // ✅ Clean and reusable toggle function
  const toggleItem = (setter) => (item) => {
    setter((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleToggleSeason = toggleItem(setSelectedSeasons);
  const handleToggleStyle = toggleItem(setSelectedStyles);
  const resetFilters = () => {
    setUsageValue(50);
    setSelectedSeasons([]);
    setSelectedStyles([]);
    // If you want to reset other components (like brand/color), add them here too
  };
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View className="flex-1 ">
        <View
          className="flex-1 bg-white h-full "
          style={{
            padding: responsiveWidth(5),
          }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between  border-b border-gray-100">
            <Pressable onPress={onCancel} className="p-2">
              <X size={24} color="#000" />
            </Pressable>
            <Text className="text-xl font-semibold text-textPrimary">
              Filters
            </Text>
            <Pressable onPress={resetFilters}>
              <Text className="text-base font-medium text-textPrimary">
                Reset
              </Text>
            </Pressable>
          </View>
          <ScrollView
            contentContainerStyle={{
              gap: responsiveHeight(2),
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* Usage Slider */}
            <View className="">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-SemiBold text-black">Usage</Text>
                <Text className="text-base font-Medium text-violet-500">
                  {usageValue}
                </Text>
              </View>
              <Slider
                value={usageValue}
                onValueChange={setUsageValue}
                minimumValue={1}
                maximumValue={1000}
                step={1}
                minimumTrackTintColor="#8B5CF6"
                maximumTrackTintColor="#E5E7EB"
                thumbTintColor="#5700FE"
                trackStyle={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#E5E7EB",
                }}
                thumbStyle={{
                  width: 24,
                  height: 24,
                  borderRadius: 15,
                  backgroundColor: "#5700FE",
                }}
              />
              <View className="flex-row justify-between">
                <Text className="text-sm font-Medium text-gray-400">Min 1</Text>
                <Text className="text-sm font-Medium text-gray-400">
                  Max 1000
                </Text>
              </View>
            </View>

            {/* Brand + Color Palette */}
            <CustomBottomSheet title="Brand" data={categories} />
            <ColorPalette />

            {/* Season */}
            <View className="">
              <Text className="text-lg font-SemiBold text-black">Season</Text>
              <View className="flex-row flex-wrap gap-2 mt-2">
                {seasons.map((season) => (
                  <Pressable
                    key={season}
                    onPress={() => handleToggleSeason(season)}
                    className={`py-2 px-5 rounded-full mb-2 ${
                      selectedSeasons.includes(season)
                        ? "bg-surfaceAction"
                        : "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`text-base font-Medium ${
                        selectedSeasons.includes(season)
                          ? "text-white"
                          : "text-textPrimary"
                      }`}
                    >
                      {season}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Style */}
            <View className="">
              <Text className="text-lg font-SemiBold text-black">Style</Text>
              <View className="flex-row flex-wrap gap-2 mt-2">
                {stylesList.map((style) => (
                  <Pressable
                    key={style}
                    onPress={() => handleToggleStyle(style)}
                    className={`py-2 px-5 rounded-full mb-2 ${
                      selectedStyles.includes(style)
                        ? "bg-surfaceAction"
                        : "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`text-sm font-Medium ${
                        selectedStyles.includes(style)
                          ? "text-white"
                          : "text-textPrimary"
                      }`}
                    >
                      {style}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Apply Button */}
          <View>
            <Pressable
              className="bg-surfaceAction rounded-2xl py-4 items-center"
              onPress={onCancel}
            >
              <Text className="text-white text-lg font-SemiBold">Apply</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const AddItemScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const route = useRoute();
  const { title, id, tab } = route.params;
  console.log(title, id, tab);

  const renderProductItem = ({ item, index }) => {
    const isSelected = selectedIds.includes(item.id);

    return (
      <Pressable
        onPress={() => toggleSelect(item.id)}
        className={`flex-1 max-w-[48%]`}
      >
        {/* Product Image Container */}
        <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center overflow-hidden relative">
          <Image source={require("../../../assets/images/shirt.png")} />

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

  const [selectedIds, setSelectedIds] = useState([]);
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const [selectedTab, setSelectedTab] = useState("Panis");

  const tabs = ["Pants", "Trouser", "Leggings", "Ties pants", "Swimwear"];

  const renderTab = ({ item }) => {
    const isSelected = selectedTab === item;

    return (
      <Pressable
        className={`px-4 py-2 rounded-full  border ${
          isSelected
            ? "bg-surfaceAction border-surfaceAction"
            : "bg-white border-gray-200"
        }`}
        onPress={() => setSelectedTab(item)}
      >
        <Text
          className={`text-base font-Medium ${
            isSelected ? "text-white" : "text-gray-600"
          }`}
        >
          {item}
        </Text>
      </Pressable>
    );
  };
  // maybe global react-hook-form needed

  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
      }}
    >
      <View className="flex-row items-center">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 justify-center items-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} color="#000" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          {title}
        </Text>
        <View style={{ width: responsiveWidth(10) }} />
      </View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          gap: responsiveHeight(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center  py-2 bg-white gap-3">
          <View className="flex-1 flex-row items-center border border-gray-200 rounded-2xl px-4 py-1">
            <Search size={18} color="#C5BFD1" />
            <TextInput
              className="flex-1 text-base text-textPrimary px-2 font-Medium"
              placeholder="Search"
              placeholderTextColor="#9ca3af"
              value={searchText}
              onChangeText={setSearchText}
              returnKeyType="search"
            />
          </View>
          <Pressable onPress={()=> setShowModal(true)} className="p-4 bg-surfaceAction rounded-xl items-center justify-center">
            <SlidersHorizontal size={20} color={"white"} />
          </Pressable>
        </View>
        <View>
          <FlatList
            data={tabs}
            renderItem={renderTab}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: responsiveWidth(3) }}
          />
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-textPrimary font-SemiBold text-base">
            Select Items ({selectedIds.length})
          </Text>
          <Text className="text-red-500 font-SemiBold text-base">
            You have to add 5 items
          </Text>
        </View>

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
      </ScrollView>
      {/* <View className="py-5"> */}
      <Pressable
        onPress={() => navigation.navigate("DressMe", { tab: tab, id: id })}
        // disabled={!isFormValid || isSubmitting}
        activeOpacity={0.8}
        className={`p-4 rounded-2xl justify-center items-center shadow-md 
                            bg-surfaceAction
                          
                      `}
      >
        <Text
          className={`text-xl font-Medium 
                          text-white
                        `}
        >
          Apply
        </Text>
      </Pressable>
      {/* </View> */}
      <BottomSheet visible={showModal} onCancel={() => setShowModal(false)} />
    </SafeAreaView>
  );
};

export default AddItemScreen;
