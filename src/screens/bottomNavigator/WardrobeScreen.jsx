// import {
//   EllipsisVertical,
//   Search,
//   SlidersHorizontal,
//   X,
//   Globe,
//   Canvas,
//   Heart,
//   Shirt,
//   BarChart3,
// } from "lucide-react-native";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   TextInput,
//   Modal,
// } from "react-native";
// import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
// import { SafeAreaView } from "react-native-safe-area-context";
// import ItemTab from "./tabComponents/ItemTab";
// import LookbookTab from "./tabComponents/LookbookTab";
// import OutfitTab from "./tabComponents/OutfitTab";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import CustomLocationModal from "./tabComponents/CustomLocationModal";
// import ColorPalette from "../../components/ColorPallete";
// import CustomBottomSheet from "../../components/CustomBottomSheet";
// import { categories } from "../../../assets/data/data";
// import { Slider } from "@miblanchard/react-native-slider";

// const seasons = ["Fall", "Summer", "Spring", "All"];
// const stylesList = [
//   "Casual",
//   "Office",
//   "Evening",
//   "Sports",
//   "Business",
//   "Home",
// ];
// const BottomSheet = ({ visible, onCancel }) => {
//   const [usageValue, setUsageValue] = useState(50);
//   const [selectedSeasons, setSelectedSeasons] = useState(["Fall", "Summer"]);
//   const [selectedStyles, setSelectedStyles] = useState(["Casual", "Office"]);
//   const toggleSeason = (season) => {
//     setSelectedSeasons((prev) =>
//       prev.includes(season)
//         ? prev.filter((s) => s !== season)
//         : [...prev, season]
//     );
//   };

//   const toggleStyle = (style) => {
//     setSelectedStyles((prev) =>
//       prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
//     );
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
//           className="bg-white "
//           style={{ height: "100%", padding: responsiveWidth(5) }}
//         >
//           <View className="flex-row items-center justify-between py-4  border-b border-gray-100">
//             <Pressable onPress={onCancel} className="p-2">
//               <X size={24} color="#000" />
//             </Pressable>
//             <Text className="text-xl font-SemiBold text-textPrimary">
//               Filters
//             </Text>
//             <Pressable>
//               <Text className="text-base font-Medium text-textPrimary">
//                 Reset
//               </Text>
//             </Pressable>
//           </View>

//           <View className="my-5">
//             <View className="flex-row justify-between items-center mb-4">
//               <Text className="text-lg font-SemiBold text-black">Usage</Text>
//               <Text className="text-base font-Medium text-violet-500">
//                 {usageValue}
//               </Text>
//             </View>

//             <Slider
//               value={usageValue}
//               onValueChange={setUsageValue}
//               minimumValue={1}
//               maximumValue={1000}
//               step={1}
//               minimumTrackTintColor="#8B5CF6"
//               maximumTrackTintColor="#E5E7EB"
//               thumbTintColor="#5700FE"
//               // containerStyle={{ height: 60 }}
//               trackStyle={{
//                 height: 10,
//                 borderRadius: 5,
//                 backgroundColor: "#E5E7EB",
//               }}
//               thumbStyle={{
//                 width: 24,
//                 height: 24,
//                 borderRadius: 15,
//                 backgroundColor: "#5700FE",
//                 // borderWidth: 2,
//                 // borderColor: "white",
//                 // shadowColor: "#000",
//                 // shadowOffset: { width: 0, height: 2 },
//                 // shadowOpacity: 0.3,
//                 // shadowRadius: 3,
//                 // elevation: 4, // Android shadow
//               }}
//             />

//             <View className="flex-row justify-between ">
//               <Text className="text-sm font-Medium text-gray-400">Min 1</Text>
//               <Text className="text-sm font-Medium text-gray-400">
//                 Max 1000
//               </Text>
//             </View>
//           </View>
//           <CustomBottomSheet
//             title="Brand"
//             data={categories}
//             // initialSelected={}
//             // onChange={(items) => setSelectedFruits(items)}
//           />
//           <ColorPalette />
//           <View className="my-5">
//             <Text className="text-lg font-semibold text-black">Season</Text>
//             <View className="flex-row flex-wrap gap-2 mt-2">
//               {seasons.map((season) => (
//                 <Pressable
//                   key={season}
//                   onPress={() => toggleSeason(season)}
//                   className={`py-2 px-5 rounded-full mb-2 ${selectedSeasons.includes(season) ? "bg-surfaceAction" : "bg-gray-100"}`}
//                 >
//                   <Text
//                     className={`text-base font-Medium ${selectedSeasons.includes(season) ? "text-white" : "text-textPrimary"}`}
//                   >
//                     {season}
//                   </Text>
//                 </Pressable>
//               ))}
//             </View>
//           </View>

