import {
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Edit, Plus, X } from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import AddButton from "./AddButton";
import { Image } from "react-native";

export const imageSources = [
  require("../../../../assets/images/shirt.png"),
  require("../../../../assets/images/shirt.png"),
  require("../../../../assets/images/shirt.png"),
  require("../../../../assets/images/shirt.png"),
];

export const StyleSelectionModal = ({ visible, onClose, onSave }) => {
  const [selectedItems, setSelectedItems] = useState(["Casual", "Party"]);
  const [lookName, setLookName] = useState("");
  const navigation = useNavigation();
  const styleOptions = [
    { id: "casual", label: "Casual", category: "occasion" },
    { id: "office", label: "Office", category: "occasion" },
    { id: "home", label: "Home", category: "occasion" },
    { id: "party", label: "Party", category: "occasion" },
    { id: "summer", label: "Summer", category: "season" },
    { id: "fall", label: "Fall", category: "season" },
  ];

  const toggleSelection = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSave = () => {
    onSave?.({ selectedItems, lookName });
    onClose();
    navigation.navigate("OutfitCreated");
  };

  const handleCancel = () => {
    setSelectedItems(["Casual", "Party"]);
    setLookName("");
    onClose();
  };

  const renderStyleButton = (option) => {
    const isSelected = selectedItems.includes(option.label);
    return (
      <Pressable
        key={option.id}
        className={`px-5 py-3 mb-2 rounded-full border ${
          isSelected
            ? "bg-surfaceAction border-violet-500"
            : "bg-white border-gray-200"
        }`}
        onPress={() => toggleSelection(option.label)}
      >
        <Text
          className={`text-base font-Medium ${
            isSelected ? "text-white" : "text-gray-600"
          }`}
        >
          {option.label}
        </Text>
      </Pressable>
    );
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="w-11/12 max-h-[80%] bg-white rounded-2xl overflow-hidden">
          {/* Header */}
          <View className="flex-row items-center justify-between px-5 py-4 ">
            <Pressable
              onPress={onClose}
              className="w-8 h-8 items-center justify-center"
            >
              <X color="#000" />
            </Pressable>
            <Text className="text-lg font-SemiBold text-textPrimary">
              Choose your Style
            </Text>
            <View className="w-8" />
          </View>

          {/* Scrollable Content */}
          <ScrollView className="px-5 pt-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-base font-SemiBold text-textPrimary">
                Select Items ({selectedItems.length})
              </Text>
              <Text className="text-base font-SemiBold text-red-500">
                Select 5 desired styles
              </Text>
            </View>

            <View className="flex-row flex-wrap gap-3 mb-8">
              {styleOptions.map(renderStyleButton)}
            </View>

            {/* Input */}
            <View className="mb-8">
              <TextInput
                className="border border-gray-200 rounded-xl px-4 py-4 text-base text-black font-Medium"
                placeholder="Your Look, Your Label !"
                placeholderTextColor="#A0A0A0"
                value={lookName}
                onChangeText={setLookName}
              />
            </View>

            {/* Buttons */}
            <View className="gap-4 pb-6">
              <Pressable
                className="bg-surfaceAction rounded-xl py-4 items-center"
                onPress={handleSave}
              >
                <Text className="text-white text-lg font-SemiBold">Save</Text>
              </Pressable>

              <Pressable className="py-4 items-center" onPress={handleCancel}>
                <Text className="text-textPrimary text-lg font-SemiBold">
                  Cancel
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const Item2Tab = ({ id }) => {
  const navigation = useNavigation();
  console.log("LINE AT 13", id);
  const [modalVisible, setModalVisible] = useState(false);
  const handleSave = (data) => {
    console.log("Saved data:", data);
    navigation.navigate('OutfitCreated')
  };
  return (
    <View className="flex-1 justify-between">
      <View
        style={{
          paddingTop: responsiveHeight(4),
          gap: responsiveHeight(10),
        }}
      >
        {id === "It2FB" ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-textPrimary font-SemiBold">
                Add Full Body
              </Text>
              <Edit size={16} />
            </View>
            <View className="flex-row flex-wrap justify-between gap-2">
              {imageSources.map((source, index) => (
                <View
                  key={index}
                  className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center overflow-hidden relative"
                  style={{
                    width: responsiveWidth(20),
                  }}
                >
                  <Image
                    source={source}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View>
            <AddButton
              title="Add Full Body"
              path="AddItem"
              id="It2FB"
              tab="2 Items"
            />
          </View>
        )}
        {id === "It2F" ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-textPrimary font-SemiBold">
                Add Footwear
              </Text>
              <Edit size={16} />
            </View>
            <View className="flex-row flex-wrap justify-between gap-2">
              {imageSources.map((source, index) => (
                <View
                  key={index}
                  className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center overflow-hidden relative"
                  style={{
                    width: responsiveWidth(20),
                  }}
                >
                  <Image
                    source={source}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              ))}
            </View>
          </View>
        ) : (
          <AddButton
            title="Add Footwear"
            path="AddItem"
            id="It2F"
            tab="2 Items"
          />
        )}
      </View>
      <Pressable
        onPress={() => setModalVisible(true)}
        className={`py-4 rounded-xl items-center mb-3 bg-surfaceAction`}
      >
        <Text className={`text-lg font-SemiBold text-white`}>Generate</Text>
      </Pressable>
      <StyleSelectionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </View>
  );
};

export default Item2Tab;
