import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IInputProps } from "./interface";

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
}: IInputProps) {
  return (
    <View>
      <View className="flex flex-row">
        {iconName && (
          <Ionicons name={iconName} color={iconColor} size={iconSize}
          className="absolute top-0 l"
          />
        )}
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          className="relative"
        />
      </View>
    </View>
  );
}
