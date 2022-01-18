import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function ListComponent({ navigation }) {
  const names = ['kobi', 'judi', 'mark', 'june'];
  const renderItem = (el) => {
    return (
      <View>
        <Text key={el.index} style={styles.listEl}>
          {el.item}
        </Text>
        <Button title='move to home' onPress={() => navigation.navigate('Home')} />
      </View >
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
