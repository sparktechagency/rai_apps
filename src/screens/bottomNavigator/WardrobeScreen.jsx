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
  ScrollView,
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
import { SHARE_OPTIONS } from "./AccountScreen";

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

export const ShareSheet = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/40">
        <View
          style={{
            backgroundColor: "red",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 25,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 10,
          }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between mb-5">
            <Pressable onPress={onClose}>
              <View className="p-1 rounded-full bg-gray-200">
                <X size={22} />
              </View>
            </Pressable>
            <Text className="font-bold text-2xl">Share</Text>
            <View style={{ width: 32 }} /> {/* Spacer */}
          </View>

          {/* Options */}
          <View className="flex-row w-full justify-between gap-2 mt-2">
            {SHARE_OPTIONS.map((item, index) => (
              <View key={index} className="justify-center items-center gap-1">
                <Image
                  source={item.img}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                />
                <Text className="font-medium text-base">{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const Sidebar = ({ visible, onClose, setShowShareModal }) => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
  const sidebarMenuItems = [
    {
      id: 1,
      icon: Settings,
      label: "Privacy & Settings",
      path: "AccountPrivacyStack",
    },
    {
      id: 2,
      icon: HelpCircle,
      label: "Help",
      path: "AccountFeedback",
    },
    { id: 3, icon: Star, label: "Rate Rai" },
  ];
  const bottomMenuItems = [
    { id: 4, icon: Share, label: "Share Profile", type: "modal" },
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
          <View
            className="flex-row  items-center  "
            style={{
              paddingHorizontal: responsiveWidth(5),
              paddingVertical: responsiveHeight(2),
              gap: responsiveWidth(3),
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
              }}
              className=" rounded-full mb-3 border border-[#5700FE]"
              style={{
                width: responsiveWidth(14),
                height: responsiveWidth(14),
              }}
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
              <View
                className="flex-row items-center  mt-1"
                style={{
                  gap: responsiveWidth(1),
                }}
              >
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
                onPress={() => {
                  onClose();
                  if (item.path) {
                    navigation.navigate("AccountStack", { screen: item.path });
                  }
                }}
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
                onPress={() => {
                  onClose();
                  if (item.type === "modal") {
                    setShowShareModal(true);
                  }
                }}
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
      path: "CreateOutfitStack",
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
      path: "Analytics",
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

  // ✅ Clean and reusable toggle function
  const toggleItem = (setter) => (item) => {
    setter((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleToggleSeason = toggleItem(setSelectedSeasons);
  const handleToggleStyle = toggleItem(setSelectedStyles);
  const resetFilters = () => {
    setUsageValue(50);
    setSelectedSeasons([]);
    setSelectedStyles([]);
    // If you want to reset other components (like brand/color), add them here too
  };
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View className="flex-1 ">
        <View
          className="flex-1 bg-white h-full "
          style={{
            padding: responsiveWidth(5),
          }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between  border-b border-gray-100">
            <Pressable onPress={onCancel} className="p-2">
              <X size={24} color="#000" />
            </Pressable>
            <Text className="text-xl font-semibold text-textPrimary">
              Filters
            </Text>
            <Pressable onPress={resetFilters}>
              <Text className="text-base font-medium text-textPrimary">
                Reset
              </Text>
            </Pressable>
          </View>
          <ScrollView
            contentContainerStyle={{
              gap: responsiveHeight(2),
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* Usage Slider */}
            <View className="">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-SemiBold text-black">Usage</Text>
                <Text className="text-base font-Medium text-violet-500">
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
                <Text className="text-sm font-Medium text-gray-400">Min 1</Text>
                <Text className="text-sm font-Medium text-gray-400">
                  Max 1000
                </Text>
              </View>
            </View>

            {/* Brand + Color Palette */}
            <CustomBottomSheet title="Brand" data={categories} />
            <ColorPalette />

            {/* Season */}
            <View className="">
              <Text className="text-lg font-SemiBold text-black">Season</Text>
              <View className="flex-row flex-wrap gap-2 mt-2">
                {seasons.map((season) => (
                  <Pressable
                    key={season}
                    onPress={() => handleToggleSeason(season)}
                    className={`py-2 px-5 rounded-full mb-2 ${
                      selectedSeasons.includes(season)
                        ? "bg-surfaceAction"
                        : "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`text-base font-Medium ${
                        selectedSeasons.includes(season)
                          ? "text-white"
                          : "text-textPrimary"
                      }`}
                    >
                      {season}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Style */}
            <View className="">
              <Text className="text-lg font-SemiBold text-black">Style</Text>
              <View className="flex-row flex-wrap gap-2 mt-2">
                {stylesList.map((style) => (
                  <Pressable
                    key={style}
                    onPress={() => handleToggleStyle(style)}
                    className={`py-2 px-5 rounded-full mb-2 ${
                      selectedStyles.includes(style)
                        ? "bg-surfaceAction"
                        : "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`text-sm font-Medium ${
                        selectedStyles.includes(style)
                          ? "text-white"
                          : "text-textPrimary"
                      }`}
                    >
                      {style}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Apply Button */}
          <View>
            <Pressable
              className="bg-surfaceAction rounded-2xl py-4 items-center"
              onPress={onCancel}
            >
              <Text className="text-white text-lg font-SemiBold">Apply</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const WardrobeScreen = () => {
  const [showShareModal, setShowShareModal] = useState(false);

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
    [TAB_IDS.Outfit]: () => <OutfitTab tab={tab === TAB_IDS.Outfit} />,
    [TAB_IDS.Lookbooks]: () => <LookbookTab tab={tab === TAB_IDS.Lookbooks} />,
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
              className="flex-1 text-base px-2 text-textPrimary font-Medium"
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

      <View className="h-3/4">
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
      </View>

      {/* Modals */}
      <BottomSheet visible={showModal} onCancel={() => setShowModal(false)} />
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

export default WardrobeScreen;
