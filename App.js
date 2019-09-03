import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import SignUp from "./SignUp";
import HomeownerSignUp from "./HomeownerSignUp";
import ContractorSignUp from "./ContractorSignUp";
import ProjectScreen from "./ProjectScreen"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Image } from "react-native";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SignUp: SignUp,
    HomeownerSignUp: HomeownerSignUp,
    ContractorSignUp: ContractorSignUp,
    Projects: ProjectScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const TabStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: RootStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (
          <Image
            style={{ height: 30, width: 30 }}
            source={require("./assets/home.png")}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    labeled: false,
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "white", height: 70 }
  }
);


const AppContainer = createAppContainer(TabStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
