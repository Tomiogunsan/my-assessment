import { Text } from "react-native";
import React from "react";
import { IFieldHelperTextProps } from "./interface";
import { StyleSheet } from "react-native";

export default function FieldHelperText({
  helperText,
  error,
}: IFieldHelperTextProps) {
  return helperText ? (
    <Text style={[styles.text, { color: error ? "red" : "gray" }]}>
      {helperText}
    </Text>
  ) : null;
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 400,
    marginTop: 2,
  },
});
