import { View, Text, Image, Pressable, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import WardrobeScreen from "./WardrobeScreen";
import CommunityScreen from "./CommunityScreen";
import PlannerScreen from "./PlannerScreen";
import AccountScreen from "./AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import AccountStack from "./accountStack/AcountStack";
import { useNavigation } from "@react-navigation/native";
import { centralModalOption } from "../../../assets/data/data";
import { Calendar, Plus, BetweenVerticalEnd, UserRound, Globe } from "lucide-react-native";

const Tab = createBottomTabNavigator();



const CustomTabBar = ({ state, descriptors, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.tabBarContainer}>
      {/* Modal (Side-aligned) */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <Pressable
          className="flex-1 justify-end items-center bg-black/40"
          activeOpacity={1}
          onPress={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.sideModalContent}>
              {centralModalOption.map((item, i) => (
                <Pressable
                  key={i}
                  style={{ padding: responsiveHeight(1.5) }}
                  onPress={() => {
                    closeModal();
                    navigation.navigate(item?.path);
                  }}
                >
                  <Text className="text-center font-SemiBold text-base text-textPrimary">
                    {item?.title}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View style={styles.triangleTip} />
          </View>
        </Pressable>
      </Modal>

      {/* Bottom Tab */}
      <View style={styles.tabBar}>
        {/* Left Group: Wardrobe + Community */}
        <View style={styles.tabGroup}>
          {state.routes.slice(0, 2).map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel || route.name;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const icons = {
              Wardrobe: (
                <BetweenVerticalEnd size={24} color={isFocused ? "#5700FE" : "#6b7280"} />
              ),
              Community: (
                <Globe size={24} color={isFocused ? "#5700FE" : "#6b7280"} />
              ),
            };

            return (
              <Pressable key={index} onPress={onPress} style={styles.tabItem}>
                {icons[route.name]}
                <Text
                  style={[
                    styles.tabLabel,
                    { color: isFocused ? "#5700FE" : "#6b7280" },
                  ]}
                >
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Plus Button Centered */}
        <Pressable onPress={openModal} style={styles.plusButtonContainer}>
          <View style={styles.plusButton}>
            <Plus size={24} color="#fff" />
          </View>
        </Pressable>

        {/* Right Group: Planner + Account */}
        <View style={styles.tabGroup}>
          {state.routes.slice(2, 4).map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel || route.name;
            const isFocused = state.index === index + 2;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const icons = {
              Planner: (
                <Calendar size={24} color={isFocused ? "#5700FE" : "#6b7280"} />
              ),
              Account: (
                <UserRound size={24} color={isFocused ? "#5700FE" : "#6b7280"} />
              ),
            };

            return (
              <Pressable key={index} onPress={onPress} style={styles.tabItem}>
                {icons[route.name]}
                <Text
                  style={[
                    styles.tabLabel,
                    { color: isFocused ? "#5700FE" : "#6b7280" },
                  ]}
                >
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const BottomNavigatorScreen = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Wardrobe"
    >
      <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Planner" component={PlannerScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "relative",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#F5F4F7",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingVertical: 8,
    height: responsiveHeight(16),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-between",
    gap: responsiveWidth(15),
    alignItems: "center",
    paddingBottom: 30,
    top: -13,
  },
  tabGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: 'red'
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tabIcon: {
    width: 28,
    height: 28,
    marginBottom: 4,
    resizeMode: "contain",
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
  plusButtonContainer: {
    position: "absolute",
    bottom: responsiveHeight(7),
    left: "50%",
    transform: [{ translateX: -responsiveWidth(4) }],
    zIndex: 10,
  },
  plusButton: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: 30,
    backgroundColor: "#8E54FE",
    alignItems: "center",
    justifyContent: "center",
  },
  plusIcon: {
    fontSize: 24,
    color: "white",
    fontWeight: "300",
  },
  sideModalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "transparent",
    paddingRight: 20,
    paddingBottom: 110, // position near tab bar
  },
  modalContainer: {
    alignItems: "center",
    marginBottom: responsiveHeight(10),
  },
  sideModalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    width: 180,
    // elevation: 4,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.15,
    // shadowRadius: 4,
    overflow: "hidden", // Ensures border radius is respected
  },

  modalItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0", // Very light gray border
  },
  modalText: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    fontWeight: "400",
  },
  triangleTip: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    transform: [{ rotate: "45deg" }],
    marginTop: -18,
    borderRadius: 6,
    zIndex: -10,
    // elevation: 4,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.15,
    // shadowRadius: 4,
  },
});

export default BottomNavigatorScreen;
