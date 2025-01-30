import { View, Text } from 'react-native'
import React from 'react'

export default function VerifyOtp() {
  return (
    <View className="flex-1  pt-[87px] px-[21px] ">
      <Text className="text-[32px] font-extrabold text-[#212121] leading-10">
        Verify Your Number
      </Text>
      <Text className=''>Please enter the 4 digit code sent to *****456</Text>
    </View>
  );
}