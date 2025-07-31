import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const categories = [
  { id: "all", name: "All" },
  { id: "category1", name: "Category" },
  { id: "category2", name: "Category 2" },
];

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
    category: "category1",
  },
  {
    id: 3,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category2",
  },
  {
    id: 4,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category2",
  },
];

const ItemTab = ({ tab }) => {
  console.log("LINE AT 5", tab);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory.toLowerCase().replace(" ", "")
        );

  const renderCategoryItem = ({ item }) => (
    <Pressable
      onPress={() => setActiveCategory(item.name)}
      className="items-center gap-2"
    >
      <View
        className={` rounded-full  items-center justify-center ${
          activeCategory === item.name
            ? "border border-surfaceActionTertiary bg-purple-50"
            : " bg-gray-100"
        }`}
        style={{
          width: responsiveWidth(16),
          height: responsiveWidth(16),
        }}
      >
       
      </View>
      <Text
        className={`text-md font-Medium ${
          activeCategory === item.name ? "text-gray-900" : "text-gray-500"
        }`}
      >
        {item.name}
      </Text>
    </Pressable>
  );

  const renderProductItem = ({ item, index }) => (
    <View className={`flex-1 max-w-[48%] ${index % 2 === 1 ? "ml-2" : ""}`}>
      {/* Product Image Container */}
      <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center mb-3 overflow-hidden relative">
        {/* T-Shirt Mockup */}
        <View className="w-20 h-24 bg-green-700 rounded-t-lg items-center justify-center relative">
          {/* Green text on shirt */}
          <Text className="text-green-400 text-xs font-bold -rotate-12">
            PREMIUM
          </Text>
          {/* Left sleeve */}
          <View className="absolute w-8 h-12 bg-green-700 top-2 left-[-16px] rounded-tl-[20px] rounded-bl-[20px]" />
          {/* Right sleeve */}
          <View className="absolute w-8 h-12 bg-green-700 top-2 right-[-16px] rounded-tr-[20px] rounded-br-[20px]" />
        </View>
      </View>

      {/* Product Info */}
      <View className="space-y-1">
        <Text className="text-lg text-textPrimary font-SemiBold">
          {item.name}
        </Text>
        <Text className="text-md text-textPrimary font-Medium">{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        padding: responsiveWidth(5),
        gap: 5,
        backgroundColor: "white",
      }}
    >
      {tab ? (
        <ScrollView className="flex-1 bg-white ">
          {/* Category Filter */}
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: responsiveHeight(2),  columnGap: responsiveWidth(4) }}
          />

          {/* Product Grid */}
          <FlatList
            data={filteredProducts}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ rowGap: responsiveWidth(3) }}
          />
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            backgroundColor: "white",
          }}
        >
          <Image source={require("../../../../assets/images/itemTab.webp")} />
          <Text className="font-Medium text-[16px] text-textPrimary">
            Hit the plus button to start adding to your wardrobe
          </Text>
          <Text className="font-Regular text-[14px] text-textPrimary">
            No items in your wardrobe yet so let’s go
          </Text>
        </View>
      )}
    </View>
  );
};

export default ItemTab;
