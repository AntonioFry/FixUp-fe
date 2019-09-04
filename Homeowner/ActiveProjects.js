import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';

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
    return (
      <ScrollView>

      </ScrollView>
    )
  }
}
