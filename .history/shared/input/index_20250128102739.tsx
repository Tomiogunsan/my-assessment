import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IInputProps } from "./interface";
import FieldHelperText from "../FieldHelperText";

export default function Input({
  placeholder,
  onChange,
  value,
  iconColor,
  iconSize,
  onBlur,
  secureTextEntry,
  iconName,
  keyboardType,
  error,
  helperText,
}: IInputProps) {
  return (
    <View className="flex-1 flex-row">
      <View className="flex flex-row bg-[#212121]/50 gap-2 py-[22px] px-[20px] border rounded-[20px] border-black">
        {iconName && (
          <Ionicons
            name={iconName}
            color={iconColor}
            size={iconSize}
            className="absolute top-0 left-0"
          />
        )}
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          className="relative py-[20px] px-[22px] rounded-[20px] border border-black w-[50%] h-[30%]"
        />
      </View>
      <FieldHelperText error={error} helperText={helperText} />
    </View>
  );
}
