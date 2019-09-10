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
      await this.setState({ userId: userId })
      const projects = await getHomeownerProjects(this.state.userId);
      await this.setState({ homeownerProjects: projects });
    } catch (error) {
      return new Error(error)
    }
  }

  render() {
    const formattedProject = this.state.homeownerProjects.map(project => {
      return (
        <ActiveProject
        contractors={project.contractors}
        id={project.id}
        title={project.title}
        photo={project.photo}
        description={project.description}
        key={project.id}
        navigation={this.props.navigation}
        />
      )
    })
    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        {this.state.homeownerProjects.length > 0 && formattedProject}
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