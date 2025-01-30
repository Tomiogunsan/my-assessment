import { View, Text, Pressable } from 'react-native'
import React from 'react'

export type IButtonProps = {
    buttonText: string;
    buttonSideText: React.ReactNode;
}

export default function Button({ buttonText , buttonSideText }: IButtonProps) {
  return (
    <Pressable>
      <Text>{butt}</Text>
    </Pressable>
  );
}