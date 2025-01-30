import { View, Text } from "react-native";
import React from "react";
import Input from "@/shared/input";
import Button from "@/shared/Button";
import ControlledInput from "@/shared/input/ControlledInput";
import { useForm } from "react-hook-form";

type IReferralCodeProps = {
  navigation: IStackNavigation;
};
export default function ReferralCode({ navigation }: IReferralCodeProps) {
  const {control} = useForm()
  return (
    <View className="flex-1   px-[25px] bg-white pt-[57px]">
      <View className="flex flex-col h-full justify-between items-center ">
        <View>
          <Text className="text-[32px] font-extrabold text-[#212121] font-athletics-extrabold">
            Referral code
          </Text>
          <Text className="text-[16px] text-[#212121]/50 pt-[12px] font-athletics">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad magnam
          </Text>
          <View className="pt-[42px]">
            <Text className="pb-[10px] text-[10px] leading-6 font-[800] text-[#212121]/50 font-athletics">
              OPTIONAL
            </Text>
            <ControlledInput control={control} placeholder="Referral Code" label="Referral Code"/>
          </View>
        </View>
        <View className=" mb-[85px] w-full">
          <Button
            buttonText="Confirm"
            onPress={() => navigation.navigate("appOptions")}
          />
          <Text className="text-[#1074fd] underline text-center pt-[20px] cursor-pointer font-athletics">
            Skip and continue to Dashboard
          </Text>
        </View>
      </View>
    </View>
  );
}
