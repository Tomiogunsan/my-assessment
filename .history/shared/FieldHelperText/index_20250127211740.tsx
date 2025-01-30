import { View, Text } from 'react-native'
import React from 'react'

export default function  FieldHelperText() {
  return (
  helperText ? (
    <
      className={`text-[12px] ${
        error ? 'text-red-500' : 'text-gray-500'
      } font-[400] mt-[2px]`}
    >
      {helperText}
    </>
  ) : null;
  )
}