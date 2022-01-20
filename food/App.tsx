import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabScreen from './src/screens/BottomTabScreen';
import DrawerScreen from './src/screens/DarwerScreen';
import Home from './src/screens/Home';
const navigator = createStackNavigator(
  {
    Home: Home,
    Drawer: DrawerScreen,
    BottomTab: BottomTabScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Food App',
    },
  }
);

export default createAppContainer(navigator);
