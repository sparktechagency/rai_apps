// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import WardrobeScreen from './WardrobeScreen';
// import CommunityScreen from './CommunityScreen';
// import PlannerScreen from './PlannerScreen';
// import AccountScreen from './AccountScreen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

// const BottomNavigatorScreen = () => {
//   return (
//     <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,
//           tabBarStyle: {
//             backgroundColor: '#F5F4F7',
//             borderTopWidth: 1,
//             borderTopColor: '#e5e7eb',
//             paddingVertical: 8,
//             height: 100,
//             borderTopLeftRadius: 30,
//             borderTopRightRadius: 30,
//           },
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: '500',
//             marginTop: 4,
//           },
//           tabBarActiveTintColor: '#5700FE',
//           tabBarInactiveTintColor: '#6b7280',
//         //   tabBarIcon: ({ focused }) => (
//         //     <TabIcon focused={focused} type={route.name.toLowerCase()} />
//         //   ),
//         })}
//       >
//         <Tab.Screen
//           name="Wardrobe"
//           component={WardrobeScreen}
//           options={{
//           tabBarIcon: ({focused}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               {focused ? (
//                 <Image source={require('../../../assets/images/war_active.webp')}/>
//               ) : (
//                 <Image source={require('../../../assets/images/war_inactive.webp')}/>
//               )}
//             </View>
//           ),
//         }}
//         />
//         <Tab.Screen
//           name="Community"
//           component={CommunityScreen}
//           options={{
//           tabBarIcon: ({focused}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               {focused ? (
//                 <Image source={require('../../../assets/images/com_active.webp')}/>
//               ) : (
//                 <Image source={require('../../../assets/images/com_inactive.webp')}/>
//               )}
//             </View>
//           ),
//         }}
//         />
//         {/* <Tab.Screen
//           name="Add"
//           component={AddItemScreen}
//           options={{
//             tabBarLabel: '',
//           }}
//         /> */}
//         <Tab.Screen
//           name="Planner"
//           component={PlannerScreen}
//           options={{
//           tabBarIcon: ({focused}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               {focused ? (
//                 <Image source={require('../../../assets/images/plan_active.webp')}/>
//               ) : (
//                 <Image source={require('../../../assets/images/plan_inactive.webp')}/>
//               )}
//             </View>
//           ),
//         }}
//         />
//         <Tab.Screen
//           name="Account"
//           component={AccountScreen}
//           options={{
//           tabBarIcon: ({focused}) => (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               {focused ? (
//                 <Image source={require('../../../assets/images/acc_active.webp')}/>
//               ) : (
//                 <Image source={require('../../../assets/images/acc_inactive.webp')}/>
//               )}
//             </View>
//           ),
//         }}
//         />
//       </Tab.Navigator>
//   )
// }

// export default BottomNavigatorScreen

// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   Modal,
//   StyleSheet,
// } from "react-native";
// import React, { useState } from "react";
// import WardrobeScreen from "./WardrobeScreen";
// import CommunityScreen from "./CommunityScreen";
// import PlannerScreen from "./PlannerScreen";
// import AccountScreen from "./AccountScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { responsiveWidth } from "react-native-responsive-dimensions";

// const Tab = createBottomTabNavigator();

// // Custom Tab Bar Component
// const CustomTabBar = ({ state, descriptors, navigation }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <View style={styles.tabBarContainer}>
//       {/* Modal */}
//       <Modal
//         animationType="fade"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <Pressable
//           style={styles.modalOverlay}
//           activeOpacity={1}
//           onPress={closeModal}
//         >
//           <View style={styles.modalContent}>
//             <Pressable
//               style={styles.modalItem}
//               onPress={() => {
//                 closeModal();
//                 // Navigate to Add Item screen or handle action
//                 console.log("Add Item pressed");
//               }}
//             >
//               <Text style={styles.modalItemText}>Add Item</Text>
//             </Pressable>

//             <Pressable
//               style={styles.modalItem}
//               onPress={() => {
//                 closeModal();
//                 // Navigate to Create Outfit screen or handle action
//                 console.log("Create an outfit pressed");
//               }}
//             >
//               <Text style={styles.modalItemText}>Create an outfit</Text>
//             </Pressable>

//             <Pressable
//               style={styles.modalItem}
//               onPress={() => {
//                 closeModal();
//                 // Navigate to Create Lookbook screen or handle action
//                 console.log("Create lookbook pressed");
//               }}
//             >
//               <Text style={styles.modalItemText}>Create lookbook</Text>
//             </Pressable>
//           </View>
//         </Pressable>
//       </Modal>

//       <View style={styles.tabBar}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const label = options.tabBarLabel || route.name;
//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: "tabPress",
//               target: route.key,
//               canPreventDefault: true,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };

