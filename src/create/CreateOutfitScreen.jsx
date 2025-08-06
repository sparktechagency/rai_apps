// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   StyleSheet,
//   Dimensions,
//   Image,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import {
//   GestureDetector,
//   GestureHandlerRootView,
//   Gesture,
// } from "react-native-gesture-handler";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";
// // import ViewShot from "react-native-view-shot";
// // import * as MediaLibrary from "expo-media-library";

// const { width, height } = Dimensions.get("window");

// const DraggableImage = ({ uri }) => {
//   const scale = useSharedValue(1);
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);
//   const rotation = useSharedValue(0);

//   const pan = Gesture.Pan().onChange((e) => {
//     translateX.value += e.changeX;
//     translateY.value += e.changeY;
//   });

//   const pinch = Gesture.Pinch().onChange((e) => {
//     scale.value = e.scale;
//   });

//   const rotate = Gesture.Rotation().onChange((e) => {
//     rotation.value += e.rotation;
//   });

//   const composedGesture = Gesture.Simultaneous(pan, pinch, rotate);

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [
//       { translateX: translateX.value },
//       { translateY: translateY.value },
//       { scale: scale.value },
//       { rotateZ: `${rotation.value}rad` },
//     ],
//   }));

//   return (
//     <GestureDetector gesture={composedGesture}>
//       <Animated.Image
//         source={{ uri }}
//         style={[styles.image, animatedStyle]}
//         resizeMode="contain"
//       />
//     </GestureDetector>
//   );
// };

// export default function CreateOutfitScreen() {
//   const [images, setImages] = useState([]);
//   // const viewShotRef = useRef();

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: false,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const uri = result.assets[0].uri;
//       setImages((prev) => [...prev, uri]);
//     }
//   };

//   // const saveCanvas = async () => {
//   //   const permission = await MediaLibrary.requestPermissionsAsync();
//   //   if (!permission.granted) {
//   //     alert("Media access denied");
//   //     return;
//   //   }

//   //   const uri = await viewShotRef.current.capture();
//   //   await MediaLibrary.saveToLibraryAsync(uri);
//   //   alert("Saved to gallery!");
//   // };

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View className="flex-1 bg-white items-center justify-center">
//         {/* <ViewShot
//           ref={viewShotRef}
//           style={styles.canvas}
//           options={{ format: "png", quality: 1 }}
//         > */}
//           <View style={styles.canvas}>
//             {images.map((uri, index) => (
//               <DraggableImage key={index} uri={uri} />
//             ))}
//           </View>
//         {/* </ViewShot> */}

//         <View className="absolute bottom-8 flex-row gap-4">
//           <Pressable
//             className="bg-black px-4 py-2 rounded-xl"
//             onPress={pickImage}
//           >
//             <Text className="text-white text-base">Upload</Text>
//           </Pressable>

//           <Pressable
//             className="bg-violet-600 px-4 py-2 rounded-xl"
//             // onPress={saveCanvas}
//           >
//             <Text className="text-white text-base">Save Image</Text>
//           </Pressable>
//         </View>
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   canvas: {
//     width: width * 0.9,
//     height: height * 0.6,
//     backgroundColor: "#F3F3F3",
//     borderRadius: 12,
//     overflow: "hidden",
//     position: "relative",
//   },
//   image: {
//     width: 150,
//     height: 150,
//     position: "absolute",
//   },
// });

// version2

// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   StyleSheet,
//   Dimensions,
//   Image,
//   Alert,
// } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import {
//   GestureDetector,
//   GestureHandlerRootView,
//   Gesture,
// } from "react-native-gesture-handler";
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";
// import ViewShot from "react-native-view-shot";
// import * as MediaLibrary from "expo-media-library";
// import { ArrowLeft } from "lucide-react-native";
// import { useNavigation } from "@react-navigation/native";
// import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { width, height } = Dimensions.get("window");

// const DraggableImage = ({ uri }) => {
//   const scale = useSharedValue(1);
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);
//   const rotation = useSharedValue(0);

//   const pan = Gesture.Pan().onChange((e) => {
//     translateX.value += e.changeX;
//     translateY.value += e.changeY;
//   });

//   const pinch = Gesture.Pinch().onChange((e) => {
//     scale.value = e.scale;
//   });

//   const rotate = Gesture.Rotation().onChange((e) => {
//     // Limit rotation to smaller increments
//     rotation.value += e.rotation * 0.3; // Sensitivity adjusted
//   });

//   const composedGesture = Gesture.Simultaneous(pan, pinch, rotate);

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [
//       { translateX: translateX.value },
//       { translateY: translateY.value },
//       { scale: scale.value },
//       { rotateZ: `${rotation.value}rad` },
//     ],
//   }));

//   return (
//     <GestureDetector gesture={composedGesture}>
//       <Animated.Image
//         source={{ uri }}
//         style={[styles.image, animatedStyle]}
//         resizeMode="contain"
//       />
//     </GestureDetector>
//   );
// };

// export default function CreateOutfitScreen() {
//   const [images, setImages] = useState([]);
//   const viewShotRef = useRef();

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: false,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const uri = result.assets[0].uri;
//       setImages((prev) => [...prev, uri]);
//     }
//   };

//   const saveCanvas = async () => {
//     const { status } = await MediaLibrary.requestPermissionsAsync();
//     if (status !== "granted") {
//       Alert.alert("Permission needed", "Please allow media library access");
//       return;
//     }

//     try {
//       const uri = await viewShotRef.current.capture();
//       await MediaLibrary.saveToLibraryAsync(uri);
//       Alert.alert("Success", "Canvas saved to gallery!");
//     } catch (e) {
//       console.error(e);
//       Alert.alert("Error", "Failed to save image");
//     }
//   };
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <View className="flex-1 bg-white items-center ">
//           <View
//             className="flex-row items-center"
//             style={{
//               padding: responsiveWidth(5),
//             }}
//           >
//             <Pressable
//               onPress={() => navigation.goBack()}
//               className="w-10 h-10 justify-center items-center -ml-2"
//               activeOpacity={0.7}
//             >
//               <ArrowLeft size={20} color="#000" />
//             </Pressable>
//             <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
//               Canvas
//             </Text>
//           </View>

//           <ViewShot
//             ref={viewShotRef}
//             style={styles.canvas}
//             options={{ format: "png", quality: 1 }}
//           >
//             <View style={styles.canvas}>
//               {images.map((uri, index) => (
//                 <DraggableImage key={index} uri={uri} />
//               ))}
//             </View>
//           </ViewShot>

//           <View className="absolute flex-row gap-4"
//           style={{
//             bottom: responsiveHeight(4),
//           }}
//           >
//             <Pressable
//               className="bg-black px-4 py-2 rounded-xl"
//               onPress={pickImage}
//             >
//               <Text className="text-white text-base">Upload</Text>
//             </Pressable>

//             <Pressable
//               className="bg-violet-600 px-4 py-2 rounded-xl"
//               onPress={saveCanvas}
//             >
//               <Text className="text-white text-base">Save Image</Text>
//             </Pressable>
//           </View>
//         </View>
//       </GestureHandlerRootView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   canvas: {
//     width: width * 0.9,
//     height: height * 0.8,
//     backgroundColor: "#F3F3F3",
//     borderRadius: 12,
//     overflow: "hidden",
//     position: "relative",
//   },
//   image: {
//     width: 150,
//     height: 150,
//     position: "absolute",
//   },
// });

import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
  Modal,
  TextInput,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import {
  ArrowLeft,
  ChevronsUp,
  FastForward,
  RotateCcw,
  Save,
  Search,
  SlidersHorizontal,
  Trash2,
  Undo2,
  Upload,
  X,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { categories, seasons } from "../../assets/data/data";
import { Slider } from "@miblanchard/react-native-slider";
import CustomBottomSheet from "../components/CustomBottomSheet";
import ColorPalette from "../components/ColorPallete";

const { width, height } = Dimensions.get("window");

const DraggableImage = ({ uri }) => {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(0);

  const pan = Gesture.Pan().onChange((e) => {
    translateX.value += e.changeX;
    translateY.value += e.changeY;
  });

  const pinch = Gesture.Pinch().onChange((e) => {
    scale.value = e.scale;
  });

  const rotate = Gesture.Rotation().onChange((e) => {
    rotation.value += e.rotation * 0.3;
  });

  const composedGesture = Gesture.Simultaneous(pan, pinch, rotate);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
      { rotateZ: `${rotation.value}rad` },
    ],
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.Image
        source={{ uri }}
        style={[styles.image, animatedStyle]}
        resizeMode="contain"
      />
    </GestureDetector>
  );
};

const products = [
  {
    id: 1,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category1",
  },
  {
    id: 2,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category2",
  },
  {
    id: 3,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category3",
  },
  {
    id: 4,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category4",
  },
  {
    id: 1,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category1",
  },
  {
    id: 2,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category2",
  },
  {
    id: 3,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category3",
  },
  {
    id: 4,
    name: "T-Shirt",
    description: "Stylist t-shirt",
    category: "category4",
  },
];

const AddItemBottomSheet = ({ visible, onCancel, setShowFilterModal }) => {
  const [usageValue, setUsageValue] = useState(50);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState(["Casual", "Office"]);

  // ✅ Clean and reusable toggle function
  const toggleItem = (setter) => (item) => {
    setter((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleToggleSeason = toggleItem(setSelectedSeasons);

  const renderProductItem = ({ item, index }) => {
    const isSelected = selectedIds.includes(item.id);

    return (
      <Pressable
        onPress={() => toggleSelect(item.id)}
        className={`flex-1 max-w-[48%]`}
      >
        {/* Product Image Container */}
        <View className="bg-surfaceSecondary rounded-lg aspect-square items-center justify-center overflow-hidden relative">
          <Image source={require("../../assets/images/shirt.png")} />

          {/* Overlay + Tick */}
          {isSelected && (
            <View className="absolute inset-0 bg-black/40 items-center justify-center">
              <Image
                source={require("../../assets/images/tick2.png")}
                style={{
                  width: responsiveWidth(8),
                  height: responsiveWidth(8),
                  objectFit: "contain",
                }}
              />
            </View>
          )}
        </View>

        {/* Product Info */}
        <View className="space-y-1 mt-2">
          <Text className="text-lg text-textPrimary font-SemiBold">
            {item.name}
          </Text>
          <Text className="text-md text-textPrimary font-Medium">
            {item.description}
          </Text>
        </View>
      </Pressable>
    );
  };

  const [selectedIds, setSelectedIds] = useState([]);
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const [searchText, setSearchText] = useState("");

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View
        className="flex-1 bg-white"
        style={{
          padding: responsiveWidth(5),
          gap: responsiveHeight(2),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center   border-b border-gray-100">
          <Pressable onPress={onCancel} className="p-2">
            <X size={24} color="#000" />
          </Pressable>
          <Text
            className="text-xl font-SemiBold text-textPrimary text-center"
            style={{ paddingLeft: responsiveWidth(23) }}
          >
            Add Items
          </Text>
          {/* <Pressable onPress={resetFilters}>
              <Text className="text-base font-medium text-textPrimary">
                Reset
              </Text>
            </Pressable> */}
        </View>

        <View className="flex-row items-center  py-2 bg-white gap-3">
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
            onPress={() => setShowFilterModal(true)}
          >
            <SlidersHorizontal size={20} color="white" />
          </Pressable>
        </View>

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: responsiveWidth(3),
            }}
          >
            {categories.map((season) => (
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
          </ScrollView>
        </View>

        <View className="flex-1">
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              gap: responsiveWidth(4),
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ rowGap: responsiveWidth(3) }}
          />
        </View>

        <Pressable
          className=" bg-surfaceAction py-4 rounded-xl "
          onPress={onCancel}
        >
          <Text className="text-textPrimaryInverted font-SemiBold text-[16px] text-center">
            Apply
          </Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const FilterBottomSheet = ({ visible, onCancel }) => {
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
            // flex: 1,
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
    </Modal>
  );
};

export default function CreateOutfitScreen() {
  const [images, setImages] = useState([]);
  const viewShotRef = useRef();
  const navigation = useNavigation();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImages((prev) => [...prev, uri]);
    }
  };

  const saveCanvas = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission needed", "Please allow media library access");
      return;
    }

    try {
      const uri = await viewShotRef.current.capture();
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("Success", "Canvas saved to gallery!");
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Failed to save image");
    }
  };

  const undoLast = () => {
    if (images.length === 0) return;
    setImages((prev) => prev.slice(0, -1));
  };

  const clearCanvas = () => {
    Alert.alert("Clear Canvas", "Are you sure you want to remove all images?", [
      { text: "Cancel", style: "cancel" },
      { text: "Clear", style: "destructive", onPress: () => setImages([]) },
    ]);
  };

  const [showModal, setShowModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className="flex-1 bg-white items-center">
          {/* Header */}
          <View
            className="flex-row items-center"
            style={{ padding: responsiveWidth(5) }}
          >
            <Pressable
              onPress={() => navigation.goBack()}
              className="w-10 h-10 justify-center items-center -ml-2"
              activeOpacity={0.7}
            >
              <ArrowLeft size={20} color="#000" />
            </Pressable>
            <Text className="flex-1 text-center text-xl font-SemiBold text-textPrimary">
              Canvas
            </Text>

            <View className="flex-row gap-2 items-center"></View>
          </View>

          {/* Canvas Area */}
          <ViewShot
            ref={viewShotRef}
            style={styles.canvas}
            options={{ format: "png", quality: 1 }}
          >
            <View style={styles.canvas}>
              {images.map((uri, index) => (
                <DraggableImage key={index} uri={uri} />
              ))}
            </View>
          </ViewShot>

          {/* Footer Actions */}
          <View
            className="absolute flex-row gap-4"
            style={{ bottom: responsiveHeight(13) }}
          >
            <Pressable
              onPress={undoLast}
              className="p-3 rounded-full border-2 border-gray-300 rotate-180"
            >
              <FastForward color="gray"/>
            </Pressable>
            <Pressable
              className="p-3 rounded-full bg-surfaceAction"
              onPress={saveCanvas}
            >
              <Save color="white" />
            </Pressable>

            <Pressable
              className="p-3 rounded-full border-2 border-gray-300"
              // onPress={pickImage}
            >
              <RotateCcw color="gray"/>
            </Pressable>

            <Pressable
              onPress={clearCanvas}
              className="p-3 rounded-full border-2 border-gray-300"
            >
              <Trash2  color="gray"/>
            </Pressable>
          </View>
          <Pressable
            className="absolute bg-surfaceActionTertiary py-4 rounded-xl w-11/12 flex-row items-center justify-center gap-2"
            onPress={() => setShowModal(true)}
            style={{ bottom: responsiveHeight(3) }}
          >
            <Text className="text-textPrimaryInverted font-SemiBold text-[16px] text-center">
              Apply
            </Text>
            <ChevronsUp color="white" />
          </Pressable>
        </View>
        <AddItemBottomSheet
          visible={showModal}
          onCancel={() => setShowModal(false)}
          setShowFilterModal={setShowFilterModal}
        />
        <FilterBottomSheet
          visible={showFilterModal}
          onCancel={() => setShowFilterModal(false)}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: width * 0.9,
    height: height * 0.65,
    // backgroundColor: "#F3F3F3",
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: 150,
    height: 150,
    position: "absolute",
  },
});
