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
    this.setState({ connected: this.props.user_choice });
  }

  connectWithContractor = async () => {
    const { projectId, contractorId } = this.props;
    try {
      await patchUserChoice(projectId, contractorId);
      this.setState({ connected: true });
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
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 70,
          backgroundColor: this.state.connected ? "orange" : "transparent",
          width: "100%",
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4
        }}
      >
        <TouchableOpacity
          onPress={this.goToContractorPage}
          style={styles.textContainer}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: this.state.connected ? "700" : "300",
              color: this.state.connected ? "white" : "black"
            }}
          >
            {name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 35,
            marginRight: 10,
            borderRadius: 4,
            borderColor: this.state.connected ? "white" : "orange",
            borderWidth: 2,
            width: 90
          }}
          onPress={this.connectWithContractor}
        >
          <Text
            style={{
              color: this.state.connected ? "white" : "orange",
              fontSize: 14,
              fontWeight: "400",
              paddingHorizontal: 5
            }}
          >
            Connect
          </Text>
        </TouchableOpacity>
      </View>
    );
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
    fontWeight: "100",
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
    borderColor: "orange",
    borderWidth: 2,
    width: 90
  },
  buttonText: {
    color: "orange",
    fontSize: 14,
    fontWeight: "400",
    paddingHorizontal: 5
  }
});