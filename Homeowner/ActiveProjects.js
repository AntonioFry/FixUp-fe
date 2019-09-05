import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import data from '../mockData/mockHomeOwnerProjects';
import ActiveProject from './ActiveProject';

export default class ActiveProjects extends Component {
  constructor() {
    super();
    this.state = {
      homeownerProjects: []
    }
  }

  componentDidMount = () => {
    // should fetch all projects that share the same user_id with the current user
    // and then the the projects to state
  }

  render() {
    const formattedProject = data.map(project => {
      return (
        <ActiveProject
        id={project.id}
        title={project.title}
        key={project.id}
        />
      )
    })
    return (
      <ScrollView>
        {formattedProject}
      </ScrollView>
    )
  }
}