import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title='to Photos' onPress={() => navigation.navigate('Photos')} />
      <Button
        title='to Reducer'
        onPress={() => navigation.navigate('Reducer')}
      />
      <Button
        title='to BoxModel'
        onPress={() => navigation.navigate('BoxModel')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default HomeScreen;
