import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { IInputProps } from './interface';

export default function Input({}: IInputProps) {
  return (
    <View>
      <View>
        <Ionicons />
      </View>
    </View>
  )
}