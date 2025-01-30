import { View, Text, Pressable } from 'react-native'
import React from 'react'

export type IButtonProps = {
    buttonText: string;
    buttonSideText
}

export default function Button() {
  return (
    <Pressable>
      <Text>Button</Text>
    </Pressable>
  )
}