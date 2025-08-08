import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Slider } from "@miblanchard/react-native-slider";
import ColorPalette from "../components/ColorPallete";

const shirtData = [
  { id: "1", image: require("../../assets/images/shirt.png") },
  { id: "2", image: require("../../assets/images/shirt.png") },
  { id: "3", image: require("../../assets/images/shirt.png") },
  { id: "4", image: require("../../assets/images/shirt.png") },
];

const AnalyticsScreen = () => {
  const navigation = useNavigation();
  const [usageValue, setUsageValue] = useState(50);

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
      }}
    >
      {/*header  */}
      <View className="flex-row items-center pb-4">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          User’s Stats
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      {/*  */}
      <ScrollView
        contentContainerStyle={{
          gap: responsiveHeight(3),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-lg font-SemiBold text-black">
              Wardrobe Usage
            </Text>
            <Text className="text-base font-Medium text-violet-500">
              {usageValue}%
            </Text>
          </View>
          <Slider
            value={usageValue}
            onValueChange={setUsageValue}
            minimumValue={1}
            maximumValue={100}
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
            <Text className="text-sm font-Medium text-gray-400"> 1</Text>
            <Text className="text-sm font-Medium text-gray-400"> 100%</Text>
          </View>
          <Text className="text-base font-Medium text-textPrimary text-center">
            You are wearing {usageValue}% of your wardrobe
          </Text>
        </View>
        <View className="justify-center items-center ">
          <Image source={require("../../assets/images/testChart.png")} />
          <Text className="text-base font-Medium text-textPrimary text-center mt-2">
            You are wearing 17 different color
          </Text>
        </View>

        <ColorPalette />

        <View className="flex-1">
          <Text className="text-lg font-SemiBold text-black">
            Most Worn Items
          </Text>
          <FlatList
            data={shirtData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item }) => (
              <View
                className="bg-white p-2 rounded-lg mr-2"
                style={{
                  shadowColor: "gray",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Image
                  source={item.image}
                  className="w-24 h-24 rounded-md"
                  resizeMode="cover"
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnalyticsScreen;
