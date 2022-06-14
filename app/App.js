import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screens/HomeScreen'
import ShowResultsScreen from "./src/screens/ShowResultsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ResultsShow: ShowResultsScreen,
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Business Search'
    },
  }
);

export default createAppContainer(navigator);