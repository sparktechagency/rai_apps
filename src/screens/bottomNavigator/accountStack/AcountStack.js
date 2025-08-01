
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountPrivacyScreen from "./AccountPrivacyScreen";
import AccountFeedbackScreen from "./AccountFeedbackScreen";
import AccountScreen from "../AccountScreen";
import AccountPrivacyStack from "./AccountPrivacyStack";

const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false , }} initialRouteName="AccountProfile">
      <Stack.Screen name="AccountProfile" component={AccountScreen } />
      {/* <Stack.Screen name="AccountPrivacy" component={AccountPrivacyScreen } /> */}
      <Stack.Screen name="AccountFeedback" component={AccountFeedbackScreen} />

      <Stack.Screen name="AccountPrivacyStack" component={AccountPrivacyStack} />
    </Stack.Navigator>
  );
};

export default AccountStack;
