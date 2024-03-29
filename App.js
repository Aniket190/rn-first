import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from './src/screens/ComponentScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextSCreen';
import BoxScreen from './src/screens/BoxSCreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component:ComponentScreen,
    List:ListScreen,
    Image:ImageScreen,
    Counter:CounterScreen,
    Colour:ColourScreen,
    Square:SquareScreen,
    Text:TextScreen,
    Box:BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
