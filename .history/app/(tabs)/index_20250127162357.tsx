import "../../global.css";
import { Text, View } from "react-native";
import {createStackNavigation} from '@react'

  const Stack = createStackNavigation();

export default function HomeScreen() {

  return (
    <View className="bg-blue-600">
      <Text>Welcome iiii</Text>
    </View>
  );
}
