import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DressMeScreen from "./DressMeScreen";
import AddItemScreen from "./AddItemScreen";

const Stack = createNativeStackNavigator();
const DressMeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DressMe" component={DressMeScreen} />
      <Stack.Screen name="AddItem" component={AddItemScreen} />
    </Stack.Navigator>
  );
};

export default DressMeStack;
