import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { patchUserChoice } from '../apicalls';

export default class ProjectContractor extends Component {
  constructor() {
    super();
    this.state = {
      connected: null
    }
  }

  componentDidMount = () => {
    this.setState({ connected: this.props.user_choice })
  }

  connectWithContractor = async () => {
    const { projectId, contractorId } = this.props;
    try {
      await patchUserChoice(projectId, contractorId);
      this.setState({ user_choice: true });
    } catch (error) {
      return new Error(error);
    }
  }

  goToContractorPage = () => {
    const { name, zip, phone_number, email, category } = this.props;
    this.props.navigation.navigate("ContractorPage", { name, email, zip, phone_number, category });
  }

  render() {
    const { name } = this.props;
    let connectedStyle = styles[`${this.state.connected}Connected`];
    return (
      <View style={connectedStyle}>
        <TouchableOpacity onPress={this.goToContractorPage} style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.connectWithContractor}>
          <Text style={styles.buttonText}>connect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 70,
    backgroundColor: 'transparent',
    width: "100%",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  name: {
    fontSize: 14,
    fontWeight: "100"
  },
  textContainer: {
    justifyContent: "space-evenly",
    paddingLeft: 5
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    marginRight: 10,
    borderRadius: 4,
    borderColor: "black",
    borderWidth: 2
  },
  buttonText: {
    // color: "#3C4F76",
    fontSize: 14,
    fontWeight: "400",
    paddingHorizontal: 5
  }
});