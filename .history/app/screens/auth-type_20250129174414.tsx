import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";

export default function AuthType() {
  return (
    <View className="flex-1 bg-[#100a2c]">
      <ImageBackground
        source={require("../../assets/images/signupnet.png")}
        className="flex-1 "
        resizeMode="stretch"
      >
        <View className="flex items-center justify-center pt-[163]">
          <Image source={require("../../assets/images/authicon.png")} style={{
            width: 137,
            height: 137
          }}/>
        </View>
      </ImageBackground>
    </View>
  );
}
