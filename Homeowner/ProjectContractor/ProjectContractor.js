import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {  }

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

  goToContractorPage = () => {
    const { name, zip, phone_number, email, category } = this.props.contractor;
    this.props.navigation.navigate("ContractorPage", { name, email, zip, phone_number, category });
  }

  render() {
    const { name } = this.props.contractor;
    return (
      <View style={styles.container}>
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
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 70,
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  name: {
    color: "white",
    fontSize: 25
  },
  date: {
    color: "white",
    fontSize: 20
  },
  textContainer: {
    justifyContent: "space-evenly",
    paddingLeft: 5
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F5D547",
    height: 60,
    marginRight: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
  }
})