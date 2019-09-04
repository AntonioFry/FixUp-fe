import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProjectContractor extends Component {
  constructor() {
    super();
    this.state = {
      connected: false
    }
  }

  connectWithContractor = () => {
    // if not connected
      // when invoked the user info will be sent to the contractor
      // a contractor_project will then also be created
    // otherwise
      // user will unconnect from that specific contractor deleting the contractor project
  }

  render() {
    return (
      <View>
        <Text></Text>
        <TouchableOpacity onPress={this.connectWithContractor}><Text>Connect</Text></TouchableOpacity>
      </View>
    )
  }
}