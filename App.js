import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./Login";
import SignUp from "./SignUp";
import HomeownerSignUp from "./HomeownerSignUp";
import ContractorSignUp from "./ContractorSignUp";
import ProjectScreen from "./ProjectScreen"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Image } from "react-native";
import ProjectSwiper from "./ProjectSwiper";

const RootStack = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    HomeownerSignUp: HomeownerSignUp,
    ContractorSignUp: ContractorSignUp,
    Projects: ProjectScreen,
    ProjectSwiper: ProjectSwiper
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const TabStack = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: RootStack,
      navigationOptions: {
        tabBarLabel: "Login",
        tabBarIcon: (
          <Image
            style={{ height: 30, width: 30 }}
            source={require("./assets/home.png")}
          />
        )
      }
    },
    ProjectSwiper: {
      screen: ProjectSwiper,
      navigationOptions: {
        tabBarLabel: "Projects",
        tabBarIcon: (
          <Image
            style={{ height: 30, width: 30 }}
            source={require("./assets/hammer.png")}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Login",
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