//           <View className="my-5">
//             <Text className="text-lg font-semibold text-black">Style</Text>
//             <View className="flex-row flex-wrap gap-2 mt-2">
//               {stylesList.map((style) => (
//                 <Pressable
//                   key={style}
//                   onPress={() => toggleStyle(style)}
//                   className={`py-2 px-5 rounded-full mb-2 ${selectedStyles.includes(style) ? "bg-surfaceAction" : "bg-gray-100"}`}
//                 >
//                   <Text
//                     className={`text-sm font-Medium ${selectedStyles.includes(style) ? "text-white" : "text-textPrimary"}`}
//                   >
//                     {style}
//                   </Text>
//                 </Pressable>
//               ))}
//             </View>
//           </View>
//           <View>
//             <Pressable
//               className="bg-surfaceAction rounded-2xl py-4 items-center"
//               onPress={onCancel}
//               activeOpacity={0.8}
//             >
//               <Text className="text-white text-lg font-SemiBold">Apply</Text>
//             </Pressable>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const DropdownMenu = ({ visible, onClose , position}) => {
//   const menuItems = [
//     { id: 1, icon: require('../../../assets/images/globe.png'), label: "My Community" },
//     { id: 2, icon: require('../../../assets/images/canvas.png'), label: "Canvas" },
//     { id: 3, icon: require('../../../assets/images/heart.png'), label: "Wishlist" },
//     { id: 4, icon: require('../../../assets/images/dress.png'), label: "Dress Me" },
//     { id: 5, icon: require('../../../assets/images/stat.png'), label: "Analytics" },
//   ];

//   const handleItemPress = (item) => {
//     console.log(`Selected: ${item.label}`);
//     // Add your navigation logic here
//     onClose();
//   };

//   if (!visible) return null;

//   return (
//     <Modal
//       transparent
//       visible={visible}
//       animationType="fade"
//       onRequestClose={onClose}
//     >
//       <Pressable
//         className="flex-1 bg-black/50 "
//         onPress={onClose}
//         activeOpacity={1}
//       >
//         <View
//           style={[
//             styles.dropdownContainer,
//             {
//               top: position.y + responsiveHeight(6),
//               right: responsiveWidth(6), // Position from right edge
//             },
//           ]}
//         >
//           {menuItems.map((item, index) => (
//             <Pressable
//               key={item.id}
//               style={[
//                 styles.menuItem,
//                 index === menuItems.length - 1 && styles.lastMenuItem,
//               ]}
//               onPress={() => handleItemPress(item)}
//             >
//               <Image source={item.icon} className="object-contain w-6 h-6" />
//               <Text style={styles.menuText}>{item.label}</Text>
//             </Pressable>
//           ))}
//         </View>
//       </Pressable>
//     </Modal>
//   );
// };

// const TAB_IDS = {
//   Items: "Items",
//   Outfit: "Outfit",
//   Lookbooks: "Lookbooks",
// };

// const TAB_OPTIONS = [
//   { id: TAB_IDS.Items, label: "Items" },
//   { id: TAB_IDS.Outfit, label: "Outfit" },
//   { id: TAB_IDS.Lookbooks, label: "Lookbooks" },
// ];

// const WardrobeScreen = () => {
//   const [activeTab, setActiveTab] = useState("Items");
//   const [searchText, setSearchText] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
//   const ellipsisRef = useRef(null);
//   const route = useRoute();
//   const { tab } = route.params || {};

//   console.log("LINE AT 43", tab);

//   useEffect(() => {
//     setActiveTab(tab || "Items");
//   }, []);

//   const navigation = useNavigation();

//   const handleEllipsisPress = () => {
//     if (ellipsisRef.current) {
//       ellipsisRef.current.measure((x, y, width, height, pageX, pageY) => {
//         setDropdownPosition({ x: pageX, y: pageY + height });
//         setShowDropdown(true);
//       });
//     }
//     setShowDropdown(true);
//   };
//   return (
//     <SafeAreaView
//       className="flex-1 bg-white"
//       showsVerticalScrollIndicator={false}
//     >
//       {/* Header */}
//       <View
//         className="bg-surfacePrimary px-4 py-3 flex-row items-center justify-between"
//         style={{
//           borderBottomLeftRadius: 20,
//           borderBottomRightRadius: 20,
//         }}
//       >
//         <View className="flex-row items-center">
//           <Image
//             source={{
//               uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//             }}
//             className=" rounded-full mr-3 border border-borderAction"
//             style={{ width: responsiveWidth(13), height: responsiveWidth(13) }}
//           />
//           <View>
//             <Text className="text-lg font-Bold text-textPrimary">
//               Hey, Mahfuz !
//             </Text>
//             <Text className="text-base font-Regular text-textSecondary">
//               Explore your wardrobe
//             </Text>
//           </View>
//         </View>

//         <View className="flex-row items-center">
//           <Pressable
//             onPress={() => navigation.navigate("Notification")}
//             className="p-2 mr-2"
//           >
//             <Image source={require("../../../assets/images/noti.webp")} />
//           </Pressable>
//           <Pressable onPress={handleEllipsisPress} className="p-2">
//             <EllipsisVertical />
//           </Pressable>
//         </View>
//       </View>

//       {tab && (
//         <View className="flex-row items-center px-4 py-2 bg-white gap-3">
//           {/* Search Input */}
//           <View className="flex-1 flex-row items-center  border border-gray-200 rounded-2xl px-4 py-1 ">
//             {/* Search Icon */}
//             <Search size={18} color="#C5BFD1" />

