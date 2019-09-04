import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

export default class ActiveProject extends Component {
  constructor() {
    super();
    this.state = {
      projectContractors: []
    }
  }

  componentDidMount() {
    // when component mounts fetch all contractors for this project
    // then set the state with the contractors
  }

  render() {
    return (
      <View>
        <Text>Project Name</Text>
      </View>
    )
  }
}