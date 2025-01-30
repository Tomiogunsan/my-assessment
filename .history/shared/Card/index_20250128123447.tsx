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
          <Text className='text-[16px] fo'>Dispatch Items</Text>
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
  },
  subContainer: {
    flexDirection: "row",
  },
  image: {
    width: 52,
    height: 52
  },
  textContainer: {
    marginLeft: 30
  }
});