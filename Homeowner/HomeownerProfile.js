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
          <Text>{data[info]}</Text>
        </View>
      )
    })
    return  (
      <View>
        {userInfo}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    
  }
})