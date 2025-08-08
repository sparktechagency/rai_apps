import {
  EllipsisVertical,
  Bell,
  Edit,
  Trash2,
  BellRing,
} from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  Modal,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTimePicker from "./tabComponents/CustomTimePicker";
import { useNavigation } from "@react-navigation/native";
import { DropdownMenu, ShareSheet, Sidebar } from "./WardrobeScreen";
import DatePicker from "../../components/DatePicker";

const { width } = Dimensions.get("window");

// Sample data - replace with your actual data import
const outfits = [
  { id: "1", name: "Summer Outfit", time: "10:30 AM" },
  { id: "2", name: "Business Casual", time: "09:00 AM" },
  { id: "3", name: "Evening Dress", time: "07:00 PM" },
];

const PlannerScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); // Context menu modal
  const [reminderModalVisible, setReminderModalVisible] = useState(false); // Time picker modal
  const [deleteConfirmModalVisible, setDeleteConfirmModalVisible] =
    useState(false); // Delete confirm modal

  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [reminderTime, setReminderTime] = useState({
    hour: "1",
    minute: "00",
    period: "AM",
  });

  const scaleAnimation = useState(new Animated.Value(0))[0];

  const handleMenuPress = (outfit, event) => {
    event.target.measure((x, y, width, height, pageX, pageY) => {
      setMenuPosition({
        x: pageX - 150,
        y: pageY + height + 5,
      });
      setSelectedOutfit(outfit);
      setModalVisible(true);

      // Start animation
      Animated.spring(scaleAnimation, {
        toValue: 1,
        tension: 180,
        friction: 8,
        useNativeDriver: true,
      }).start();
    });
  };

  const closeModal = () => {
    Animated.timing(scaleAnimation, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setSelectedOutfit(null);
    });
  };

  const handleReminder = () => {
    setModalVisible(false);
    setCalendarVisible(true);
    // setReminderModalVisible(true);
  };

  const handleEdit = () => {
    console.log("Edit clicked for:", selectedOutfit?.name);
    setModalVisible(false);
    navigation.navigate("CreateOutfitStack");
    // Add your edit logic here
  };

  const handleDelete = () => {
    setModalVisible(false);
    setDeleteConfirmModalVisible(true);
  };

  const confirmDelete = () => {
    console.log("Deleted:", selectedOutfit?.name);
    setDeleteConfirmModalVisible(false);
    setSelectedOutfit(null);
    // Add your delete logic here
  };

  const handleTimeConfirm = (time) => {
    console.log(
      "Reminder set for:",
      selectedOutfit?.name,
      "at",
      `${time.hour}:${time.minute} ${time.period}`
    );
    setReminderTime(time);
    setReminderModalVisible(false);
    setSelectedOutfit(null);
    setCalendarVisible(false)
    // Add your reminder saving logic here
  };

  const handleTimeCancel = () => {
    setReminderModalVisible(false);
    setSelectedOutfit(null);
    setCalendarVisible(false)
  };

  const renderOutfitItem = ({ item }) => (
    <View
      className="flex-row items-center px-4 py-8"
      style={{
        backgroundColor: "#fff",
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 3,
        elevation: 4,
      }}
    >
      <View className="flex-row mr-4">
        <Image
          source={require("../../../assets/images/itemTab.webp")}
          className="rounded-lg w-10 h-10 object-cover"
        />
      </View>
      <View className="flex-1">
        <Text className="text-base font-Medium text-gray-900">{item.name}</Text>
        <Text className="text-xs text-gray-500 mt-1 font-Regular">
          {item.time}
        </Text>
      </View>
      <Pressable
        className="p-2"
        onPress={(event) => handleMenuPress(item, event)}
      >
        <EllipsisVertical color="#81739A" />
      </Pressable>
    </View>
  );

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  const ellipsisRef = useRef(null);

  const navigation = useNavigation();

  const [showShareModal, setShowShareModal] = useState(false);

  const handleEllipsisPress = () => {
    if (ellipsisRef.current) {
      ellipsisRef.current.measure((x, y, width, height, pageX, pageY) => {
        setDropdownPosition({ x: pageX, y: pageY + height });
        setShowDropdown(true);
      });
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white p-4 flex-row items-center justify-between">
        <Pressable
          onPress={() => setShowSidebar(true)}
          className="flex-row items-center"
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            }}
            className="rounded-full mr-3 border border-borderAction"
            style={{ width: responsiveWidth(13), height: responsiveWidth(13) }}
          />
          <View>
            <Text className="text-lg font-SemiBold text-textPrimary">
              Hey, Mahfuz !
            </Text>
            <Text className="text-base font-Medium text-textSecondary">
              Explore your community
            </Text>
          </View>
        </Pressable>
        <View className="flex-row items-center">
          <Pressable
            onPress={() => navigation.navigate("Notification")}
            className="p-2 mr-2"
          >
            <Image source={require("../../../assets/images/noti.webp")} />
          </Pressable>
          <Pressable
            ref={ellipsisRef}
            onPress={handleEllipsisPress}
            className="p-2"
          >
            <EllipsisVertical />
          </Pressable>
        </View>
      </View>

      {/* Outfit List */}
      <FlatList
        data={outfits}
        renderItem={renderOutfitItem}
        keyExtractor={(item) => item.id}
        className="flex-1"
        showsVerticalScrollIndicator={false}
      />

      {/* Floating Action Button */}
      <Pressable
        onPress={() => navigation.navigate("CreateOutfitStack")}
        className="absolute  w-14 h-14 rounded-full bg-violet-700 justify-center items-center shadow-md"
        style={{
          bottom: responsiveHeight(5),
          right: responsiveWidth(5),
        }}
      >
        <Text className="text-white text-2xl font-light">+</Text>
      </Pressable>

      {/* Context Menu Modal */}
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
        statusBarTranslucent={true}
      >
        <Pressable activeOpacity={1} onPress={closeModal} style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          >
            <Animated.View
              style={[
                {
                  position: "absolute",
                  left: menuPosition.x,
                  top: menuPosition.y,
                  minWidth: 160,
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 8,
                  elevation: 8,
                },
                {
                  transform: [{ scale: scaleAnimation }],
                },
              ]}
            >
              <Pressable activeOpacity={1} onPress={(e) => e.stopPropagation()}>
                {/* Reminder Option */}
                <Pressable
                  className="flex-row items-center px-4 py-3 border-b border-gray-100"
                  onPress={handleReminder}
                >
                  <BellRing size={18} color="#6B7280" />
                  <Text className="text-sm font-Medium text-gray-900 ml-3">
                    Reminder
                  </Text>
                </Pressable>

                {/* Edit Option */}
                <Pressable
                  className="flex-row items-center px-4 py-3 border-b border-gray-100"
                  onPress={handleEdit}
                >
                  <Edit size={18} color="#6B7280" />
                  <Text className="text-sm font-Medium text-gray-900 ml-3">
                    Edit
                  </Text>
                </Pressable>

                {/* Delete Option */}
                <Pressable
                  className="flex-row items-center px-4 py-3"
                  onPress={handleDelete}
                >
                  <Trash2 size={18} color="#EF4444" />
                  <Text className="text-sm font-Medium text-red-500 ml-3">
                    Delete
                  </Text>
                </Pressable>
              </Pressable>
            </Animated.View>
          </View>
        </Pressable>
      </Modal>

      {/* Custom Time Picker Modal for Reminder */}
      <CustomTimePicker
        visible={reminderModalVisible}
        initialTime={reminderTime}
        onCancel={handleTimeCancel}
        onConfirm={handleTimeConfirm}
      />
      <DatePicker
        calendarVisible={calendarVisible}
        setCalendarVisible={() => {
          // setCalendarVisible(false)
          setReminderModalVisible(true);
        }}
      />
      {/* Delete Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteConfirmModalVisible}
        onRequestClose={() => setDeleteConfirmModalVisible(false)}
        statusBarTranslucent={true}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.4)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setDeleteConfirmModalVisible(false)}
        >
          <Pressable
            className="bg-white rounded-3xl p-6 w-full max-w-xs items-center"
            onPress={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <Text className="text-lg font-SemiBold text-textPrimary text-center mb-6 leading-6">
              Are you sure, you want to delete?
            </Text>

            {/* Delete Button */}
            <Pressable
              className="bg-red-600 rounded-md py-3 w-full mb-3 items-center"
              onPress={confirmDelete}
              activeOpacity={0.8}
            >
              <Text className="text-white text-lg font-SemiBold">
                Yes, delete it
              </Text>
            </Pressable>

            {/* Cancel Button */}
            <Pressable
              className="bg-gray-100 rounded-md py-3 w-full items-center"
              onPress={() => setDeleteConfirmModalVisible(false)}
              activeOpacity={0.8}
            >
              <Text className="text-textSecondary text-lg font-SemiBold">
                Cancel
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>

      <DropdownMenu
        visible={showDropdown}
        onClose={() => setShowDropdown(false)}
        position={dropdownPosition}
      />
      <Sidebar
        visible={showSidebar}
        onClose={() => setShowSidebar(false)}
        setShowShareModal={setShowShareModal}
      />
      <ShareSheet
        visible={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </SafeAreaView>
  );
};

export default PlannerScreen;
