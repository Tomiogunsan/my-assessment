import { View, Text } from "react-native";
import React, { useState } from "react";
import Button from "@/shared/Button";
import { MaskedInput } from "react-native-ui-lib";
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { StyleSheet } from "react-native";

type IVerifyOtpProps = {
  navigation: IStackNavigation;
};
export default function VerifyOtp({ navigation }: IVerifyOtpProps) {
 
   const [value, setValue] = useState("");
    const CELL_COUNT = 6;
   const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
   const [props, getCellOnLayoutHandler] = useClearByFocusCell({
     value,
     setValue,
   });
  return (
    <View className="flex-1  pt-[87px] px-[25px] ">
      <Text className="text-[32px] font-extrabold text-[#212121] leading-10">
        Verify Your Number
      </Text>
      <Text className="text-[16px] font-[400] leading-[23px] text-[#212121]/50 pt-[12px]">
        Please enter the 4 digit code sent to {"\n"} *****456
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={styles.cellText}>{symbol }</Text>
          </View>
        )}
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

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20, width: 250 },
  cell: {
    width: 53,
    height: ,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#f2f5f7",
    textAlign: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#f2f5f7",
    elevation: 2,
    shadowColor: "#100000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  focusCell: {
    borderColor: "#007AFF",
  },
  cellText: { fontSize: 24, textAlign: "center" },
});