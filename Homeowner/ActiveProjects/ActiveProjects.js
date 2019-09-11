import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import ActiveProject from "../ActiveProject/ActiveProject";
import { getHomeownerProjects } from "../apicalls";
import { NavigationEvents } from "react-navigation";

export default class ActiveProjects extends Component {
  constructor() {
    super();
    this.state = {
      homeownerProjects: [],
      loading: false
    };
  }

  onRender = async () => {
    this.setState({ loading: true });
    const userId = this.props.navigation.getParam("homeownerId");
    try {
      const projects = await getHomeownerProjects(userId);
      this.setState({ homeownerProjects: projects, loading: false });
    } catch (error) {
      return new Error(error);
    }
  };

  displayProjects = () => {
    return this.state.homeownerProjects.map(project => {
      return (
        <ActiveProject
          contractors={project.contractors}
          id={project.id}
          title={project.title}
          photo={project.user_before_picture}
          description={project.description}
          key={project.id}
          navigation={this.props.navigation}
          category={project.category}
        />
      );
    });
  };

  render() {
    return (
      <View>
        {this.state.loading && (
          <View style={styles.gifWrapper}>
            <Image source={require("../../assets/gears.gif")} />
          </View>
        )}
        {!this.state.loading && (
          <ScrollView contentContainerStyle={styles.mainContainer}>
            <NavigationEvents onDidFocus={() => this.onRender()} />
            {this.state.homeownerProjects.length > 0 && this.displayProjects()}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gifWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  mainContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: "10%"
  }
});
