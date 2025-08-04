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
import { ArrowLeft, Save, Trash2, Undo2, Upload } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

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
            style={{ bottom: responsiveHeight(3) }}
          >
            <Pressable
              onPress={undoLast}
              className="p-3 rounded-full bg-gray-200"
            >
              <Undo2 color="#000" />
            </Pressable>
            <Pressable
              onPress={clearCanvas}
              className="p-3 rounded-full bg-gray-200"
            >
              <Trash2 color="red" />
            </Pressable>
            <Pressable
              className="p-3 rounded-full bg-green-500"
              onPress={pickImage}
            >
              <Upload color="white" />
            </Pressable>

            <Pressable
              className="p-3 rounded-full bg-surfaceAction"
              onPress={saveCanvas}
            >
              <Save color="white" />
            </Pressable>
          </View>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: "#F3F3F3",
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
