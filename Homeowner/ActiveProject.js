import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

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
        <Text style={styles.pageLabels}>Project Name</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageLabels: {
    width: "100%",
    height: 30,
    textAlign: "left",
    fontSize: 20
  }
})