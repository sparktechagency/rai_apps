import { View, Text, Pressable, Image, ScrollView, Modal } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Dot,
  FolderClosed,
  FolderPlus,
  Send,
  SquarePen,
  X,
} from "lucide-react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import DatePicker from "../../components/DatePicker";
import CustomTimePicker from "../../screens/bottomNavigator/tabComponents/CustomTimePicker";
import { ShareSheet } from "../../screens/bottomNavigator/WardrobeScreen";

const SuccessModal = ({ successVisible }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("BottomNavigator");
  //   }, 1000);
  // }, []);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={successVisible}
      // onRequestClose={() => setSuccessVisible(false)}
    >
      <View className="flex-1 justify-center items-center bg-black/40">
        <View className="bg-white rounded-2xl w-[80%] p-6 items-center">
          <Image
            source={require("../../../assets/images/profile-success.webp")}
          />
          <Text className="text-3xl font-SemiBold text-textPrimary mt-4 text-center">
            Your event is successfully created
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const SaveOutfitScreen = () => {
  const navigation = useNavigation();
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [reminderModalVisible, setReminderModalVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const SelectFolderModal = ({ showFolderModal }) => {
    return (
      <Modal visible={showFolderModal} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
              width: "80%",
              gap: responsiveHeight(2),
            }}
          >
            <Pressable
              onPress={() => {
                // Handle add new folder logic
                setShowFolderModal(false);
                navigation.navigate("AddExistingLookbook");
              }}
              className="bg-surfaceSecondary p-2 rounded-xl flex-row items-center justify-center gap-2"
            >
              <FolderPlus color="#000" />

              <Text className="text-textPrimary font-SemiBold">
                Add Existing Lookbook
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                // Handle add new folder logic
                setShowFolderModal(false);
                navigation.navigate("CreateNewLookbook");
              }}
              className="bg-surfaceAction p-2 rounded-xl flex-row items-center justify-center gap-2"
            >
              <FolderClosed color="#f4f4f4" />

              <Text className="text-textPrimaryInverted font-SemiBold">
                Create New Lookbook
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setShowFolderModal(false)}
              style={{ marginTop: 20 }}
            >
              <Text className="text-center text-red-500 font-SemiBold ">
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  const [reminderTime, setReminderTime] = useState({
    hour: "1",
    minute: "00",
    period: "AM",
  });
  const handleTimeConfirm = (time) => {
    console.log(
      "Reminder set for:",
      // selectedOutfit?.name,
      "at",
      `${time.hour}:${time.minute} ${time.period}`
    );
    setReminderTime(time);
    // setReminderModalVisible(false);
    // setCalendarVisible(false);

    setSuccessVisible(true);
    setTimeout(() => {
      setCalendarVisible(false);

      setReminderModalVisible(false);

      setSuccessVisible(false);

      // You can also navigate to another screen here, e.g.:
      navigation.navigate("BottomNavigator", { screen: "Planner" });
    }, 2000); // Auto-close after 2 seconds
  };

  const handleTimeCancel = () => {
    setReminderModalVisible(false);
    // setCalendarVisible(false);

    // setSelectedOutfit(null);
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
          onPress={() =>
            navigation.navigate("BottomNavigator", {
              screen: "Wardrobe",
              params: { tab: "Outfit" },
            })
          }
          className="w-10 h-10 justify-center items-center -ml-2"
          activeOpacity={0.7}
        >
          <X size={20} color="#000" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Saved Outfit
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          gap: responsiveHeight(3),
          paddingBottom: responsiveHeight(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          className="w-full bg-surfaceSecondary rounded-xl items-center justify-center"
          style={{
            gap: responsiveHeight(3),
            paddingVertical: responsiveHeight(5),
          }}
        >
          <Image source={require("../../../assets/images/shirt.png")} />
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Pressable
              onPress={() => navigation.navigate("SetOutfit")}
              className="bg-surfaceSecondary rounded-full p-3  self-start"
            >
              <SquarePen color="black" />
            </Pressable>
            <View
              onPress={() => setShowShareModal(false)}
              className="bg-surfaceSecondary rounded-full p-3 self-start"
            >
              <Send color="black" />
            </View>
          </View>
          <View className="flex-row items-center gap-2 bg-textSuccess/30 rounded-3xl px-4">
            <Text className="text-textSuccess font-Medium">Outfit Created</Text>
            <Dot color={"#209261"} />
          </View>
        </View>
        <View className="gap-4">
          <Text className="text-lg font-SemiBold text-textPrimary">Title</Text>
          <Text className="text-md font-Regular text-textPrimary">
            Casual Outfit
          </Text>
          <View className="w-full h-[1px] bg-zinc-300" />
        </View>
        <View className="flex-row items-center justify-between gap-10">
          <View className="gap-4 flex-1">
            <Text className="text-lg font-SemiBold text-textPrimary">
              Season
            </Text>
            <Text className="text-md font-Regular text-textPrimary">Fall</Text>
            <View className="w-full h-[1px] bg-zinc-300" />
          </View>
          <View className="gap-4 flex-1">
            <Text className="text-lg font-SemiBold text-textPrimary">
              Style
            </Text>
            <Text className="text-md font-Regular text-textPrimary">
              Evening
            </Text>
            <View className="w-full h-[1px] bg-zinc-300" />
          </View>
        </View>
      </ScrollView>
      <View className="flex-row items-center justify-between ">
        <Pressable
          onPress={() => setShowFolderModal(true)}
          className="bg-white border-2 border-surfaceAction py-3 px-5 rounded-xl"
        >
          <Text className="text-textPriamry text-center font-Medium text-lg">
            Add to Lookbook
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setCalendarVisible(true)}
          className="bg-surfaceAction py-3 px-5 rounded-xl border-2 border-surfaceAction"
        >
          <Text className="text-white text-center font-Medium text-lg">
            Add to Calendar
          </Text>
        </Pressable>
      </View>
      <SelectFolderModal showFolderModal={showFolderModal} />
      <DatePicker
        calendarVisible={calendarVisible}
        setCalendarVisible={() => {
          // setCalendarVisible(false)
          setReminderModalVisible(true);
        }}
      />
      <CustomTimePicker
        visible={reminderModalVisible}
        initialTime={reminderTime}
        onCancel={handleTimeCancel}
        onConfirm={handleTimeConfirm}
      />
      <SuccessModal successVisible={successVisible} />
      <ShareSheet
        visible={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </SafeAreaView>
  );
};

export default SaveOutfitScreen;
