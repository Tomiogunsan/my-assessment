import "../../global.css";
import { Text, View } from "react-native";
import {createStackNavigation} from '@react-navigation/stack'

  const Stack = createStackNavigation();

export default function HomeScreen() {

  return (
    <SafeAreaView>
    <View className="bg-blue-600">
      <Text>Welcome iiii</Text>
    </View>
  );
}
