import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require("../../assets/images/bag.png")}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Dispatch Items</Text>
          <Text style={styles.subTitle}>Get a dispatch rider to do your deliveries</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 9,
    backgroundColor: "#2121211A",
    borderRadius: 10,
    width: '100'
    height: 89,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    flexDirection: "row",
  },
  image: {
    width: 52,
    height: 52,
  },
  textContainer: {
    marginLeft: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: "#100a2c",
    lineHeight: 19,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 400,
    color: "#100A2C80",
    lineHeight: 20,
    paddingTop: 2,
  },
});