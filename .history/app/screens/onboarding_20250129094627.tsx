import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Case, Switch } from "react-if";
import Feather from "@expo/vector-icons/Feather";
import { Ionicons } from "@expo/vector-icons";

const slides = [
  {
    key: 1,
    title: "Shop, Deliver, & Discover",
    text: "Find amazing deals, stores, hotels, restaurants, services, brands and local businesses in your area.",
    // image: require("./assets/1.jpg"),
    backgroundColor: "bg-[#1074fd]",
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
  const renderDot = () => {};

  const renderItem = ({ item }: any) => {
    return (
      <Switch>
        <Case condition={item.key === 1}>
          <View
            className={`${item.backgroundColor} flex-1   py-[80px] px-[35px]`}
          >
            <View className="flex flex-row justify-end items-center">
              <TouchableOpacity className="rounded-[40px] bg-[#DFEBFA] py-[26px] px-[15px] flex flex-row items-center shadow-[#212121] shadow-lg">
                <Text className="text-[#212121]">Skip</Text>
                <Ionicons name="union" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="pt-12">
              <Text className="font-extrabold text-[40px] text-white leading-[43px]">
                {item.title}
              </Text>
              <Text className='text-[18px] font-[400] leading-[24px] text-white pt-[10px]'>{item.text}</Text>
            </View>
          </View>
        </Case>
        <Case condition={item.key === 2}>
          <View className={`${item.backgroundColor} flex-1  `}>
            <Text>{item.key}</Text>
          </View>
        </Case>
        <Case condition={item.key === 3}>
          <View className={`${item.backgroundColor} flex-1 `}>
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
        dotStyle={{
          width: 19,
          height: 6,
          backgroundColor: "#FFFFFF66",
        }}
        activeDotStyle={{
          width: 19,
          backgroundColor: "#e3b202",
          height: 6,
        }}
        renderPrevButton={() => (
          <>
            <TouchableOpacity>
              <Text>Swipe left</Text>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
}
