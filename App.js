// import "./global.css";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import OnboardingScreen from "./src/screens/OnboardingScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";
// import SplashScreenAnimated from "./src/root/SplashScreenAnimated";
// import * as SplashScreen from "expo-splash-screen";
// // import useLoadFonts from "./src/utils/useLoadFonts";
// import FontProvider from "./src/utils/FontProvider";
// import AppNavigator from "./src/root/AppNavigator";

// // Don't auto-hide native splash
// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [isReady, setIsReady] = useState(false);

//   const onSplashFinish = async () => {
//     await SplashScreen.hideAsync(); // hide native splash
//     // const fontsLoaded = useLoadFonts();
//     // if (!fontsLoaded) return null;
//     const timer = setTimeout(() => {
//       setIsReady(true);
//     }, 4000); // Delay must match total duration in SplashScreen

//     // return () => clearTimeout(timer);
//   };
//   return (
//     <FontProvider>
//       <NavigationContainer>
//         <SafeAreaProvider>
//           {!isReady ? (
//             <SplashScreenAnimated onFinish={onSplashFinish} />
//           ) : (
//             // <SafeAreaView className="flex-1 items-center justify-center bg-white">
//             //   {/* <View > */}
//             //   <AppNavigator />
//             //   {/* <OnboardingScreen /> */}
//             //   {/* </View> */}
//             // </SafeAreaView>
//             //
//               <AppNavigator />

//           )}
//         </SafeAreaProvider>
//       </NavigationContainer>
//     </FontProvider>
//   );
// }


import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import SplashScreenAnimated from "./src/root/SplashScreenAnimated";
import * as SplashScreen from "expo-splash-screen";
import FontProvider from "./src/utils/FontProvider";
import AppNavigator from "./src/root/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Don't auto-hide native splash
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const onSplashFinish = async () => {
    await SplashScreen.hideAsync(); // hide native splash
    setTimeout(() => setIsReady(true), 4000); // Match with SplashScreenAnimated duration
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FontProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            {!isReady ? (
              <SplashScreenAnimated onFinish={onSplashFinish} />
            ) : (
              <AppNavigator />
            )}
          </SafeAreaProvider>
        </NavigationContainer>
      </FontProvider>
    </GestureHandlerRootView>
  );
}
