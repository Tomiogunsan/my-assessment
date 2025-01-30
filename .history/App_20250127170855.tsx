import { View, Text } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./app/screens/onboarding";
import { createStackNavigator } from "@react-navigation/stack";
import AuthType from "./app/screens/auth-type";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView>
      <Text className="bg-red-400">Sample</Text>
      <Text className="bg-red-400">Sample</Text>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="authType"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen component={Onboarding} name="onboarding" />
            <Stack.Screen component={AuthType} name="authType"  options={{
                headerTintColor: '#0000'
                headers
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
