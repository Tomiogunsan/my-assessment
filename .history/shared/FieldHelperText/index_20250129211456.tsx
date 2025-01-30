import {  Text } from 'react-native'
import React from 'react'
import { IFieldHelperTextProps } from './interface';
import { StyleSheet } from 'react-native';

export default function  FieldHelperText({helperText, error}: IFieldHelperTextProps) {
  return (
    
      helperText ? (
      <Text
        className={`text-[12px] ${
          error ? "text-red-500" : "text-gray-500"
        } font-[400] mt-[2px]`}
      >
        {helperText}
      </Text>
      ) : null
    
  );
}


const styles = StyleSheet.create({
  text: {
    fontWeight: 400,
    marginTop: 2
  }
})