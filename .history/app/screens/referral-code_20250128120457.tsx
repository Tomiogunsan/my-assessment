import { View, Text } from "react-native";
import React from "react";
import Input from "@/shared/input";

export default function ReferralCode() {
  return (
    <View className="flex-1   px-[25px] bg-white">
      <View className="flex flex-col h-full justify-between items-center ">
        <View>
          <Text className="text-[32px] font-extrabold text-[#212121]">
            Referral code
          </Text>
          <Text className="text-[16px] text-[#212121]/50 pt-[12px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad magnam
          </Text>
          <View className="pt-[42px]">
            <Text className="pb-[10px] text-[10px] leading-6 font-[800] text-[#212121]/50">
              OPTIONAL
            </Text>
            <Input placeholder="Referral Code" />
          </View>
        </View>
        <View className="bg-black">
          <Text>uuu</Text>
        </View>
      </View>
    </View>
  );
}
