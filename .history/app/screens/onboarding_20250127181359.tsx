import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Case, Switch } from "react-if";

const slides = [
  {
    key: 1,
    title: "Shop, Deliver, & Discover",
    text: "Description.\nSay something cool",
    // image: require("./assets/1.jpg"),
    backgroundColor: "bg-[#59b2ab]",
  },
  {
    key: 2,
    title: "Send & Receive packages",
    text: "Other cool stuff",
    // image: require("./assets/2.jpg"),
    backgroundColor: "bg-[#febe29]",
  },
  {
    key: 3,
    title: "Make Money as a Runner",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require("./assets/3.jpg"),
    backgroundColor: "bg-[#22bcb5]",
  },
];

export default function Onboarding() {
  const renderItem = ({ item }: any) => {
    return (
      <Switch>
        <Case condition={item.key === 1}>
          <View
            className={`${item.backgroundColor} flex-1   py-4 px-2`}
          >
            <View>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
            <Text>{item.title}</Text>
          </View>
        </Case>
        <Case condition={item.key === 2}>
          <View
            className={`${item.backgroundColor} flex-1  `}
          >
            <Text>{item.key}</Text>
          </View>
        </Case>
        <Case condition={item.key === 3}>
          <View
            className={`${item.backgroundColor} flex-1 `}
          >
            <Text>{item.key}</Text>
          </View>
        </Case>
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
