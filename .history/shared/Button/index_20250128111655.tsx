import { View, Text, Pressable } from 'react-native'
import React from 'react'

export type IButtonProps = {
    buttonText: string;
    buttonSideText: React.ReactNode;
}

export default function Button({ buttonText , buttonSideText }: IButtonProps) {
  return (
    <Pressable className='flex flex-row  items-center'>
      <Text className='mr-2'>{buttonText}</Text>
      <Text>{buttonSideText}</Text>
    </Pressable>
  );
}