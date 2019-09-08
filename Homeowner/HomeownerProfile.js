import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ProfileCategory from "../Contractor/ProfileCategory";

export default class HomeownerProfile extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "Jamie",
      email: "JamieD@gmail.com",
      phone_number: "$$$-$$$-$$$$",
      zip: "12345"
    }
  }

  componentDidMount() {


  }

  logout = () => {
    // set currentUser in App state to null
    this.props.navigation.navigate("Login");
  };

  render() {
    const userInfo = Object.keys(this.state).map((info, index) => {
      return (
        <ProfileCategory
          key={index}
          category={info}
          value={this.state[info]}
          keyboardType={"default"}
        />
      )
    })
    return  (
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Edit Profile</Text>
          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
    paddingHorizontal: 15
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  logoutButton: {
    color: "#7C9EB2",
    fontSize: 16
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7C9EB2",
    height: 70,
    paddingHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid"
  },
  leftText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700"
  },
  rightText: {
    color: "white",
    fontSize: 16,
    fontWeight: "100"
  },
  editIcon: {
    height: 10,
    width: 10,
    marginLeft: 10
  },
  rightTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pageLabel: {
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold"
  }
})