import "../../global.css";
import { Text, View } from "react-native";
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

  const Stack = createStackNavigator();

export default function HomeScreen() {

  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigatoe
          <View className="bg-blue-600">
            <Text>Welcome iiii</Text>
          </View>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
