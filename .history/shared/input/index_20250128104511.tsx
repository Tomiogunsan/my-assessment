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
       style={styles.container}
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
        style={styles.textInput}
        />
      </View>
      <FieldHelperText error={error} helperText={helperText} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderRadius: 20,
    width: "100%",
    backgroundColor: '#257890',
    // justifyContent: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 22
  },
  textInput: {
    padding: 5,
    fontSize: 16,

  }
})