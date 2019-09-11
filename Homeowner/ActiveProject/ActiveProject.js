import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import data from "../../mockData/mockContactors";
import ProjectContractor from "../ProjectContractor/ProjectContractor";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getContractor } from "../../contractorApiCalls";

export default class ActiveProject extends Component {
  constructor() {
    super();
    this.state = {
      projectContractors: [],
      showContractors: false
    };
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
      );
    });
  };

  toggleContractors = () => {
    this.setState({ showContractors: !this.state.showContractors });
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <TouchableOpacity style={styles.projectButton} onPress={this.goToProject}>
            <Text style={styles.projectName}>{title}</Text>
          </TouchableOpacity>
          {this.state.projectContractors.length > 0 && (
            <TouchableOpacity style={styles.expandButton} onPress={this.toggleContractors}>
              <Text style={styles.plusText}>Contractors</Text>
              <Image style={styles.plus} source={require("../../assets/plus.png")} />
            </TouchableOpacity>
          )}
        </View>
        {this.state.showContractors && (
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
    minHeight: 50,
    justifyContent: "center",
    backgroundColor: "#DEE9EF",
    opacity: 0.9,
    marginTop: 1
  },
  nameContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingLeft: 5,
    height: 50
  },
  projectButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    marginRight: 10,
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 2
  },
  projectName: {
    width: "100%",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 5
  },
  contractorsContainer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    width: "100%"
  },
  expandButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 15
  },
  plus: {
    height: 20,
    width: 20
  },
  plusText: {
    fontSize: 11,
    fontWeight: "100",
    marginRight: 5
  }
});
