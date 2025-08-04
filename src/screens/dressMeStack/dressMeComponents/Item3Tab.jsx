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

const Item3Tab = ({ id }) => {
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
          paddingTop: responsiveHeight(4),
          gap: responsiveHeight(10),
        }}
      >
        {id === "It3T" ? (
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
          <AddButton title="Add Tops" path="AddItem" id="It3T" tab="3 Items" />
        )}

        {id === "It3B" ? (
          <View>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-textPrimary font-SemiBold">
                Add Bottoms
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
            title="Add Bottoms"
            path="AddItem"
            id="It3B"
            tab="3 Items"
          />
        )}

        {id === "It3F" ? (
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
            id="It3F"
            tab="3 Items"
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

export default Item3Tab;
