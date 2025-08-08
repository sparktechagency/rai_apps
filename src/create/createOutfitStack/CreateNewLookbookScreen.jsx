import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const CreateNewLookbookScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  return (
    <SafeAreaView
      className="flex-1 bg-white "
      style={{
        padding: responsiveWidth(5),
        gap: responsiveHeight(4),
      }}
    >
      <View className="flex-row items-center  pt-5">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Name Folder
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      <TextInput
        className="border border-borderTertiary rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
        placeholder="Your Look, Your Label"
        placeholderTextColor="#A0A0A0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Pressable
        onPress={() =>
          navigation.navigate("BottomNavigator", {
            screen: "Wardrobe",
            params: { tab: "Lookbooks" },
          })
        }
        className="bg-surfaceAction py-4 rounded-xl flex-row items-center justify-center"
      >
        <Text className="text-textPrimaryInverted font-SemiBold text-[16px]">
          Save
        </Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.goBack()}
        className="bg-white py-4 rounded-xl flex-row items-center justify-center"
      >
        <Text className="text-textPrimary font-SemiBold text-[16px]">
          Cancel
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CreateNewLookbookScreen;
