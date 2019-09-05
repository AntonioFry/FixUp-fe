import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Login from "./Login";
import SignUp from "./SignUp";
import HomeownerSignUp from "./HomeownerSignUp";
import ContractorSignUp from "./ContractorSignUp";
import ContractorHome from "../Contractor/ContractorHome";
import ActiveProjects from "../Homeowner/ActiveProjects";
import ProjectSwiper from "../Contractor/ProjectSwiper";
import ContractorProfile from "../Contractor/ContractorProfile";

const ContractorTabStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: ContractorHome,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../assets/home.png")}
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
            style={{ height: 25, width: 25 }}
            source={require("../assets/hammer.png")}
          />
        )
      }
    },
    Profile: {
      screen: ContractorProfile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: (
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../assets/profile.png")}
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
    barStyle: { backgroundColor: "orange", height: 80, paddingTop: 0 }
  }
);

const HomeownerTabStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: ActiveProjects,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../assets/home.png")}
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
    barStyle: { backgroundColor: "orange", height: 80, paddingTop: 0 }
  }
);

const RootStack = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    HomeownerSignUp: HomeownerSignUp,
    ContractorSignUp: ContractorSignUp,
    ContractorApp: {
      screen: ContractorTabStack,
      navigationOptions: {
        title: "ContractorApp",
        headerLeft: null,
        gesturesEnabled: false
      }
    },
    HomeownerApp: {
      screen: HomeownerTabStack,
      navigationOptions: {
        title: "HomeownerApp",
        headerLeft: null,
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
