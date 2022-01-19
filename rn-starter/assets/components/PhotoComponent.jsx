import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function PhotoComponent({ title, img }) {
  // console.log(title, img);
  return (
    <View>
      <Text>{title}</Text>
      <Image source={img} style={styles.photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 150,
    width: 150
  }
});
