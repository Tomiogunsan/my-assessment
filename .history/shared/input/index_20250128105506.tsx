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
    
      <View
       style={styles.container}
      >
        {iconName && (
          <Ionicons
            name={iconName}
            color={iconColor}
            size={iconSize}
            // className="mr-5"
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
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 68,
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#ebf0f7",
    
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ebf0f7",
    elevation: 2,
    shadowColor: "#1074fd",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  textInput: {
    padding: 5,
    fontSize: 16,
  },
});