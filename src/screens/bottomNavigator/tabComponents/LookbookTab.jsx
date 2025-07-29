import { View, Text, Image } from "react-native";
import React from "react";

const LookbookTab = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Image source={require("../../../../assets/images/lookbookTab.webp")} />
      <Text className="font-Medium text-[16px] text-textPrimary">Catalogue your fits !</Text>
      <Text className="font-Regular text-[14px] text-textPrimary">
        Hit that plus button to create a lookbook
      </Text>
    </View>
  );
};

export default LookbookTab;
