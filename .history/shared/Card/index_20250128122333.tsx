import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View className='py-[9px] px-[8px] rounded-[10px] bg-[#212121]/10'>
    <Image source={require('../../assets/images/bag')}/>
    </View>
  )
}