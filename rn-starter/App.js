import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ButtonComponent from './src/screens/ButtonComponent';
import Ex1FlatList from './src/screens/Ex1.FlatList';
import HomeScreen from './src/screens/HomeScreen';
import ListComponent from './src/screens/ListComponent';
import MyComponent from './src/screens/MyComponent';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MyComponent: MyComponent,
    List: ListComponent,
    ex1: Ex1FlatList,
    Button: ButtonComponent,
  },
  {
    initialRouteName: 'Button',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
