import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { ArrowLeft, Bell, Settings } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "react-native-responsive-dimensions";

const NotificationsScreen = () => {
  const notifications = [
    {
      id: 1,
      type: "user_upload",
      title: "Timur has uploaded new outfit",
      time: "5h ago",
      bgColor: "bg-red-100",
    },
    {
      id: 2,
      type: "user_upload",
      title: "Timur has uploaded new outfit",
      time: "5h ago",
      bgColor: "bg-red-100",
    },
    {
      id: 3,
      type: "brand",
      title: "Rai has add a new brand",
      time: "1h ago",
      bgColor: "bg-gray-100",
    },
    {
      id: 4,
      type: "reminder",
      title: "Event reminder",
      time: "8:00 AM Jan 1 2025",
      bgColor: "bg-gray-100",
    },
    {
      id: 5,
      type: "system",
      title: "System has updated new features",
      time: "1h ago",
      bgColor: "bg-gray-100",
    },
  ];

  const getNotificationIcon = (type, bgColor) => {
    switch (type) {
      case "user_upload":
        return (
          <View
            className={`w-12 h-12 ${bgColor} rounded-full items-center justify-center`}
          >
            <View className="w-8 h-8 bg-white rounded-full items-center justify-center">
              <View className="w-6 h-6 bg-gray-300 rounded-full" />
            </View>
          </View>
        );
      case "brand":
        return (
          <View
            className={`w-12 h-12 ${bgColor} rounded-full items-center justify-center`}
          >
            <Text className="text-xl font-bold text-gray-700">R</Text>
          </View>
        );
      case "reminder":
        return (
          <View
            className={`w-12 h-12 ${bgColor} rounded-full items-center justify-center`}
          >
            <Bell size={24} color="#666" />
          </View>
        );
      case "system":
        return (
          <View
            className={`w-12 h-12 ${bgColor} rounded-full items-center justify-center`}
          >
            <Settings size={24} color="#666" />
          </View>
        );
      default:
        return (
          <View
            className={`w-12 h-12 ${bgColor} rounded-full items-center justify-center`}
          >
            <View className="w-6 h-6 bg-gray-400 rounded-full" />
          </View>
        );
    }
  };
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{
        padding: responsiveWidth(5),
      }}
    >
      {/* Header */}
      <View className="flex-row items-center  py-5 ">
        <Pressable
          onPress={() => navigation.goBack()}
          className="w-10 h-10 justify-center items-center -ml-2"
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} color="#000" />
        </Pressable>
        <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
          Notifications
        </Text>
        <View
          style={{
            width: responsiveWidth(10),
          }}
        />
      </View>

      {/* Notifications List */}
      <ScrollView>
        {notifications.map((notification) => (
          <View key={notification.id} className="flex-row items-start py-4">
            {/* Icon */}
            <View className="mr-4">
              {getNotificationIcon(notification.type, notification.bgColor)}
            </View>

            {/* Content */}
            <View className="flex-1">
              <Text className="text-base text-textPrimary font-Medium mb-1">
                {notification.title}
              </Text>
              <Text className="text-sm text-gray-500 font-Regular">{notification.time}</Text>
            </View>
          </View>
        ))}

        <View className="h-24" />
      </ScrollView>

      {/* Home Indicator */}
      <View className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <View className="w-32 h-1 bg-gray-300 rounded-full self-center" />
      </View>
    </View>
  );
};

export default NotificationsScreen;
