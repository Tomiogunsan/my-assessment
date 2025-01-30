import { View, Text } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import Switch from 'react'

const slides = [
  {
    key: 1,
    title: "Shop, Deliver, & Discover",
    text: "Description.\nSay something cool",
    // image: require("./assets/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Send & Receive packages",
    text: "Other cool stuff",
    // image: require("./assets/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Make Money as a Runner",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require("./assets/3.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export default function Onboarding() {
  const renderItem = ({ item }: any) => {
    return (
      <Switch>
        <View className="flex-1 flex-col items-center justify-center bg-slate-400">
          <Text>{item.key}</Text>
        </View>
      </Switch>
    );
  };
  return (
    <View className="flex-1">
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        showDoneButton={false}
      />
    </View>
  );
}
