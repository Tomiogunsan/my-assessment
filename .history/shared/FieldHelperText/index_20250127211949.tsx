import { View, Text } from 'react-native'
import React from 'react'

export default function  FieldHelperText({}: IFieldHelperTextProps) {
  return (
  helperText ? (
    <Text
      className={`text-[12px] ${
        error ? 'text-red-500' : 'text-gray-500'
      } font-[400] mt-[2px]`}
    >
      {helperText}
    </Text>
  ) : null;
  )
}