import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function DrawerScreen() {
  return (
    <View>
      <Text>DrawerScreen</Text>
      <AntDesign name='meh' size={24} color='red' />
    </View>
  );
}

const styles = StyleSheet.create({});