//             {/* Text Input */}
//             <TextInput
//               className="flex-1 text-base text-textPrimary px-2 font-Medium"
//               placeholder="Search"
//               placeholderTextColor="#9ca3af"
//               value={searchText}
//               onChangeText={setSearchText}
//               returnKeyType="search"
//             />
//           </View>

//           {/* Filter Button */}
//           <Pressable
//             className="p-4 bg-surfaceAction rounded-xl items-center justify-center"
//             onPress={() => setShowModal(true)}
//           >
//             <SlidersHorizontal size={20} color={"white"} />
//           </Pressable>
//         </View>
//       )}
//       {/* Tab Navigation */}
//       <View className="bg-white px-4 py-2 flex-row">
//         {TAB_OPTIONS.map((tab) => (
//           <Pressable
//             key={tab.id}
//             className="flex-1 py-3"
//             onPress={() => setActiveTab(tab.id)}
//           >
//             <Text
//               className={`text-center text-base font-Medium  ${
//                 activeTab === tab.id
//                   ? "text-textPrimary border-b-2 border-borderAction"
//                   : "text-textPrimary"
//               }`}
//               style={activeTab === tab.id ? styles.activeTab : {}}
//             >
//               {tab.label}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       {activeTab === TAB_IDS.Items && <ItemTab tab={tab === TAB_IDS.Items} />}
//       {activeTab === TAB_IDS.Outfit && <OutfitTab />}
//       {activeTab === TAB_IDS.Lookbooks && (
//         <LookbookTab tab={tab === TAB_IDS.Lookbooks} />
//       )}
//       <BottomSheet visible={showModal} onCancel={() => setShowModal(false)} />
//       <DropdownMenu
//         visible={showDropdown}
//         onClose={() => setShowDropdown(false)}
//         position={dropdownPosition}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: "#7c3aed",
//     paddingBottom: 8,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "transparent",
//   },
//   dropdownContainer: {
//     position: "absolute",
//     backgroundColor: "white",
//     borderRadius: 12,
//     minWidth: 160,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     elevation: 8,
//     borderWidth: 1,
//     borderColor: "#f0f0f0",
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f5f5f5",
//     gap: 5
//   },
//   lastMenuItem: {
//     borderBottomWidth: 0,
//   },
//   menuIcon: {
//     marginRight: 12,
//   },
//   menuText: {
//     fontSize: 15,
//     color: "#333",
//     fontWeight: "500",
//   },
// });

// export default WardrobeScreen;

// import {
//   EllipsisVertical,
//   Search,
//   SlidersHorizontal,
//   X,
//   Globe,
//   Canvas,
//   Heart,
//   Shirt,
//   BarChart3,
//   Settings,
//   HelpCircle,
//   Star,
//   Share,
//   LogOut,
// } from "lucide-react-native";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   Pressable,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   TextInput,
//   Modal,
//   Animated,
//   Dimensions,
// } from "react-native";
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from "react-native-responsive-dimensions";
// import { SafeAreaView } from "react-native-safe-area-context";
// import ItemTab from "./tabComponents/ItemTab";
// import LookbookTab from "./tabComponents/LookbookTab";
// import OutfitTab from "./tabComponents/OutfitTab";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import CustomLocationModal from "./tabComponents/CustomLocationModal";
// import ColorPalette from "../../components/ColorPallete";
// import CustomBottomSheet from "../../components/CustomBottomSheet";
// import { categories } from "../../../assets/data/data";
// import { Slider } from "@miblanchard/react-native-slider";

// const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.6;

// const seasons = ["Fall", "Summer", "Spring", "All"];
// const stylesList = [
//   "Casual",
//   "Office",
//   "Evening",
//   "Sports",
//   "Business",
//   "Home",
// ];

// // Sidebar Component
// const Sidebar = ({ visible, onClose }) => {
//   const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

//   const sidebarMenuItems = [
//     { id: 1, icon: Settings, label: "Privacy & Settings" },
//     { id: 2, icon: HelpCircle, label: "Help" },
//     { id: 3, icon: Star, label: "Rate Rai" },
//     { id: 4, icon: Share, label: "Share Profile" },
//     { id: 5, icon: LogOut, label: "Logout" },
//   ];

