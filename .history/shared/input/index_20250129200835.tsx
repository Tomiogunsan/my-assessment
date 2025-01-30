import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
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
  label
}: IInputProps) {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <View
        style={[
          styles.container,
          { backgroundColor: isFocused ? "#ebf0f7" : "#f2f4f7" },
        ]}
      >
        {iconName && (
          <Ionicons
            name={iconName}
            color={!isFocused ? "#21212180" : iconColor}
            size={iconSize}
            style={styles.icon}
          />
        )}
        <View style={styles.inputContainer}>
          {isFocused || value ? (
            <Text style={styles.label}>{label}</Text>
          ) : null}
          <TextInput
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            onFocus={() => setIsFocused(true)}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={styles.textInput}
            onBlur={() => setIsFocused(value !== "")}
          />
        </View>
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
    backgroundColor: "#f2f4f7",

    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#ebf0f7",
    elevation: 2,
    shadowColor: "#100000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textInput: {
    padding: 5,
    fontSize: 16,
    font
  },
  icon: {
    marginRight: 5,
  },
  label: {
    paddingLeft: 4,
    fontSize: 12,
    color: "#21212180",
    fontFamily: "athletics-regular",
  },
});