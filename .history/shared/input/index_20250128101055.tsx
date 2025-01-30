import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IInputProps } from "./interface";
import FieldHelperText from "../FieldHelperText";

 const Input  = forwardRef<TextInput, IInputProps>({
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
  helperText
}: IInputProps, ) =>{
  return (
    <View>
      <View className="flex flex-row bg-[#212121]/50">
        {iconName && (
          <Ionicons name={iconName} color={iconColor} size={iconSize}
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
          className="relative py-[20px] px-[22px] rounded-[20px] "
        />
      </View>
      <FieldHelperText error={error} helperText={helperText}/>
    </View>
  );
}

export default Input