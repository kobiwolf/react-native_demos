import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';

interface IHomeProps {
  navigation: NavigationStackProp;
}

export default function Home(props: IHomeProps) {
  return (
    <View>
      <Button title='Home' onPress={() => props.navigation.navigate('Home')} />
      <Button
        title='Drawer'
        onPress={() => props.navigation.navigate('Drawer')}
      />
      <Button
        title='BottomTab'
        onPress={() => props.navigation.navigate('BottomTab')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
