import { View, Text } from "react-native";
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
}: IInputProps) {
  return (
    <View>
      <View>
        {iconName && (
          <Ionicons name={iconName} color={iconColor} size={iconSize} />
        )}
        
      </View>
    </View>
  );
}