//           const renderTabIcon = () => {
//             switch (route.name) {
//               case "Wardrobe":
//                 return isFocused ? (
//                   <Image
//                     source={require("../../../assets/images/war_active.webp")}
//                     style={styles.tabIcon}
//                   />
//                 ) : (
//                   <Image
//                     source={require("../../../assets/images/war_inactive.webp")}
//                     style={styles.tabIcon}
//                   />
//                 );
//               case "Community":
//                 return isFocused ? (
//                   <Image
//                     source={require("../../../assets/images/com_active.webp")}
//                     style={styles.tabIcon}
//                   />
//                 ) : (
//                   <Image
//                     source={require("../../../assets/images/com_inactive.webp")}
//                     style={styles.tabIcon}
//                   />
//                 );
//               case "Planner":
//                 return isFocused ? (
//                   <Image
//                     source={require("../../../assets/images/plan_active.webp")}
//                     style={styles.tabIcon}
//                   />
//                 ) : (
//                   <Image
//                     source={require("../../../assets/images/plan_inactive.webp")}
//                     style={styles.tabIcon}
//                   />
//                 );
//               case "Account":
//                 return isFocused ? (
//                   <Image
//                     source={require("../../../assets/images/acc_active.webp")}
//                     style={styles.tabIcon}
//                   />
//                 ) : (
//                   <Image
//                     source={require("../../../assets/images/acc_inactive.webp")}
//                     style={styles.tabIcon}
//                   />
//                 );
//               default:
//                 return null;
//             }
//           };

//           return (
//             <Pressable
//               key={index}
//               onPress={onPress}
//               style={styles.tabItem}
//             >
//               {renderTabIcon()}
//               <Text
//                 style={[
//                   styles.tabLabel,
//                   { color: isFocused ? "#5700FE" : "#6b7280" },
//                 ]}
//               >
//                 {label}
//               </Text>
//             </Pressable>
//           );
//         })}

//         <Pressable
//           onPress={openModal}
//           style={styles.plusButtonContainer}
//         >
//           <View style={styles.plusButton}>
//             <Text style={styles.plusIcon}>+</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const BottomNavigatorScreen = () => {
//   return (
//     <Tab.Navigator
//       tabBar={(props) => <CustomTabBar {...props} />}
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
//       <Tab.Screen name="Community" component={CommunityScreen} />
//       <Tab.Screen name="Planner" component={PlannerScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabBarContainer: {
//     position: "relative",
//   },
//   tabBar: {
//     flexDirection: "row",
//     backgroundColor: "#F5F4F7",
//     borderTopWidth: 1,
//     borderTopColor: "#e5e7eb",
//     paddingVertical: 8,
//     height: 100,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     justifyContent: "space-around",
//     alignItems: "center",
//     paddingBottom: 20,
//   },
//   tabItem: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//   },
//   tabIcon: {
//     width: 24,
//     height: 24,
//     marginBottom: 4,
//   },
//   tabLabel: {
//     fontSize: 12,
//     fontWeight: "500",
//   },
//   //   plusButtonContainer: {
//   //     position: 'absolute',
//   //     // top: -25,
//   //     left: '50%',
//   //     marginLeft: -10,
//   //     zIndex: 1,
//   //   },
//   plusButtonContainer: {
//     position: "absolute",
//     bottom: 40,
//     left: "50%",
//     transform: [{ translateX: -16 }], // adjust center with actual width/2
//     zIndex: 10,
//   },
//   plusButton: {
//     width: responsiveWidth(8),
//     height: responsiveWidth(8),
//     borderRadius: 30,
//     backgroundColor: "#5700FE",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   plusIcon: {
//     fontSize: 24,
//     color: "white",
//     fontWeight: "300",
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: "flex-end", // Push modal content to bottom
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.3)",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     borderRadius: 16,
//     paddingVertical: 20,
//     width: "90%",
//     marginBottom: 100, // position above the tab bar
//     alignItems: "center",
//   },
//   modalItem: {
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0",
//   },
//   modalItemText: {
//     fontSize: 16,
//     color: "#333",
//     textAlign: "center",
//   },
// });

// export default BottomNavigatorScreen;

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
                  style={{
                    padding: responsiveHeight(1.5),
                  }}
                  onPress={() => {
                    closeModal();
                    // console.log(`${label} pressed`);
                    navigation.navigate(item?.path);
                  }}
                >
                  <Text className="text-center font-SemiBold text-base text-textPrimary">
                    {item?.title}
                  </Text>
                </Pressable>
              ))}
            </View>
            {/* Triangle tip pointing down */}
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
              Wardrobe: {
                active: require("../../../assets/images/war_active.webp"),
                inactive: require("../../../assets/images/war_inactive.webp"),
              },
              Community: {
                active: require("../../../assets/images/com_active.webp"),
                inactive: require("../../../assets/images/com_inactive.webp"),
              },
            };

            const icon = isFocused
              ? icons[route.name]?.active
              : icons[route.name]?.inactive;

            return (
              <Pressable key={index} onPress={onPress} style={styles.tabItem}>
                <Image source={icon} style={styles.tabIcon} />
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
            <Text style={styles.plusIcon}>+</Text>
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
              Planner: {
                active: require("../../../assets/images/plan_active.webp"),
                inactive: require("../../../assets/images/plan_inactive.webp"),
              },
              Account: {
                active: require("../../../assets/images/acc_active.webp"),
                inactive: require("../../../assets/images/acc_inactive.webp"),
              },
            };

            const icon = isFocused
              ? icons[route.name]?.active
              : icons[route.name]?.inactive;

            return (
              <Pressable key={index} onPress={onPress} style={styles.tabItem}>
                <Image source={icon} style={styles.tabIcon} />
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
    >
      <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Planner" component={PlannerScreen} />
      <Tab.Screen name="Account" component={AccountStack} />
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
