import { View, Text, Pressable } from "react-native";
import React from "react";
import { Plus } from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import AddButton from "./AddButton";

const Item4Tab = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-between">
      <View
        style={{
          paddingTop: responsiveHeight(3),
          gap: responsiveHeight(6),
        }}
      >
        <AddButton title="Add Outwear" path="AddItem" />
        <AddButton title="Add Tops" path="AddItem" />
        <AddButton title="Add Bottoms" path="AddItem" />
        <AddButton title="Add Footwear" path="AddItem" />
      </View>
      <Pressable
        className={`py-4 rounded-xl items-center mb-3
                  bg-gray-200
               `}
      >
        <Text className={`text-lg font-SemiBold text-surfaceActionTertiary/50`}>
          Save
        </Text>
      </Pressable>
    </View>
  );
};

export default Item4Tab;
