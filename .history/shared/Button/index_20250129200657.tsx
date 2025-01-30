import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { IButtonProps } from "./interface";

export default function Button({
  buttonText,
  buttonSideText,
  onPress,
  backgroundColor = "#1074fd",
  borderColor = 'white',
  textColor = 'white'
}: IButtonProps) {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: backgroundColor, borderColor: borderColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, {color: textColor}]}>{buttonText}</Text>
      <Text style={styles.buttonSideText}>{buttonSideText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 20,
    // backgroundColor: "#1074fd",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 22,
    elevation: 2,
    shadowColor: "#100000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    cursor: "pointer",
  },
  buttonText: {
   fontFamily: ''
    fontSize: 14,
    fontWeight: 700,
  },
  buttonSideText: {
    color: "white",
    fontSize: 14,
    fontWeight: 700,
    marginLeft: 2,
  },
});
