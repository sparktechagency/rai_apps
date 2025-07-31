import {
  EllipsisVertical,
  Search,
  SlidersHorizontal,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemTab from "./tabComponents/ItemTab";
import LookbookTab from "./tabComponents/LookbookTab";
import OutfitTab from "./tabComponents/OutfitTab";
import { useRoute } from "@react-navigation/native";

const TAB_IDS = {
  Items: "Items",
  Outfit: "Outfit",
  Lookbooks: "Lookbooks",
};

const TAB_OPTIONS = [
  { id: TAB_IDS.Items, label: "Items" },
  { id: TAB_IDS.Outfit, label: "Outfit" },
  { id: TAB_IDS.Lookbooks, label: "Lookbooks" },
];

const WardrobeScreen = () => {
  const [activeTab, setActiveTab] = useState("Items");
  const [searchText, setSearchText] = useState("");

  const route = useRoute();
  const { tab } = route.params || {};

  // console.log(tab);

  useEffect(() => {
    setActiveTab(tab || "Items");
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View
        className="bg-surfacePrimary px-4 py-3 flex-row items-center justify-between"
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            }}
            className=" rounded-full mr-3 border border-borderAction"
            style={{ width: responsiveWidth(13), height: responsiveWidth(13) }}
          />
          <View>
            <Text className="text-lg font-Bold text-textPrimary">
              Hey, Mahfuz !
            </Text>
            <Text className="text-base font-Regular text-textSecondary">
              Explore your wardrobe
            </Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <Pressable className="p-2 mr-2">
            <Image source={require("../../../assets/images/noti.webp")} />
          </Pressable>
          <Pressable className="p-2">
            <EllipsisVertical />
          </Pressable>
        </View>
      </View>
      {tab && (
        <View className="flex-row items-center px-4 py-2 bg-white gap-3">
          {/* Search Input */}
          <View className="flex-1 flex-row items-center  border border-gray-200 rounded-2xl px-4 py-1 ">
            {/* Search Icon */}
            <Search size={18} color="#C5BFD1" />

            {/* Text Input */}
            <TextInput
              className="flex-1 text-base text-textPrimary px-2 font-Medium"
              placeholder="Search"
              placeholderTextColor="#9ca3af"
              value={searchText}
              onChangeText={setSearchText}
              returnKeyType="search"
            />
          </View>

          {/* Filter Button */}
          <Pressable
            className="p-4 bg-surfaceAction rounded-xl items-center justify-center"
            // onPress={handleFilter}
          >
            <SlidersHorizontal size={20} color={'white'} />
          </Pressable>
        </View>
      )}
      {/* Tab Navigation */}
      <View className="bg-white px-4 py-2 flex-row">
        {TAB_OPTIONS.map((tab) => (
          <Pressable
            key={tab.id}
            className="flex-1 py-3"
            onPress={() => setActiveTab(tab.id)}
          >
            <Text
              className={`text-center text-base font-Medium  ${
                activeTab === tab.id
                  ? "text-textPrimary border-b-2 border-borderAction"
                  : "text-textPrimary"
              }`}
              style={activeTab === tab.id ? styles.activeTab : {}}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Main Content */}
      {/* <ScrollView className="flex-1 px-4 py-6">
      
      </ScrollView> */}

      {activeTab === TAB_IDS.Items && <ItemTab tab={tab === TAB_IDS.Items} />}
      {activeTab === TAB_IDS.Outfit && <OutfitTab />}
      {activeTab === TAB_IDS.Lookbooks && <LookbookTab />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#7c3aed",
    paddingBottom: 8,
  },
});

export default WardrobeScreen;
