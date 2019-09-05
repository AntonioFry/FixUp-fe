import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

export default class ContractorProfile extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  title: {
    marginTop: 50
  }
});