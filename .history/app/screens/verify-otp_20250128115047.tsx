import { View, Text } from 'react-native'
import React from 'react'
import Button from '@/shared/Button';

export default function VerifyOtp() {
  return (
    <View className="flex-1  pt-[87px] px-[25px] ">
      <Text className="text-[32px] font-extrabold text-[#212121] leading-10">
        Verify Your Number
      </Text>
      <Text className="text-[16px] font-[400] leading-[23px] text-[#212121]/50">
        Please enter the 4 digit code sent to {"\n"} *****456
      </Text>

      {/* some text */}
      <Text className='text-[12px] font-[400] text-[#212121]/50 text-center'>Didn’t recieve the code? Resend Code in 00:23s</Text>
      <View className='flex justify-end  flex-row'>
        <Button buttonText='Sign Up' buttonSideText={<>
          
          </>}/>
      </View>
    </View>
  );
}