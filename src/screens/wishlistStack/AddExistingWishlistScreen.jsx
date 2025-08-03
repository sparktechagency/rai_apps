import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Pressable,
  FlatList,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

const AddExistingWishlistScreen = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const folders = [
    { id: 1, name: "Folder 1" },
    { id: 2, name: "Folder 2" },
    { id: 3, name: "Folder 3" },
    { id: 4, name: "Folder 4" },
    { id: 5, name: "Folder 5" },
    { id: 6, name: "Folder 6" },
    { id: 7, name: "Folder 7" },
    { id: 8, name: "Folder 8" },
  ];

  const renderFolderItem = ({ item }) => (
    <Pressable
      className={`py-4 px-5 mb-[1px] rounded ${
        selectedFolder === item.id ? "bg-gray-200" : ""
      }`}
      onPress={() => setSelectedFolder(item.id)}
    >
      <Text className="text-base font-Medium text-textPrimary">{item.name}</Text>
    </Pressable>
  );
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
      }}
    >
      {/* Header */}
      <View className="flex-row items-center  py-5">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Add Existing Wishlist
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text className="text-2xl font-SemiBold text-textPrimary text-center mt-2 mb-6">
          Choose your Existing Wishlist
        </Text>

        <FlatList
          data={folders}
          renderItem={renderFolderItem}
          keyExtractor={(item) => item.id.toString()}
          className="flex-1"
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Bottom Buttons */}
      <View className=" pt-4 pb-9 bg-white">
        <Pressable
          className={`py-4 rounded-xl items-center mb-3 ${
            selectedFolder ? "bg-surfaceAction" : "bg-gray-200"
          }`}
          disabled={!selectedFolder}
        >
          <Text
            className={`text-lg font-SemiBold ${
              selectedFolder ? "text-white" : "text-gray-400"
            }`}
          >
            Save
          </Text>
        </Pressable>

        <Pressable className="py-4 items-center">
          <Text className="text-ll font-SemiBold text-textPrimary">Cancel</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddExistingWishlistScreen;
