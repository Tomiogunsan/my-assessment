import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export type IButtonProps = {
    buttonText: string;
    buttonSideText: React.ReactNode;
}

export default function Button({ buttonText , buttonSideText }: IButtonProps) {
  return (
    <Pressable className='flex flex-row  items-center bg-slate-400'>
      <Text >{buttonText}</Text>
      <Text>{buttonSideText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})