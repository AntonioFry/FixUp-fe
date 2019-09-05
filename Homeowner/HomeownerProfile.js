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
          <Text style={styles.textLine}>
            <Text style={styles.allText}>{info.split("_").join(" ")}: </Text>
            <Text style={styles.allText}>{data[info]}</Text>
          </Text>
        </View>
      )
    })
    return  (
      <View style={styles.mainContainer}>
        {userInfo}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "#CBC5C9",
    width: "100%",
    paddingHorizontal: 10
  },
  allText: {
    fontSize: 20,
    color: "#2D2C2D",
  },
  textLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainer: {
    paddingVertical: 50,
    height: "100%",
    width: "100%",
  }
})