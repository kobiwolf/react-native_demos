import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PhotoComponent from '../../assets/components/PhotoComponent';

export default function PhotosComponent() {
  const sources = [
    { title: 'beach', img: require(`../../assets/beach.jpg`) },
    { title: 'forest', img: require(`../../assets/forest.jpg`) },
    { title: 'mountain', img: require(`../../assets/mountain.jpg`) },
  ];
  const keyExtractor = (item) => item.title;
  const renderItem = ({ item }) => <PhotoComponent title={item.title} img={item.img} />
  return (
    <View>
      <Text></Text>
      <FlatList
        style={styles.list}
        data={sources}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    // backgroundColor: 'red'
  }
});
