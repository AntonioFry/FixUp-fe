import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../mockData/mockContactors';
import ProjectContractor from './ProjectContractor';

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
    const { title, id } = this.props;
    const projectContractors = data.filter(contractor => {
      return contractor.projectId === id;
    })
    const formattedContractors = projectContractors.map(contractor => {
      return (
        <ProjectContractor
        id={contractor.id}
        name={contractor.name}
        dateSwiped={contractor.dateSwiped}
        />
      )
    })
    return (
      <View style={styles.container}>
        <Text style={styles.pageLabels}>{title}</Text>
        {formattedContractors}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageLabels: {
    width: "100%",
    height: 30,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  container: {
    justifyContent: "center",
    width: "90%",
    height: 50,
    marginVertical: 5,
    backgroundColor: "#7C9EB2",
    margin: 1,
    borderRadius: 1  
  }
})