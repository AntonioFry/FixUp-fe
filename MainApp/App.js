import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./Login";
import SignUp from "./SignUp";
import HomeownerSignUp from "./HomeownerSignUp";
import ContractorSignUp from "./ContractorSignUp";
import ContractorApp from "../Contractor/ContractorApp";
import HomeownerApp from "../Homeowner/HomeownerApp";

const RootStack = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    HomeownerSignUp: HomeownerSignUp,
    ContractorSignUp: ContractorSignUp,
    ContractorApp: ContractorApp,
    HomeownerApp: HomeownerApp
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
