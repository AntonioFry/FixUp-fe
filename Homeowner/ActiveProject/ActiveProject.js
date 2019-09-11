import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import data from "../../mockData/mockContactors";
import ProjectContractor from "../ProjectContractor/ProjectContractor";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getContractor } from "../../contractorApiCalls";

export default class ActiveProject extends Component {
  constructor() {
    super();
    this.state = {
      projectContractors: []
    };
  }

  componentDidMount = async () => {
    const { contractors } = this.props;
    try {
      contractors.forEach(async contractor => {
        const contractorObj = await getContractor(contractor.contractor_id);
        await this.setState({
          projectContractors: [...this.state.projectContractors, contractorObj]
        });
      });
    } catch (error) {}
  };

  goToProject = () => {
    const { title, description, photo, navigation, category } = this.props;
    navigation.navigate("ViewProject", {
      title,
      description,
      photo,
      category,
      userType: "homeowner"
    });
  };

  displayContractors = () => {
    const { navigation } = this.props;
    return this.state.projectContractors.map((contractor, index) => {
      return (
        <ProjectContractor
          id={index + 1}
          contractor={contractor}
          key={index + 1}
          navigation={navigation}
        />
      );
    });
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <TouchableOpacity onPress={this.goToProject}>
            <Text style={styles.projectName}>{title}</Text>
          </TouchableOpacity>
        </View>
        {this.state.projectContractors.length > 0 && (
          <View style={styles.contractorsContainer}>
            {this.displayContractors()}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 40,
    justifyContent: "center",
    backgroundColor: "#DEE9EF",
    opacity: 0.9,
    marginTop: 1
  },
  nameContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingLeft: 5
  },
  projectName: {
    width: "100%",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
  contractorsContainer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    width: "100%"
  }
});