//   React.useEffect(() => {
//     if (visible) {
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       Animated.timing(slideAnim, {
//         toValue: -SIDEBAR_WIDTH,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [visible]);

//   const handleMenuItemPress = (item) => {
//     console.log(`Selected: ${item.label}`);
//     // Add your navigation logic here
//     if (item.label === "Logout") {
//       // Handle logout logic
//     }
//     onClose();
//   };

//   if (!visible) return null;

//   return (
//     <Modal
//       transparent
//       visible={visible}
//       animationType="none"
//       onRequestClose={onClose}
//     >
//       <View style={styles.sidebarOverlay}>
//         <Pressable
//           style={styles.sidebarBackdrop}
//           onPress={onClose}
//           activeOpacity={1}
//         />
//         <Animated.View
//           style={[
//             styles.sidebarContainer,
//             {
//               transform: [{ translateX: slideAnim }],
//               width: SIDEBAR_WIDTH,
//             },
//           ]}
//         >
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <Image
//               source={{
//                 uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//               }}
//               style={styles.sidebarProfileImage}
//             />
//             <Text style={styles.profileName}>Hey, Mahfuz !</Text>
//             <Text style={styles.profileEmail}>@email</Text>
//             <View style={styles.followStats}>
//               <Text style={styles.followText}>0 followers</Text>
//               <Text style={styles.followText}>1 following</Text>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuSection}>
//             {sidebarMenuItems.map((item, index) => (
//               <Pressable
//                 key={item.id}
//                 style={styles.sidebarMenuItem}
//                 onPress={() => handleMenuItemPress(item)}
//               >
//                 <item.icon
//                   size={20}
//                   color="#666"
//                   style={styles.sidebarMenuIcon}
//                 />
//                 <Text style={styles.sidebarMenuText}>{item.label}</Text>
//               </Pressable>
//             ))}
//           </View>
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

// const BottomSheet = ({ visible, onCancel }) => {
//   const [usageValue, setUsageValue] = useState(50);
//   const [selectedSeasons, setSelectedSeasons] = useState(["Fall", "Summer"]);
//   const [selectedStyles, setSelectedStyles] = useState(["Casual", "Office"]);

//   const toggleSeason = (season) => {
//     setSelectedSeasons((prev) =>
//       prev.includes(season)
//         ? prev.filter((s) => s !== season)
//         : [...prev, season]
//     );
//   };

//   const toggleStyle = (style) => {
//     setSelectedStyles((prev) =>
//       prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
//     );
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
//           className="bg-white "
//           style={{ height: "100%", padding: responsiveWidth(5) }}
//         >
//           <View className="flex-row items-center justify-between py-4  border-b border-gray-100">
//             <Pressable onPress={onCancel} className="p-2">
//               <X size={24} color="#000" />
//             </Pressable>
//             <Text className="text-xl font-SemiBold text-textPrimary">
//               Filters
//             </Text>
//             <Pressable>
//               <Text className="text-base font-Medium text-textPrimary">
//                 Reset
//               </Text>
//             </Pressable>
//           </View>

//           <View className="my-5">
//             <View className="flex-row justify-between items-center mb-4">
//               <Text className="text-lg font-SemiBold text-black">Usage</Text>
//               <Text className="text-base font-Medium text-violet-500">
//                 {usageValue}
//               </Text>
//             </View>

//             <Slider
//               value={usageValue}
//               onValueChange={setUsageValue}
//               minimumValue={1}
//               maximumValue={1000}
//               step={1}
//               minimumTrackTintColor="#8B5CF6"
//               maximumTrackTintColor="#E5E7EB"
//               thumbTintColor="#5700FE"
//               trackStyle={{
//                 height: 10,
//                 borderRadius: 5,
//                 backgroundColor: "#E5E7EB",
//               }}
//               thumbStyle={{
//                 width: 24,
//                 height: 24,
//                 borderRadius: 15,
//                 backgroundColor: "#5700FE",
//               }}
//             />

//             <View className="flex-row justify-between ">
//               <Text className="text-sm font-Medium text-gray-400">Min 1</Text>
//               <Text className="text-sm font-Medium text-gray-400">
//                 Max 1000
//               </Text>
//             </View>
//           </View>
//           <CustomBottomSheet title="Brand" data={categories} />
//           <ColorPalette />
//           <View className="my-5">
//             <Text className="text-lg font-semibold text-black">Season</Text>
//             <View className="flex-row flex-wrap gap-2 mt-2">
//               {seasons.map((season) => (
//                 <Pressable
//                   key={season}
//                   onPress={() => toggleSeason(season)}
//                   className={`py-2 px-5 rounded-full mb-2 ${selectedSeasons.includes(season) ? "bg-surfaceAction" : "bg-gray-100"}`}
//                 >
//                   <Text
//                     className={`text-base font-Medium ${selectedSeasons.includes(season) ? "text-white" : "text-textPrimary"}`}
//                   >
//                     {season}
//                   </Text>
//                 </Pressable>
//               ))}
//             </View>
//           </View>

//           <View className="my-5">
//             <Text className="text-lg font-semibold text-black">Style</Text>
//             <View className="flex-row flex-wrap gap-2 mt-2">
//               {stylesList.map((style) => (
//                 <Pressable
//                   key={style}
//                   onPress={() => toggleStyle(style)}
//                   className={`py-2 px-5 rounded-full mb-2 ${selectedStyles.includes(style) ? "bg-surfaceAction" : "bg-gray-100"}`}
//                 >
//                   <Text
//                     className={`text-sm font-Medium ${selectedStyles.includes(style) ? "text-white" : "text-textPrimary"}`}
//                   >
//                     {style}
//                   </Text>
//                 </Pressable>
//               ))}
//             </View>
//           </View>
//           <View>
//             <Pressable
//               className="bg-surfaceAction rounded-2xl py-4 items-center"
//               onPress={onCancel}
//               activeOpacity={0.8}
//             >
//               <Text className="text-white text-lg font-SemiBold">Apply</Text>
//             </Pressable>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const DropdownMenu = ({ visible, onClose, position }) => {
//   const menuItems = [
//     {
//       id: 1,
//       icon: require("../../../assets/images/globe.png"),
//       label: "My Community",
//     },
//     {
//       id: 2,
//       icon: require("../../../assets/images/canvas.png"),
//       label: "Canvas",
//     },
//     {
//       id: 3,
//       icon: require("../../../assets/images/heart.png"),
//       label: "Wishlist",
//     },
//     {
//       id: 4,
//       icon: require("../../../assets/images/dress.png"),
//       label: "Dress Me",
//     },
//     {
//       id: 5,
//       icon: require("../../../assets/images/stat.png"),
//       label: "Analytics",
//     },
//   ];

//   const handleItemPress = (item) => {
//     console.log(`Selected: ${item.label}`);
//     // Add your navigation logic here
//     onClose();
//   };

//   if (!visible) return null;

//   return (
//     <Modal
//       transparent
//       visible={visible}
//       animationType="fade"
//       onRequestClose={onClose}
//     >
//       <Pressable
//         className="flex-1 bg-black/50 "
//         onPress={onClose}
//         activeOpacity={1}
//       >
//         <View
//           style={[
//             styles.dropdownContainer,
//             {
//               top: position.y + responsiveHeight(6),
//               right: responsiveWidth(6),
//             },
//           ]}
//         >
//           {menuItems.map((item, index) => (
//             <Pressable
//               key={item.id}
//               style={[
//                 styles.menuItem,
//                 index === menuItems.length - 1 && styles.lastMenuItem,
//               ]}
//               onPress={() => handleItemPress(item)}
//             >
//               <Image source={item.icon} className="object-contain w-6 h-6" />
//               <Text style={styles.menuText}>{item.label}</Text>
//             </Pressable>
//           ))}
//         </View>
//       </Pressable>
//     </Modal>
//   );
// };

// const TAB_IDS = {
//   Items: "Items",
//   Outfit: "Outfit",
//   Lookbooks: "Lookbooks",
// };

// const TAB_OPTIONS = [
//   { id: TAB_IDS.Items, label: "Items" },
//   { id: TAB_IDS.Outfit, label: "Outfit" },
//   { id: TAB_IDS.Lookbooks, label: "Lookbooks" },
// ];

// const WardrobeScreen = () => {
//   const [activeTab, setActiveTab] = useState("Items");
//   const [searchText, setSearchText] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
//   const ellipsisRef = useRef(null);
//   const route = useRoute();
//   const { tab } = route.params || {};

//   console.log("LINE AT 43", tab);

//   useEffect(() => {
//     setActiveTab(tab || "Items");
//   }, []);

//   const navigation = useNavigation();

//   const handleEllipsisPress = () => {
//     if (ellipsisRef.current) {
//       ellipsisRef.current.measure((x, y, width, height, pageX, pageY) => {
//         setDropdownPosition({ x: pageX, y: pageY + height });
//         setShowDropdown(true);
//       });
//     }
//     setShowDropdown(true);
//   };

//   const handleProfilePress = () => {
//     setShowSidebar(true);
//   };

//   return (
//     <SafeAreaView
//       className="flex-1 bg-white"
//       showsVerticalScrollIndicator={false}
//     >
//       {/* Header */}
//       <View
//         className="bg-surfacePrimary px-4 py-3 flex-row items-center justify-between"
//         style={{
//           borderBottomLeftRadius: 20,
//           borderBottomRightRadius: 20,
//         }}
//       >
//         <Pressable
//           onPress={handleProfilePress}
//           className="flex-row items-center"
//         >
//           <Image
//             source={{
//               uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//             }}
//             className=" rounded-full mr-3 border border-borderAction"
//             style={{ width: responsiveWidth(13), height: responsiveWidth(13) }}
//           />
//           <View>
//             <Text className="text-lg font-Bold text-textPrimary">
//               Hey, Mahfuz !
//             </Text>
//             <Text className="text-base font-Regular text-textSecondary">
//               Explore your wardrobe
//             </Text>
//           </View>
//         </Pressable>

//         <View className="flex-row items-center">
//           <Pressable
//             onPress={() => navigation.navigate("Notification")}
//             className="p-2 mr-2"
//           >
//             <Image source={require("../../../assets/images/noti.webp")} />
//           </Pressable>
//           <Pressable onPress={handleEllipsisPress} className="p-2">
//             <EllipsisVertical />
//           </Pressable>
//         </View>
//       </View>

//       {tab && (
//         <View className="flex-row items-center px-4 py-2 bg-white gap-3">
//           {/* Search Input */}
//           <View className="flex-1 flex-row items-center  border border-gray-200 rounded-2xl px-4 py-1 ">
//             {/* Search Icon */}
//             <Search size={18} color="#C5BFD1" />

//             {/* Text Input */}
//             <TextInput
//               className="flex-1 text-base text-textPrimary px-2 font-Medium"
//               placeholder="Search"
//               placeholderTextColor="#9ca3af"
//               value={searchText}
//               onChangeText={setSearchText}
//               returnKeyType="search"
//             />
//           </View>

//           {/* Filter Button */}
//           <Pressable
//             className="p-4 bg-surfaceAction rounded-xl items-center justify-center"
//             onPress={() => setShowModal(true)}
//           >
//             <SlidersHorizontal size={20} color={"white"} />
//           </Pressable>
//         </View>
//       )}

//       {/* Tab Navigation */}
//       <View className="bg-white px-4 py-2 flex-row">
//         {TAB_OPTIONS.map((tab) => (
//           <Pressable
//             key={tab.id}
//             className="flex-1 py-3"
//             onPress={() => setActiveTab(tab.id)}
//           >
//             <Text
//               className={`text-center text-base font-Medium  ${
//                 activeTab === tab.id
//                   ? "text-textPrimary border-b-2 border-borderAction"
//                   : "text-textPrimary"
//               }`}
//               style={activeTab === tab.id ? styles.activeTab : {}}
//             >
//               {tab.label}
//             </Text>
//           </Pressable>
//         ))}
//       </View>

//       {activeTab === TAB_IDS.Items && <ItemTab tab={tab === TAB_IDS.Items} />}
//       {activeTab === TAB_IDS.Outfit && <OutfitTab />}
//       {activeTab === TAB_IDS.Lookbooks && (
//         <LookbookTab tab={tab === TAB_IDS.Lookbooks} />
//       )}

//       <BottomSheet visible={showModal} onCancel={() => setShowModal(false)} />
//       <DropdownMenu
//         visible={showDropdown}
//         onClose={() => setShowDropdown(false)}
//         position={dropdownPosition}
//       />
//       <Sidebar visible={showSidebar} onClose={() => setShowSidebar(false)} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: "#7c3aed",
//     paddingBottom: 8,
//   },
//   dropdownContainer: {
//     position: "absolute",
//     backgroundColor: "white",
//     borderRadius: 12,
//     minWidth: 160,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     elevation: 8,
//     borderWidth: 1,
//     borderColor: "#f0f0f0",
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f5f5f5",
//     gap: 5,
//   },
//   lastMenuItem: {
//     borderBottomWidth: 0,
//   },
//   menuText: {
//     fontSize: 15,
//     color: "#333",
//     fontWeight: "500",
//   },
//   // Sidebar Styles
//   sidebarOverlay: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   sidebarBackdrop: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   sidebarContainer: {
//     position: "absolute",
//     left: 0,
//     top: 0,
//     backgroundColor: "white",
//     height: "100%",
//     paddingTop: 50,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 2,
//       height: 0,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   profileSection: {
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f0f0f0",
//   },
//   sidebarProfileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 15,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 5,
//   },
//   profileEmail: {
//     fontSize: 14,
//     color: "#666",
//     marginBottom: 15,
//   },
//   followStats: {
//     flexDirection: "row",
//     gap: 20,
//   },
//   followText: {
//     fontSize: 14,
//     color: "#666",
//   },
//   menuSection: {
//     flex: 1,
//     paddingTop: 20,
//   },
//   sidebarMenuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//   },
//   sidebarMenuIcon: {
//     marginRight: 15,
//   },
//   sidebarMenuText: {
//     fontSize: 16,
//     color: "#333",
//     fontWeight: "500",
//   },
// });

// export default WardrobeScreen;

// WardrobeScreen.js
import {
  EllipsisVertical,
  Search,
  SlidersHorizontal,
  X,
  Settings,
  HelpCircle,
  Star,
  Share,
  LogOut,
} from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Modal,
  Animated,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import ItemTab from "./tabComponents/ItemTab";
import LookbookTab from "./tabComponents/LookbookTab";
import OutfitTab from "./tabComponents/OutfitTab";
import CustomBottomSheet from "../../components/CustomBottomSheet";
import ColorPalette from "../../components/ColorPallete";
import { categories } from "../../../assets/data/data";
import { Slider } from "@miblanchard/react-native-slider";
import { SceneMap, TabView } from "react-native-tab-view";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.6;
const seasons = ["Fall", "Summer", "Spring", "All"];
const stylesList = [
  "Casual",
  "Office",
  "Evening",
  "Sports",
  "Business",
  "Home",
];
export const TAB_IDS = {
  Items: "Items",
  Outfit: "Outfit",
  Lookbooks: "Lookbooks",
};
export const TAB_OPTIONS = [
  { id: TAB_IDS.Items, label: "Items" },
  { id: TAB_IDS.Outfit, label: "Outfit" },
  { id: TAB_IDS.Lookbooks, label: "Lookbooks" },
];

export const Sidebar = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const sidebarMenuItems = [
    { id: 1, icon: Settings, label: "Privacy & Settings" },
    { id: 2, icon: HelpCircle, label: "Help" },
    { id: 3, icon: Star, label: "Rate Rai" },
  ];
  const bottomMenuItems = [
    { id: 4, icon: Share, label: "Share Profile" },
    { id: 5, icon: LogOut, label: "Logout" },
  ];
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -SIDEBAR_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <View className="flex-1 flex-row">
        <Pressable className="absolute inset-0 bg-black/50" onPress={onClose} />
        <Animated.View
          className="bg-white h-full shadow-xl"
          style={{
            transform: [{ translateX: slideAnim }],
            width: SIDEBAR_WIDTH,
          }}
        >
          {/* Profile Section */}
          <View className="flex-row gap-3 items-center px-6 py-8 ">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
              }}
              className="w-16 h-16 rounded-full mb-3 border border-[#5700FE]"
            />
            <View className="gap-1">
              <View className="border-b border-zinc-200 gap-1">
                <Text className="text-lg font-SemiBold text-textPrimary ">
                  Hey, Mahfuz !
                </Text>
                <Text className="text-sm font-Regular text-gray-500 mb-1">
                  @email
                </Text>
              </View>
              <View className="flex-row gap-6 mt-1">
                <Text className="text-sm font-Medium text-textPrimary">
                  0 followers
                </Text>
                <Text className="text-sm font-Medium text-textPrimary">
                  1 Following
                </Text>
              </View>
            </View>
          </View>

          {/* Main Menu Items */}
          <View className="flex-1 pt-2">
            {sidebarMenuItems.map((item) => (
              <Pressable
                key={item.id}
                className="flex-row items-center px-6 py-4 active:bg-gray-50"
                onPress={() => onClose()}
              >
                <item.icon size={20} color="#000" style={{ marginRight: 16 }} />
                <Text className="text-base text-textPrimary font-Medium">
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Bottom Menu Items */}
          <View className=" pb-6">
            {bottomMenuItems.map((item) => (
              <Pressable
                key={item.id}
                className="flex-row items-center px-6 py-4 active:bg-gray-50"
                onPress={() => onClose()}
              >
                <item.icon size={20} color="#000" style={{ marginRight: 16 }} />
                <Text className="text-base text-textPrimary font-Medium">
                  {item.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export const DropdownMenu = ({ visible, onClose, position }) => {
  const menuItems = [
    {
      id: 1,
      icon: require("../../../assets/images/globe.png"),
      label: "My Community",
      path: "CommunityStack",
    },
    {
      id: 2,
      icon: require("../../../assets/images/canvas.png"),
      label: "Canvas",
    },
    {
      id: 3,
      icon: require("../../../assets/images/heart.png"),
      label: "Wishlist",
      path: "WishlistStack",
    },
    {
      id: 4,
      icon: require("../../../assets/images/dress.png"),
      label: "Dress Me",
      path: "DressMeStack",
    },
    {
      id: 5,
      icon: require("../../../assets/images/stat.png"),
      label: "Analytics",
    },
  ];

  if (!visible) return null;
  const navigation = useNavigation();
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable className="flex-1 bg-black/50" onPress={onClose}>
        <View
          className="absolute rounded-xl border border-gray-100 bg-white shadow-md min-w-[160px]"
          style={{ top: responsiveHeight(6), right: responsiveWidth(6) }}
        >
          {menuItems.map((item, index) => (
            <Pressable
              key={item.id}
              className={`flex-row items-center gap-2 px-4 py-3 ${index === menuItems.length - 1 ? "border-b-0" : "border-b border-gray-100"}`}
              onPress={() => {
                onClose();

                navigation.navigate(item.path);
              }}
            >
              <Image source={item.icon} className="w-6 h-6" />
              <Text className="text-[15px] text-gray-800 font-Medium">
                {item.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
};

const BottomSheet = ({ visible, onCancel }) => {
  const [usageValue, setUsageValue] = useState(50);
  const [selectedSeasons, setSelectedSeasons] = useState(["Fall", "Summer"]);
  const [selectedStyles, setSelectedStyles] = useState(["Casual", "Office"]);

  const toggleItem = (list, setter) => (item) => {
    setter((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white h-full px-[5%]">
          <View className="flex-row items-center justify-between py-4 border-b border-gray-100">
            <Pressable onPress={onCancel} className="p-2">
              <X size={24} color="#000" />
            </Pressable>
            <Text className="text-xl font-semibold text-textPrimary">
              Filters
            </Text>
            <Pressable>
              <Text className="text-base font-medium text-textPrimary">
                Reset
              </Text>
            </Pressable>
          </View>

          <View className="my-5">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold text-black">Usage</Text>
              <Text className="text-base font-medium text-violet-500">
                {usageValue}
              </Text>
            </View>
            <Slider
              value={usageValue}
              onValueChange={setUsageValue}
              minimumValue={1}
              maximumValue={1000}
              step={1}
              minimumTrackTintColor="#8B5CF6"
              maximumTrackTintColor="#E5E7EB"
              thumbTintColor="#5700FE"
              trackStyle={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#E5E7EB",
              }}
              thumbStyle={{
                width: 24,
                height: 24,
                borderRadius: 15,
                backgroundColor: "#5700FE",
              }}
            />
            <View className="flex-row justify-between">
              <Text className="text-sm font-medium text-gray-400">Min 1</Text>
              <Text className="text-sm font-medium text-gray-400">
                Max 1000
              </Text>
            </View>
          </View>

          <CustomBottomSheet title="Brand" data={categories} />
          <ColorPalette />

          <View className="my-5">
            <Text className="text-lg font-semibold text-black">Season</Text>
            <View className="flex-row flex-wrap gap-2 mt-2">
              {seasons.map((season) => (
                <Pressable
                  key={season}
                  onPress={toggleItem(seasons, setSelectedSeasons)}
                  className={`py-2 px-5 rounded-full mb-2 ${selectedSeasons.includes(season) ? "bg-surfaceAction" : "bg-gray-100"}`}
                >
                  <Text
                    className={`text-base font-medium ${selectedSeasons.includes(season) ? "text-white" : "text-textPrimary"}`}
                  >
                    {season}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View className="my-5">
            <Text className="text-lg font-semibold text-black">Style</Text>
            <View className="flex-row flex-wrap gap-2 mt-2">
              {stylesList.map((style) => (
                <Pressable
                  key={style}
                  onPress={toggleItem(stylesList, setSelectedStyles)}
                  className={`py-2 px-5 rounded-full mb-2 ${selectedStyles.includes(style) ? "bg-surfaceAction" : "bg-gray-100"}`}
                >
                  <Text
                    className={`text-sm font-medium ${selectedStyles.includes(style) ? "text-white" : "text-textPrimary"}`}
                  >
                    {style}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View>
            <Pressable
              className="bg-surfaceAction rounded-2xl py-4 items-center"
              onPress={onCancel}
            >
              <Text className="text-white text-lg font-semibold">Apply</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const WardrobeScreen = () => {
  const [activeTab, setActiveTab] = useState("Items");
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
  const ellipsisRef = useRef(null);
  const route = useRoute();
  const { tab } = route.params || {};
  const navigation = useNavigation();

  const layout = useWindowDimensions();

  const initialTab = tab ?? null;
  const initialIndex = TAB_OPTIONS.findIndex((t) => t.id === initialTab);

  const [index, setIndex] = useState(initialIndex);

  const routes = TAB_OPTIONS.map((tab) => ({
    key: tab.id,
    title: tab.label,
  }));

  const renderScene = SceneMap({
    [TAB_IDS.Items]: () => <ItemTab tab={tab === TAB_IDS.Items} />,
    [TAB_IDS.Outfit]: () => <OutfitTab />,
    [TAB_IDS.Lookbooks]: () => (
      <LookbookTab tab={tab === TAB_IDS.Lookbooks} />
    ),
  });

  useEffect(() => {
    setIndex(TAB_OPTIONS.findIndex((t) => t.id === activeTab));
  }, [activeTab]);

  useEffect(() => {
    if (tab) setActiveTab(tab);
  }, [tab]);

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
      <View className="bg-surfacePrimary px-5 py-3 flex-row items-center justify-between rounded-b-2xl">
        <Pressable
          onPress={() => setShowSidebar(true)}
          className="flex-row items-center"
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            }}
            className="w-14 h-14 rounded-full mr-3 border border-borderAction"
          />
          <View>
            <Text className="text-lg font-Bold text-textPrimary">
              Hey, Mahfuz !
            </Text>
            <Text className="text-base font-Medium text-textSecondary">
              Explore your wardrobe
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

      {/* Search + Filter */}
      {tab && (
        <View className="flex-row items-center px-4 py-2 bg-white gap-3">
          <View className="flex-1 flex-row items-center border border-gray-200 rounded-2xl px-4 py-1">
            <Search size={18} color="#C5BFD1" />
            <TextInput
              className="flex-1 text-base px-2 text-textPrimary font-medium"
              placeholder="Search"
              placeholderTextColor="#9ca3af"
              value={searchText}
              onChangeText={setSearchText}
              returnKeyType="search"
            />
          </View>
          <Pressable
            className="p-4 bg-surfaceAction rounded-xl items-center justify-center"
            onPress={() => setShowModal(true)}
          >
            <SlidersHorizontal size={20} color="white" />
          </Pressable>
        </View>
      )}

      {/* Tabs */}
      {/* <View className="bg-white px-5 py-2 flex-row">
        {TAB_OPTIONS.map((tab) => (
          <Pressable
            key={tab.id}
            className="flex-1 py-3"
            onPress={() => setActiveTab(tab.id)}
          >
            <Text
              className={`text-center text-base font-Medium ${activeTab === tab.id ? "text-textPrimary border-b-2 border-borderAction pb-2" : "text-textPrimary"}`}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View> */}
      <View className="bg-white px-5 py-2 flex-row">
        {TAB_OPTIONS.map((tab, i) => (
          <Pressable
            key={tab.id}
            className="flex-1 py-3"
            onPress={() => {
              setActiveTab(tab.id);
              setIndex(i);
            }}
          >
            <Text
              className={`text-center text-base font-Medium ${
                activeTab === tab.id
                  ? "text-textPrimary border-b-2 border-borderAction pb-2"
                  : "text-textPrimary"
              }`}
            >
              {tab.label}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Tab Content */}
      {/* {activeTab === TAB_IDS.Items && <ItemTab tab={tab === TAB_IDS.Items} />}
      {activeTab === TAB_IDS.Outfit && <OutfitTab />}
      {activeTab === TAB_IDS.Lookbooks && (
        <LookbookTab tab={tab === TAB_IDS.Lookbooks} />
      )} */}

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(i) => {
          setIndex(i);
          setActiveTab(TAB_OPTIONS[i].id);
        }}
        initialLayout={{ width: layout.width }}
        swipeEnabled={true}
        renderTabBar={() => null} // Hide default tab bar
      />

      {/* Modals */}
      <BottomSheet visible={showModal} onCancel={() => setShowModal(false)} />
      <DropdownMenu
        visible={showDropdown}
        onClose={() => setShowDropdown(false)}
        position={dropdownPosition}
      />
      <Sidebar visible={showSidebar} onClose={() => setShowSidebar(false)} />
    </SafeAreaView>
  );
};

export default WardrobeScreen;
