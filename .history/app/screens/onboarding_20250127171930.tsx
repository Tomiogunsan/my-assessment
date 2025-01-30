import { View, Text } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";

export default function Onboarding() {
  return (
    <View className="flex-1 bg-red-700">
      <AppIntroSlider data={[]}/>
    </View>
  );
}
