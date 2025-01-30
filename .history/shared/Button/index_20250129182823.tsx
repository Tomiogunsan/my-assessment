import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { IButtonProps } from './interface';



export default function Button({ buttonText , buttonSideText, onPress }: IButtonProps) {
  return (
    <Pressable style={[styles.container, ]} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
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
    backgroundColor: "#1074fd",
    paddingHorizontal: 20,
    paddingVertical: 22,
    elevation: 2,
    shadowColor: "#100000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    cursor: 'pointer'
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: 700,

  },
  buttonSideText: {
    color: "white",
    fontSize: 14,
    fontWeight: 700,
    marginLeft: 2
  },
});