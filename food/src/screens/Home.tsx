import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
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
      <Button
        title='Search'
        onPress={() => props.navigation.navigate('Search')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
