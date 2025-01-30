import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Signup() {
  return (
    <View className="flex-1  pt-[87px] px-[21px]">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-[32px] font-extrabold text-[#212121]">
          Sign Up
        </Text>
        <AntDesign name="closecircleo" size={24} color="black" />
      </View>
      <Text className='text-[]'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad magnam
      </Text>
    </View>
  );
}
