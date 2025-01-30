import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
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
    text: "The best way to send and receive your packages at affordable price",
    image: require("../../assets/images/gift.png"),
    backgroundColor: "bg-[#100a2c]",
  },
  {
    key: 3,
    title: "Make Money as a Runner",
    text: `Whether you're a full-time pro or \npart-time, turn your rides, spaces, \nand community into earnings with \nCrowdCargo.`,
    image: require("../../assets/images/runner.png"),
    backgroundColor: "bg-[#fff]",
  },
];

export default function Onboarding() {
  const renderDot = () => {};

  const { width } = Dimensions.get("window");
  const renderItem = ({ item }: any) => {
    return (
      <Switch>
        <Case condition={item.key === 1}>
          <View
            className={`${item.backgroundColor} flex-1   py-[80px] px-[35px]`}
          >
            <View className="flex flex-row justify-end items-center">
              <TouchableOpacity className="rounded-[40px] bg-[#DFEBFA] py-[26px] px-[25px] flex flex-row items-center shadow-black shadow-lg">
                <Text className="text-[#212121]">Skip</Text>
                <Feather name="chevrons-right" size={24} color="#414141" />
              </TouchableOpacity>
            </View>
            <View className="pt-12">
              <Text className="font-extrabold text-[40px] text-white leading-[43px]">
                {item.title}
              </Text>
              <Text className="text-[18px] font-[400] leading-[24px] text-white pt-[10px]">
                {item.text}
              </Text>
            </View>
          </View>
        </Case>
        <Case condition={item.key === 2}>
          <View
            className={`${item.backgroundColor} flex-1   py-[80px] relative`}
          >
            <View className="flex flex-row justify-end items-center px-[35px]">
              <TouchableOpacity className="rounded-[40px] bg-[#DFEBFA] py-[26px] px-[25px] flex flex-row items-center shadow-black shadow-lg">
                <Text className="text-[#212121]">Skip</Text>
                <Feather name="chevrons-right" size={24} color="#414141" />
              </TouchableOpacity>
            </View>
            <View className="w-full ">
              <Image
                source={item.image}
                style={{ width: width, height: 512 }}
                resizeMode="cover"
              />
            </View>

            <View className=" px-[35px] absolute bottom-[208px] ">
              <Text className="font-extrabold text-[40px] text-white leading-[43px]">
                {item.title}
              </Text>
              <Text className="text-[18px] font-[400] leading-[24px] text-white pt-[10px]">
                {item.text}
              </Text>
            </View>
          </View>
        </Case>
        <Case condition={item.key === 3}>
          <View
            className={`${item.backgroundColor} flex-1   py-[80px] px-[35px]`}
          >
            <View className="flex flex-row justify-end items-center"></View>
            <View className="pt-12">
              <Text className="font-extrabold text-[40px] text-[#212121] leading-[43px]">
                {item.title}
              </Text>
              <Text className="text-[16px] font-[400] leading-[22px] text-[#212121] pt-[10px]">
                {item.text}
              </Text>
            </View>
            <View >
              <Image
                source={item.image}
                style={{
                  width: 320,
                  height: 333,
                }}
                resizeMode="cover"
              />
            </View>
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
