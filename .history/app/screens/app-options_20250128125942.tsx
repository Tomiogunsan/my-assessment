import { View, Text } from 'react-native'
import React from 'react'
import Card from '@/shared/Card';
import Button from '@/shared/Button';

export default function AppOptions() {
  return (
    <View className="flex-1 px-[25px] bg-white pt-[87px]">
      <Text className="text-[32px] font-[800] leading-10 text-[#212121]">
        What do you want to use CrowdCargo for today?
      </Text>
      <View>
        
      </View>
      <View className="pt-[77px] flex flex-col gap-[10px]">
        <Card
          image={require("../../assets/images/box.png")}
          title="Dispatch Items"
          subTitle="Get a dispatch rider to do your deliveries"
        />
        <Card
          image={require("../../assets/images/money.png")}
          title="Earn Money"
          subTitle="Make cool cash today as a CrowdCargo Runner"
        />
        <Card
          image={require("../../assets/images/bag.png")}
          title="Discovery and Shopping"
          subTitle={`Buy unique and quality items from the \nCrowdCargo Advance Store`}
        />
      </View>
      <Button buttonText="Go to Dashboard"/>
    </View>
  );
}



//  "main": "expo-router/entry",