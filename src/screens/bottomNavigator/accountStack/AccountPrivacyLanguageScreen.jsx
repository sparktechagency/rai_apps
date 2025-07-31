import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

const AccountPrivacyLanguageScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigation = useNavigation();
  const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "Russian" },

  ];

  const handleBack = () => {
    console.log("Back button pressed");
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    console.log("Selected language:", language);
  };

  const handleGoBack = () => {
    if (navigation) navigation.goBack();
    else console.log("Go back pressed");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <StatusBar barStyle="dark-content" backgroundColor="#ffffff" /> */}

      {/* Header */}
      <View className="flex-row items-center  p-5 ">
        <Pressable
          onPress={handleGoBack}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Language
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>
      {/* Content */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <Text className="text-[16px] text-textPrimary mt-6 mb-6 font-SemiBold">
          Select your desire language
        </Text>

        <View className="gap-[1px]">
          {languages.map((language) => {
            const isSelected = selectedLanguage === language.name;
            return (
              <Pressable
                key={language.id}
                className={`px-4 py-4 rounded-md ${
                  isSelected ? "bg-gray-100" : "bg-white"
                }`}
                onPress={() => handleLanguageSelect(language.name)}
              >
                <Text
                  className={`text-base text-textPrimary font-Medium `}
                >
                  {language.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Home Indicator */}
      <View className="items-center py-3 bg-white">
        <View className="w-[134px] h-[5px] bg-gray-300 rounded-full" />
      </View>
    </SafeAreaView>
  );
};

export default AccountPrivacyLanguageScreen;
