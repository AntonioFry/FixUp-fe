import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class SignUp extends React.Component {
  state = {};


  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.prompt}>Are you a contractor or a homeowner?</Text>
        <TouchableOpacity
          style={styles.button}
          title="Homeowner"
          onPress={() => this.props.navigation.navigate("HomeownerSignUp")}
        >
          <Text>Homeowner</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Contractor"
          onPress={() => this.props.navigation.navigate("ContractorSignUp")}
        >
          <Text>Contractor</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  prompt: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#7C9EB2",
    width: 300,
    height: 50,
    marginBottom: 10
  }
});
