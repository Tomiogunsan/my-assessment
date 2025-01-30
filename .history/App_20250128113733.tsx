import { View, Text } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./app/screens/onboarding";
import { createStackNavigator } from "@react-navigation/stack";
import AuthType from "./app/screens/auth-type";
import Signup from "./app/screens/signup";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="signup"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen component={Onboarding} name="onboarding" />
            <Stack.Screen component={AuthType} name="authType" />
            <Stack.Screen component={Signup} name="signup" />
            <Stack.Screen component={Ver} name="signup" />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
