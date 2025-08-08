import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Eye, SquarePen, Trash2, X } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { seasons, stylesList } from "../../../assets/data/data";
import OptionSelector from "../../components/OptionSelector";

const ViewImageModal = ({
  isImageViewVisible,
  setIsImageViewVisible,
  image,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isImageViewVisible}
      onRequestClose={() => setIsImageViewVisible(false)}
    >
      <View className="flex-1 bg-black/90 justify-center items-center">
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          className="w-[90%] h-[70%] rounded-2xl"
        />
        <Pressable
          onPress={() => setIsImageViewVisible(false)}
          className="mt-6 p-4 rounded-2xl bg-red-300/50"
        >
          <X color="red" />
        </Pressable>
      </View>
    </Modal>
  );
};

const SetOutfitScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
    }
  };
  return (
    <SafeAreaView
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
      }}
    >
      <View
        className="flex-row items-center mb-5"
        // style={{ padding: responsiveWidth(5) }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 justify-center items-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} color="#000" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Set Outfit
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      <ScrollView
        contentContainerStyle={{
          gap: responsiveHeight(2),
          paddingBottom: responsiveHeight(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-10 relative">
          <View
            className="w-full bg-surfaceSecondary rounded-xl items-center justify-center"
            style={{
              gap: responsiveHeight(3),
              paddingVertical: responsiveHeight(5),
            }}
          >
            {image ? (
              <View
                className="items-center justify-center"
                style={{
                  gap: responsiveHeight(3),
                }}
              >
                <Image source={require("../../../assets/images/tick3.png")} />
                <Text className="text-lg font-Medium">
                  Photo is successfully uploaded
                </Text>

                <View className="flex-row gap-2">
                  <Pressable
                    onPress={() => setImage(null)}
                    className="p-4 rounded-2xl bg-red-300/50"
                  >
                    <Trash2 color="red" />
                  </Pressable>
                  {/* view image */}
                  <Pressable
                    onPress={() => setIsImageViewVisible(true)}
                    className="p-4 rounded-2xl bg-green-300/50"
                  >
                    <Eye color="green" />
                  </Pressable>
                </View>
              </View>
            ) : (
              <Image source={require("../../../assets/images/shirt.png")} />
            )}
          </View>
          <Pressable
            onPress={pickImage}
            className="items-center bg-surfaceAction rounded-md p-3 justify-center gap-2 absolute right-5 bottom-5 z-20"
          >
            <SquarePen color="#fff" />
          </Pressable>
        </View>

        <View>
          <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
            Title
          </Text>
          <TextInput
            className="border border-borderTertiary focus:border-borderAction rounded-2xl px-4 py-4 text-base text-textPrimary font-Medium bg-white"
            placeholder="Enter Title"
            placeholderTextColor="#A0A0A0"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View>
          <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
            Season
          </Text>
          <View className="flex-row gap-4 flex-wrap">
            {seasons.map((opt) => (
              <OptionSelector
                key={opt}
                title={opt}
                selectedValue={selectedOption}
                onSelect={setSelectedOption}
              />
            ))}
          </View>
        </View>
        <View>
          <Text className="text-[16px] font-SemiBold text-textPrimary mb-2">
            Style
          </Text>
          <View className="flex-row gap-4 flex-wrap">
            {stylesList.map((opt) => (
              <OptionSelector
                key={opt}
                title={opt}
                selectedValue={selectedOption2}
                onSelect={setSelectedOption2}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <Pressable
        className=" bg-surfaceAction py-4 rounded-xl "
        // onPress={handleNext}
        onPress={() => navigation.navigate("SaveOutfit")}
      >
        <Text className="text-white font-SemiBold text-[16px] text-center">
          Save
        </Text>
      </Pressable>

      <ViewImageModal
        isImageViewVisible={isImageViewVisible}
        setIsImageViewVisible={setIsImageViewVisible}
        image={image}
      />
    </SafeAreaView>
  );
};

export default SetOutfitScreen;
