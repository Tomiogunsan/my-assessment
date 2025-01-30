import "../../global.css";
import { Text, View } from "react-native";
import {createStackNavigation} from '@react-navigation/native'

  const Stack = createStackNavigation();

export default function HomeScreen() {

  return (
    <View className="bg-blue-600">
      <Text>Welcome iiii</Text>
    </View>
  );
}
