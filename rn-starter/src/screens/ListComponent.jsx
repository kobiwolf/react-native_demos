import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ListComponent() {
  const names = ['kobi', 'judi', 'mark', 'june'];
  const renderItem = (el) => {
    return (
      <Text key={el.index} style={styles.listEl}>
        {el.item}
      </Text>
    );
  };

  return (
    <View>
      <Text style={styles.text}>list:</Text>
      <FlatList
        // horizontal - if we want to make a list in horizontal row
        // showsHorizontalScrollIndicator - show/hide the scroolbar
        data={names}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  listEl: {
    fontSize: 30,
    color: 'blue',
    marginRight: 150,
  },
});
