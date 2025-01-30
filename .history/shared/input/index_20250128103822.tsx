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
    <View className="w-full">
      <View
        className={`flex-row items-center border  h-[48px] w-full bg-black ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg bg-white p-2`}
      >
        {iconName && (
          <Ionicons
            name={iconName}
            color={iconColor}
            size={iconSize}
            className="mr-2"
          />
        )}
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          className="flex-1 text-base text-red-800 p-20"
        />
      </View>
      <FieldHelperText error={error} helperText={helperText} />
    </View>
  );
}
