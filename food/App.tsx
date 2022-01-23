import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabScreen from './src/screens/BottomTabScreen';
import DrawerScreen from './src/screens/DarwerScreen';
import Home from './src/screens/Home';
import SearchScreen from './src/screens/SearchScreen';
const navigator = createStackNavigator(
  {
    Home: Home,
    Drawer: DrawerScreen,
    BottomTab: BottomTabScreen,
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Food App',
    },
  }
);

export default createAppContainer(navigator);
