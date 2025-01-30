import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { ICardProps } from './interface';



export default function Card({image, title, subTitle}: ICardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={image}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 15,
    backgroundColor: "#2121211A",
    borderRadius: 10,
   overflow: 'hidden'

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