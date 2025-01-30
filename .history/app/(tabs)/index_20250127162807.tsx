import "../../global.css";
import { Text, View } from "react-native";
import {createStackNavigation} from '@react-navigation/stack'
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

  const Stack = createStackNavigation();

export default function HomeScreen() {

  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <NavigationContainer>
        <View className="bg-blue-600">
          <Text>Welcome iiii</Text>
        </View>
        
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
