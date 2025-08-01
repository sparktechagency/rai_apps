import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import VerifyCodeScreen from "../screens/auth/VerifyCodeScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";
import ResetPasswordSuccessScreen from "../screens/auth/ResetPasswordSuccessScreen";
import SetProfileScreen from "../screens/auth/SetProfileScreen";

import AddItemScreen from "../create/AddItemScreen";
import BottomNavigatorScreen from "../screens/bottomNavigator/BottomNavigatorScreen";
import CreateLookbookScreen from "../create/CreateLookbookScreen";
import CreateOutfitScreen from "../create/CreateOutfitScreen";
import AddItemEditScreen from "../editCard/AddItemEditScreen";
import CreateLookbookEditScreen from "../editCard/CreateLookbookEditScreen";
import CreateOutfitEditScreen from "../editCard/CreateOutfitEditScreen";
import CreateLookbookEditStack from "../editCard/CreateLookbookEditStack";
import NotificationScreen from "../screens/NotificationScreen";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen
        name="ResetPasswordSuccess"
        component={ResetPasswordSuccessScreen}
      />
      <Stack.Screen name="SetProfile" component={SetProfileScreen} />

      <Stack.Screen name="BottomNavigator" component={BottomNavigatorScreen} />

      {/* add items */}
      <Stack.Screen name="AddItem" component={AddItemScreen} />
      <Stack.Screen name="CreateLookbook" component={CreateLookbookScreen} />
      <Stack.Screen name="CreateOutfit" component={CreateOutfitScreen} />

      {/* edit items */}
      <Stack.Screen name="AddItemEdit" component={AddItemEditScreen} />
      <Stack.Screen
        name="CreateOutfitEdit"
        component={CreateOutfitEditScreen}
      />
      <Stack.Screen
        name="CreateLookbookEditStack"
        component={CreateLookbookEditStack}
      />

      {/* notifiation */}
      <Stack.Screen name="Notification" component={NotificationScreen} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
