import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { products } from "./ItemTab";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const LookbookTab = ({ tab }) => {
  console.log("LINE AT 6", tab);
  const navigation = useNavigation();
  const renderProductItem = ({ item, index }) => (
    <Pressable
      onPress={() => navigation.navigate("CreateLookbookEditStack")}
      className={`flex-1 max-w-[48%]`}
    >
      {/* Product Image Container */}
      <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center  overflow-hidden relative">
        <Image
          source={require("../../../../assets/images/lookbook.png")}
          className="object-contain"
        />
      </View>

      {/* Product Info */}
      <View className="space-y-1">
        <Text className="text-lg text-textPrimary font-SemiBold">
          {item.name}
        </Text>
        {/* <Text className="text-md text-textPrimary font-Medium">
          {item.description}
        </Text> */}
      </View>
    </Pressable>
  );
  return (
    <View
      style={{
        flex: 1,
        padding: responsiveWidth(5),
        gap: 5,
        backgroundColor: "white",
      }}
    >
      {tab ? (
        <ScrollView className="flex-1 bg-white ">
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
          <Image
            source={require("../../../../assets/images/lookbookTab.webp")}
          />
          <Text className="font-Medium text-[16px] text-textPrimary">
            Catalogue your fits !
          </Text>
          <Text className="font-Regular text-[14px] text-textPrimary">
            Hit that plus button to create a lookbook
          </Text>
        </View>
      )}
    </View>
  );
};

export default LookbookTab;
