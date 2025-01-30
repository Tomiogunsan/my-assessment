import { View, Text } from "react-native";
import "./global.css";

export default function App() {
  return (
    <SafeAreaView>
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
