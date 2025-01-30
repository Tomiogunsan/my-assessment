import "../../global.css";
import { Text, View } from "react-native";
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../screens/onboarding";

  const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="onboarding" screenOptions={{
            headerShown: falsele
          }}>
            <Stack.Screen component={Onboarding} name='onboarding'/>
            <View className="bg-blue-600">
              <Text>Welcome iiii</Text>
            </View>
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
