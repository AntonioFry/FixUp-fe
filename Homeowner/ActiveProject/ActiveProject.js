import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../../mockData/mockContactors';
import ProjectContractor from '../ProjectContractor/ProjectContractor';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getContractor } from '../../contractorApiCalls';

export default class ActiveProject extends Component {
  constructor() {
    super();
    this.state = {
      projectContractors: []
    }
  }

  componentDidMount = async () => {
    const { contractors } = this.props;
    try {
      contractors.forEach( async (contractor) => {
        const gottenContractor = await getContractor(contractor.contractor_id)
        const { user_choice } = contractor;
        const contractorObj = { user_choice, ...gottenContractor };
        await this.setState({ projectContractors: [...this.state.projectContractors, contractorObj ] });
      });
    } catch (error) {
      return new Error(error);
    }
  }

  goToProject = () => {
    const { title, description, photo, navigation, category } = this.props;
    navigation.navigate("ViewProject", { title, description, photo, category, userType: "homeowner" });
  };

  render() {
    const { title, navigation, id } = this.props;
    const formattedContractors = this.state.projectContractors.map((contractor) => {
      return (
        <ProjectContractor
          projectId={id}
          contractorId={contractor.id}
          name={contractor.name}
          email={contractor.email}
          phone_number={contractor.phone_number}
          zip={contractor.zip}
          category={contractor.zip}
          user_choice={contractor.user_choice}
          key={contractor.id}
          navigation={navigation}
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