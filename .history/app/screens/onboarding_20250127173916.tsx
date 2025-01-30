import { View, Text } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";

 const slides = [
   {
     key: 1,
     title: "Shop, Deliver, & Discover",
     text: "Description.\nSay something cool",
     image: require("./assets/1.jpg"),
     backgroundColor: "#59b2ab",
   },
   {
     key: 2,
     title: "Send & Receive packages",
     text: "Other cool stuff",
     image: require("./assets/2.jpg"),
     backgroundColor: "#febe29",
   },
   {
     key: 3,
     title: "Make Money as a Runner",
     text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
     image: require("./assets/3.jpg"),
     backgroundColor: "#22bcb5",
   },
 ];

export default function Onboarding() {
   
    const renderItem = ({item}: {item: any}) => {
        <View>
            <Text>{item.key}</Text>
        </View>
    }
  return (
    <View className="flex-1 bg-red-700">
      <AppIntroSlider data={slides} />
    </View>
  );
}
