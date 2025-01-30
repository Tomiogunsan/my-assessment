import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import Button from "@/shared/Button";

export default function AuthType() {
  return (
    <View className="flex-1 bg-[#100a2c]">
      <ImageBackground
        source={require("../../assets/images/signupnet.png")}
        className="flex-1 "
        resizeMode="stretch"
      >
        <View className="flex items-center justify-center pt-[163px]">
          <Image
            source={require("../../assets/images/authicon.png")}
            style={{
              width: 137,
              height: 137,
            }}
          />
          <Text className="text-[14px] leading-[24px] font-[400] text-white pt-[16px]">
            By the people. For the people
          </Text>
        </View>
        <View className="flex-1 bg-white mt-[81px] rounded-tr-[50px] rounded-tl-[50px] px-[40px]">
          <View className="flex items-center justify-center pt-[11px]">
            <View className="w-[86px] h-[4px] bg-[#c1c1c1]" />
          </View>
          <View className='pt-[58px]'>
            <Button buttonText="Sign up" />
            <Text className='text-[12px] text-[#000]/50 text-center pt-[20px]'>Already Signed up?</Text>
            <Button buttonText="Log In" backgroundColor="white" textColor="#212"/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
