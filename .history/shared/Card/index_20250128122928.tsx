import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/bag.png")} />
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
  
});