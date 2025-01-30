import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export type IButtonProps = {
    buttonText: string;
    buttonSideText: React.ReactNode;
}

export default function Button({ buttonText , buttonSideText }: IButtonProps) {
  return (
    <Pressable style={styles.container}>
      <Text >{buttonText}</Text>
      <Text>{buttonSideText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#10',
        paddingHorizontal: 20,
        paddingVertical: 20,
        elevation: 2,
        shadowColor: '#100000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
    }
})