import { View, Text } from "react-native";
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./app/screens/onboarding";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView>
        <Text class>Sample</Text>
         <GestureHandlerRootView>
           <NavigationContainer>
             <Stack.Navigator
               initialRouteName="onboarding"
               screenOptions={{
                 headerShown: false,
               }}
             >
               <Stack.Screen component={Onboarding} name="onboarding" />
             </Stack.Navigator>
           </NavigationContainer>
         </GestureHandlerRootView>
       </SafeAreaView>
  );
}
