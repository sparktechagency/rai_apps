import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { Edit, Plus } from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import AddButton from "./AddButton";
import { imageSources, StyleSelectionModal } from "./Item2Tab";

const Item4Tab = ({ id }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handleSave = (data) => {
    console.log("Saved data:", data);
    navigation.navigate("OutfitCreated");
  };
  return (
    <View className="flex-1 justify-between">
      <View
        style={{
          paddingTop: responsiveHeight(3),
          gap: responsiveHeight(6),
        }}
      >
        {id === "It4O" ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-textPrimary font-SemiBold">
                Add Outwear
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
            title="Add Outwear"
            path="AddItem"
            id="It4O"
            tab="4 Items"
          />
        )}
        {id === "It4T" ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-textPrimary font-SemiBold">Add Tops</Text>
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
          <AddButton title="Add Tops" path="AddItem" id="It4T" tab="4 Items" />
        )}

        {id === "It4B" ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-textPrimary font-SemiBold">Add Tops</Text>
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
            title="Add Bottoms"
            path="AddItem"
            id="It4B"
            tab="Item4Tab"
          />
        )}
        {id === "It4F" ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-textPrimary font-SemiBold">Add Tops</Text>
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
            id="It4F"
            tab="4 Items"
          />
        )}
      </View>
      <Pressable
      onPress={() => setModalVisible(true)}
        className={`py-4 rounded-xl items-center mb-3  bg-surfaceAction`}
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

export default Item4Tab;
