import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class ProjectWorkshop extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={style.text}>Post a New Project</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: 'center',
    height: 50,
    width: "50%"
  },
  button: {
    justifyContent: 'center',
    backgroundColor: "#7C9EB2",
    borderRadius: 5
  },
  text: {
    fontSize: 20
  }
})