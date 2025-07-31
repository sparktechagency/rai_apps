import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, ChevronRight } from "lucide-react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  Dimensions,
  StatusBar,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

// Privacy Selection Modal
// const PrivacySelectionModal = ({
//   visible,
//   onCancel,
//   onSelect,
//   currentSelection,
//   title,
// }) => {
//   const [selectedOption, setSelectedOption] = useState(currentSelection);

//   const options = [
//     { id: "only_you", label: "Only you" },
//     { id: "everyone", label: "Everyone" },
//     { id: "followers", label: "Followers" },
//   ];

//   const handleSelect = (optionId) => {
//     setSelectedOption(optionId);
//     onSelect(optionId);
//   };

//   return (
//     <Modal
//       visible={visible}
//       transparent
//       animationType="slide"
//       onRequestClose={onCancel}
//     >
//       <View className="flex-1 bg-black/50 justify-end">
//         <View
//           className="bg-white rounded-t-3xl p-6"
//           style={{ maxHeight: height * 0.5 }}
//         >
//           {/* Modal Header */}
//           <View className="items-center mb-6">
//             <View className="w-12 h-1 bg-gray-300 rounded-full mb-4" />
//             <Text className="text-lg font-semibold text-textPrimary">{title}</Text>
//           </View>

//           {/* Options */}
//           <View className="space-y-4">
//             {options.map((option) => (
//               <Pressable
//                 key={option.id}
//                 className="flex-row items-center justify-between py-4"
//                 onPress={() => handleSelect(option.id)}
//                 activeOpacity={0.7}
//               >
//                 <Text className="text-base font-normal text-textPrimary">
//                   {option.label}
//                 </Text>

//                 {/* Radio Button */}
//                 <View
//                   className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
//                     selectedOption === option.id
//                       ? "border-purple-500"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   {selectedOption === option.id && (
//                     <View className="w-3 h-3 bg-purple-500 rounded-full" />
//                   )}
//                 </View>
//               </Pressable>
//             ))}
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

const PrivacySelectionModal = ({
  visible,
  onCancel,
  onSelect,
  currentSelection,
  title,
}) => {
  const [selectedOption, setSelectedOption] = useState(currentSelection);

  const options = [
    { id: "only_you", label: "Only you" },
    { id: "everyone", label: "Everyone" },
    { id: "followers", label: "Followers" },
  ];

  const handleSelect = (optionId) => {
    setSelectedOption(optionId);
    onSelect(optionId);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Pressable
        className="flex-1 bg-black/50 justify-center items-center px-8"
        activeOpacity={1}
        onPress={onCancel}
      >
        <Pressable
          className="bg-white rounded-2xl p-6 w-full max-w-sm"
          activeOpacity={1}
          onPress={() => {}} // Prevent closing when touching modal content
        >
          {/* Modal Header */}
          <View className="items-center mb-6">
            <Text className=" text-center text-xl font-SemiBold text-textPrimary">
              {title}
            </Text>
          </View>

          {/* Options */}
          <View className="space-y-1">
            {options.map((option, index) => (
              <Pressable
                key={option.id}
                className={`flex-row items-center justify-between py-4 `}
                onPress={() => handleSelect(option.id)}
                activeOpacity={0.7}
              >
                <Text className="text-base font-normal text-black">
                  {option.label}
                </Text>

                {/* Radio Button */}
                <View
                  className={`w-6 h-6 rounded-full border-2 items-center justify-center ${
                    selectedOption === option.id
                      ? "border-surfaceAction"
                      : "border-gray-300"
                  }`}
                >
                  {selectedOption === option.id && (
                    <View className="w-3 h-3 rounded-full" />
                  )}
                </View>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

// Main Privacy Settings Screen
const AccountPrivacyPasswordPrivacySetupScreen = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [currentModalType, setCurrentModalType] = useState("");
  const [privacySettings, setPrivacySettings] = useState({
    profile: "followers",
    items: "followers",
    outfits: "followers",
    lookbooks: "followers",
  });

  const privacyOptions = {
    only_you: "Only you",
    everyone: "Everyone",
    followers: "Followers",
  };

  const handleSettingPress = (settingType) => {
    setCurrentModalType(settingType);
    setShowModal(true);
  };

  const handleSelectionChange = (optionId) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [currentModalType]: optionId,
    }));
    setShowModal(false);
  };

  const getSettingTitle = (type) => {
    const titles = {
      profile: "Who can see your profile",
      items: "Who can see your items",
      outfits: "Who can see your outfits",
      lookbooks: "Who can see your lookbooks",
    };
    return titles[type];
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center  p-5 mt-5">
        <Pressable
          onPress={handleGoBack}
          className="w-10 h-10 items-center justify-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Privacy
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      {/* Content */}
      <View className="flex-1 px-4 pt-6">
        {/* Where you appear Section */}
        <Text className=" text-xl font-SemiBold text-textPrimary">
          Where you appear
        </Text>

        {/* Profile Setting */}
        <Pressable
          className="flex-row items-center justify-between py-4  "
          onPress={() => handleSettingPress("profile")}
          activeOpacity={0.7}
        >
          <View className="flex-1">
            <Text className="text-lg font-SemiBold text-textPrimary mb-1">
              Profile
            </Text>
            <Text className="text-base text-textPrimary font-Medium">
              Who can see: {privacyOptions[privacySettings.profile]}
            </Text>
          </View>
          <ChevronRight size={20} color="#9ca3af" />
        </Pressable>

        {/* Items Setting */}
        <Pressable
          className="flex-row items-center justify-between py-4  "
          onPress={() => handleSettingPress("items")}
          activeOpacity={0.7}
        >
          <View className="flex-1">
            <Text className="text-lg font-SemiBold text-textPrimary mb-1">
              Items
            </Text>
            <Text className="text-base text-textPrimary font-Medium">
              Who can see: {privacyOptions[privacySettings.items]}
            </Text>
          </View>
          <ChevronRight size={20} color="#9ca3af" />
        </Pressable>

        {/* Outfits Setting */}
        <Pressable
          className="flex-row items-center justify-between py-4  "
          onPress={() => handleSettingPress("outfits")}
          activeOpacity={0.7}
        >
          <View className="flex-1">
            <Text className="text-lg font-SemiBold text-textPrimary mb-1">
              Outfits
            </Text>
            <Text className="text-base text-textPrimary font-Medium">
              Who can see: {privacyOptions[privacySettings.outfits]}
            </Text>
          </View>
          <ChevronRight size={20} color="#9ca3af" />
        </Pressable>

        {/* Lookbooks Setting */}
        <Pressable
          className="flex-row items-center justify-between py-4  "
          onPress={() => handleSettingPress("lookbooks")}
          activeOpacity={0.7}
        >
          <View className="flex-1">
            <Text className="text-lg font-SemiBold text-textPrimary mb-1">
              Lookbooks
            </Text>
            <Text className="text-base text-textPrimary font-Medium">
              Who can see: {privacyOptions[privacySettings.lookbooks]}
            </Text>
          </View>
          <ChevronRight size={20} color="#9ca3af" />
        </Pressable>
      </View>

      {/* Privacy Selection Modal */}
      <PrivacySelectionModal
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onSelect={handleSelectionChange}
        currentSelection={privacySettings[currentModalType]}
        title={getSettingTitle(currentModalType)}
      />
    </View>
  );
};

export default AccountPrivacyPasswordPrivacySetupScreen;
