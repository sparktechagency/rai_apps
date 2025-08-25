// import "./global.css";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import OnboardingScreen from "./src/screens/OnboardingScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";
// import SplashScreenAnimated from "./src/root/SplashScreenAnimated";
// import * as SplashScreen from "expo-splash-screen";
// import useLoadFonts from "./src/utils/useLoadFonts";
// import FontProvider from "./src/utils/FontProvider";
// import AppNavigator from "./src/root/AppNavigator";

// // Don't auto-hide native splash
// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [isReady, setIsReady] = useState(false);

//   const onSplashFinish = async () => {
//     await SplashScreen.hideAsync(); // hide native splash
//     const fontsLoaded = useLoadFonts();
//     if (!fontsLoaded) return null;
//     const timer = setTimeout(() => {
//       setIsReady(true);
//     }, 4000); // Delay must match total duration in SplashScreen

//     return () => clearTimeout(timer);
//   };
//   return (
//     <FontProvider>
//       <NavigationContainer>
//         <SafeAreaProvider>
//           {!isReady ? (
//             <SplashScreenAnimated onFinish={onSplashFinish} />
//           ) : (
//             <SafeAreaView className="flex-1 items-center justify-center bg-white">
//               <AppNavigator />
//             </SafeAreaView>
//           )}
//         </SafeAreaProvider>
//       </NavigationContainer>
//     </FontProvider>
//   );
// }

// import "./global.css";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// import AppNavigator from "./src/root/AppNavigator";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// // Don't auto-hide native splash

// export default function App() {

//   return (
//     // <GestureHandlerRootView style={{ flex: 1 }}>

//         <NavigationContainer>
//           <SafeAreaProvider>

//               <AppNavigator />

//           </SafeAreaProvider>
//         </NavigationContainer>

//     // </GestureHandlerRootView>
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
import { FormProvider, useForm } from "react-hook-form";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Don't auto-hide native splash
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const onSplashFinish = async () => {
    await SplashScreen.hideAsync(); // hide native splash
    setTimeout(() => setIsReady(true), 4000); // Match with SplashScreenAnimated duration
  };

  const methods = useForm({ mode: "onChange" });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FormProvider {...methods}>
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
        </FormProvider>
      </PersistGate>
    </Provider>
  );
}
