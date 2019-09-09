import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../mockData/mockContactors';
import ProjectContractor from './ProjectContractor';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

  goToProject = () => {
    const { title, description, photo, navigation } = this.props;
    navigation.navigate("ViewProject", { title, description, photo });
  };

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
        <View style={styles.nameContainer}>
          <TouchableOpacity onPress={this.goToProject}>
            <Text style={styles.projectName}>{title}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contractorsContainer}>
          {formattedContractors}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  projectName: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  container: {
    width: "90%",
    minHeight: 50,
    marginVertical: 10
  },
  nameContainer: {
    zIndex: 100,
    width: "100%",
    position: "absolute",
    height: 40,
    backgroundColor: "#7C9EB2",
    justifyContent: "center",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  contractorsContainer: {
    marginTop: 35,
    paddingTop: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#7C9EB2",
    opacity: 0.8,
  }
})