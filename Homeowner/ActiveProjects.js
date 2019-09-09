import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import data from '../mockData/mockHomeOwnerProjects';
import ActiveProject from './ActiveProject';

export default class ActiveProjects extends Component {
  constructor() {
    super();
    this.state = {
      homeownerProjects: [
        {
          id: 1,
          seen: false,
          title: "Pipe burst",
          photo: { uri: "../assets/burstPipeGuy.jpg" },
          description:
            "So I walked into my basement and saw this pipe fucking SPRAYING all over the place. Help?"
        },
        {
          id: 2,
          seen: true,
          title: "Pipe burst",
          photo: { uri: "../assets/burstPipeGuy.jpg" },
          description:
            "So I walked into my basement and saw this pipe fucking SPRAYING all over the place. Help?"
        },
        {
          id: 3,
          seen: false,
          title: "Pipe burst",
          photo: { uri: "../../assets/burstPipeGuy.jpg" },
          description:
            "So I walked into my basement and saw this pipe fucking SPRAYING all over the place. Help?"
        }
      ]
    }
  }

  componentDidMount = () => {
    // should fetch all projects that share the same user_id with the current user
    // and then the the projects to state
  }

  render() {
    const formattedProject = this.state.homeownerProjects.map(project => {
      return (
        <ActiveProject
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
        {formattedProject}
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