import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from '../mockData/mockUser';

export default class HomeownerProfile extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const userInfo = Object.keys(data).map(info => {
      return (
        <View style={styles.infoContainer}>
          <Text style={styles.allText}>{info.split("_").join(" ")}: {data[info]}</Text>
        </View>
      )
    })
    userInfo.pop();
    return  (
      <View style={styles.mainContainer}>
        <Text style={styles.pageLabel}>Account Information</Text>
        {userInfo}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    justifyContent: "center",
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "#CBC5C9",
    width: "100%",
    paddingHorizontal: 10,
    height: 40
  },
  allText: {
    fontSize: 22,
    color: "#2D2C2D",
  },
  mainContainer: {
    paddingVertical: 50,
    height: "100%",
    width: "100%",
  },
  pageLabel: {
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold"
  }
})