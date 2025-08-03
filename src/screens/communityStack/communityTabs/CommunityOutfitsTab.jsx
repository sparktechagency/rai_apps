import { View, Text, Pressable, FlatList, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "react-native-responsive-dimensions";
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
const CommunityOutfitsTab = () => {
  const navigation = useNavigation();
  const renderProductItem = ({ item, index }) => (
    <View
    //   onPress={() => navigation.navigate("AddItemEdit")}
      className={`flex-1 max-w-[48%] `}
    >
      {/* Product Image Container */}

      <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center  overflow-hidden relative">
        <Image source={require("../../../../assets/images/outfit.png")} />
      </View>

      {/* Product Info */}
      <View className="space-y-1">
        <Text className="text-lg text-textPrimary font-SemiBold">
          {item.name}
        </Text>
        <Text className="text-md text-textPrimary font-Medium">
          {item.description}
        </Text>
      </View>
    </View>
  );
  return (
    <View className="flex-1"
    style={{
        paddingHorizontal: responsiveWidth(4)
    }}
    >
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
    </View>
  );
};

export default CommunityOutfitsTab;
