import { View, Text } from 'react-native'
import React from 'react'
import Card from '@/shared/Card';

export default function AppOptions() {
  return (
    <View className="flex-1 px-[25px] bg-white pt-[87px]">
      <Text className='text-[32px] font-[800] leading-10 text-[#212121]'>What do you want to use CrowdCargo for today?</Text>
      <Card image={require('../../assets/images/bos')}/>
    </View>
  );
}



//  "main": "expo-router/entry",