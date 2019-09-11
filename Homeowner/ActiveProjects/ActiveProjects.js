import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import data from '../../mockData/mockHomeOwnerProjects';
import ActiveProject from '../ActiveProject/ActiveProject';
import { getHomeownerProjects } from '../apicalls';

export default class ActiveProjects extends Component {
  constructor() {
    super();
    this.state = {
      homeownerProjects: [],
      userId: null,
    }
  }

  componentDidMount = async () => {
    const userId = this.props.navigation.getParam("homeownerId")
    try {
      const projects = await getHomeownerProjects(userId);
      this.setState({ homeownerProjects: projects });
    } catch (error) {
      return new Error(error)
    }
  }
  
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
        />
      );
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        {this.state.homeownerProjects.length > 0 && this.displayProjects()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: "10%"
  }
})