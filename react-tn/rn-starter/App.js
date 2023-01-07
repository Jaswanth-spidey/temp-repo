import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ex1Screen from "./src/screens/ex1Screen";
import ListScreenas from "./src/screens/ListScreenas";
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareColorScreen from "./src/screens/SquareColorScreen";
import TextScreen from "./src/screens/TextScreen"
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen, 
    ex1Screen: ex1Screen,
    ListScr: ListScreenas, 
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    SquareColorScreen: SquareColorScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
