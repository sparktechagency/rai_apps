import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

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

const AddItemScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const route = useRoute();
  const { title , id , tab} = route.params;
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
          <Pressable className="p-4 bg-surfaceAction rounded-xl items-center justify-center">
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
        onPress={()=> navigation.navigate('DressMe', {tab:tab , id:id})}
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
    </SafeAreaView>
  );
};

export default AddItemScreen;
