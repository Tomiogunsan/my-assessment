import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View className='py-[9px] px-[8px] rounded-[10px] bg-red-800'>
    <Image source={require('../../assets/images/bag.png')} />
    </View>
  )
}


const styles = StyleSheet.create({
container : 
})