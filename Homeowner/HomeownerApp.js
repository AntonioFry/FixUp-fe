import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { Image } from "react-native";
import ActiveProjects from "./ActiveProjects";

const TabStack = createMaterialBottomTabNavigator(
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
    },
    // ProjectSwiper: {
    //   screen: ProjectSwiper,
    //   navigationOptions: {
    //     tabBarLabel: "Projects",
    //     tabBarIcon: (
    //       <Image
    //         style={{ height: 25, width: 25 }}
    //         source={require("../assets/hammer.png")}
    //       />
    //     )
    //   }
    // }
  },
  {
    initialRouteName: "Home",
    labeled: false,
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "orange", height: 80, paddingTop: 0 }
  }
);

const AppContainer = createAppContainer(TabStack);

export default class HomeownerApp extends React.Component {
  render() {
    return <AppContainer />;
  }
}
