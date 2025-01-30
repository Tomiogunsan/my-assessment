import { View, Text } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./app/screens/onboarding";
import { createStackNavigator } from "@react-navigation/stack";
import AuthType from "./app/screens/auth-type";
import Signup from "./app/screens/signup";
import VerifyOtp from "./app/screens/verify-otp";
import ReferralCode from "./app/screens/referral-code";
import AppOptions from "./app/screens/app-options";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();
export default function App() {

  const [] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.woff"),
    "inter": require("./assets/fonts/InterVariable.woff"),
    "athletics-black": require("./assets/fonts/Athletics Black.otf"),
    "athletics-bold": require("./assets/fonts/Athletics Bold.otf"),
    "athletics-extrabold": require("./assets/fonts/Athletics ExtraBold.otf"),
    
  })
  return (
    <SafeAreaView className="flex-1">
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="appOptions"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen component={Onboarding} name="onboarding" />
            <Stack.Screen component={AuthType} name="authType" />
            <Stack.Screen component={Signup} name="signup" />
            <Stack.Screen component={VerifyOtp} name="verifyOtp" />
            <Stack.Screen component={ReferralCode} name="referralCode" />
            <Stack.Screen component={AppOptions} name="appOptions" />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
