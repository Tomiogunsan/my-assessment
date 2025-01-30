import { View, Text } from "react-native";
import React from "react";
import Button from "@/shared/Button";
import { MaskedInput } from "react-native-ui-lib";
import { CodeField, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";

type IVerifyOtpProps = {
  navigation: IStackNavigation;
};
export default function VerifyOtp({ navigation }: IVerifyOtpProps) {
  return (
    <View className="flex-1  pt-[87px] px-[25px] ">
      <Text className="text-[32px] font-extrabold text-[#212121] leading-10">
        Verify Your Number
      </Text>
      <Text className="text-[16px] font-[400] leading-[23px] text-[#212121]/50 pt-[12px]">
        Please enter the 4 digit code sent to {"\n"} *****456
      </Text>
      <MaskedInput
        containerStyle={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          padding: 10,
        }}
        placeholder="(123) 456-7890"
        // value={phone}
        // onChangeText={setPhone}
        keyboardType="numeric"
         mask={"(999) 999-9999"}
      />

      {/* some text */}
      <Text className="text-[12px] font-[400] text-[#212121]/50 text-center">
        Didn’t recieve the code? Resend Code in 00:23s
      </Text>
      <View className="flex justify-end  flex-row">
        <Button
          buttonText="Sign Up"
          buttonSideText={
            <>
              <Text>(1/3)</Text>
            </>
          }
          onPress={() => navigation.navigate("referralCode")}
        />
      </View>
    </View>
  );
}
