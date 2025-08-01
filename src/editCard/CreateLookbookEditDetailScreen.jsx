import { View, Text, Pressable, ScrollView, FlatList, Platform } from "react-native";
import React from "react";
import { products } from "../screens/bottomNavigator/tabComponents/ItemTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { Image } from "react-native";

const CreateLookbookEditDetailScreen = () => {
  const navigation = useNavigation();
  const renderProductItem = ({ item, index }) => (
    <Pressable
      onPress={() => navigation.navigate("CreateLookbookEdit")}
      className={`flex-1 max-w-[48%] `}
    >
      {/* Product Image Container */}

      <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center  overflow-hidden relative">
        <Image source={require("../../assets/images/shirt.png")} />
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
    </Pressable>
  );
  return (
    <SafeAreaView className="flex-1 bg-white"
    style={{
      paddingTop: Platform.OS === "android" ? 0 : 0,
      padding: responsiveWidth(5)
    }}
    showsVerticalScrollIndicator={false}
    >
      <View className="flex-row items-center py-5 ">
        <Pressable
          onPress={()=> navigation.goBack()}
          activeOpacity={0.7}
          className="w-10 h-10 justify-center items-center -ml-2"
        >
          <ArrowLeft color="#81739A" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Title
        </Text>
       <Image source={require('../../assets/images/select.png')}
       className="object-contain w-8"
       />
      </View>
      <ScrollView className="flex-1 bg-white "
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
    </SafeAreaView>
  );
};

export default CreateLookbookEditDetailScreen;
