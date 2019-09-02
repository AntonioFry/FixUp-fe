import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import SignUp from "./SignUp";
import ProjectScreen from "./ProjectScreen"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Ionicons from "@expo/vector-icons";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SignUp: SignUp,
    Projects: ProjectScreen
  },
  {
    initialRouteName: "Home"
  }
);

const TabStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: RootStack,
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "white" }
  }
);


const AppContainer = createAppContainer(TabStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
