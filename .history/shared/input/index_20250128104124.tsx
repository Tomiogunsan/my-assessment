import { View, Text, TextInput, StyleSheet } from "react-native";
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
        
        />
      </View>
      <FieldHelperText error={error} helperText={helperText} />
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 8,
    width: "100%",
    backgroundColor: '#257890',
    justifyContent: "center",
    marginBottom: 10
  }
})