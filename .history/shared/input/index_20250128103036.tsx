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
    <View className=" bg-red-700">
      <View className="bg-red-700">
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
          className="flex-1 text-base text-gray-800"
        />
      </View>
      <FieldHelperText error={error} helperText={helperText} />
    </View>
  );
}
