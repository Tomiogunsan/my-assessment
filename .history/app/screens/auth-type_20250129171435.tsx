import { View, Text, ImageBackground } from "react-native";
import React from "react";

export default function AuthType() {
  return (
    <View className="flex-1 bg-[#100a2c]">
      <ImageBackground
        source={require("../../assets/images/signupnet.png")}
        className="flex-1 "
        resizeMode="stretch"
      ></ImageBackground>
    </View>
  );
}
