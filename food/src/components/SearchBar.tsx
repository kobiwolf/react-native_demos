import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { NavigationScreenProp, withNavigation } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<any, any>; //TODO not sure it's the right type
}

function SearchBar(props: Props) {
  console.log(props.navigation);

  const onEndEditing = (param: any) => {
    console.log(param);
    console.log('edit');
  };
  return (
    <View style={styles.container}>
      <EvilIcons name='search' style={styles.icon} />
      <TextInput
        placeholder='Search'
        onEndEditing={(param: any) => onEndEditing(param)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 50,
    backgroundColor: 'lightgrey',
  },
  icon: {
    fontSize: 40,
    color: 'blue',
  },
});
export default withNavigation(SearchBar);
