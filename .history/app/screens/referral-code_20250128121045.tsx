import { View, Text } from "react-native";
import React from "react";
import Input from "@/shared/input";
import Button from "@/shared/Button";

export default function ReferralCode() {
  return (
    <View className="flex-1   px-[25px] bg-white pt-[57px]">
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
        <View className=" mb-[85px] w-full">
          <Button buttonText="Confirm" />
          <Text className="text-[#1074fd] underline text-center pt-[20px] cursor-pointer" onPress={() => {}}>Skip and continue to Dashboard</Text>
        </View>
      </View>
    </View>
  );
}
