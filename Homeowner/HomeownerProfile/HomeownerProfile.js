import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ProfileCategory from "../../Contractor/ProfileCategory";
import { getHomeowner } from "../apicalls";
import { NavigationEvents } from "react-navigation";

export default class HomeownerProfile extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      email: "",
      phone_number: null,
      zip: null,
      loading: false
    };
  }

  onRender = async () => {
    this.setState({ loading: true });
    const userId = this.props.navigation.getParam("homeownerId");
    const homeowner = await getHomeowner(userId);
    const { full_name, email, zip, phone_number } = homeowner;
    this.setState({
      full_name,
      email,
      zip,
      phone_number,
      loading: false
    });
  };

  logout = () => {
    this.props.navigation.navigate("Login");
  };

  displayCategories = () => {
    return (
      <View style={styles.infoWrapper}>
        <ProfileCategory
          category={"Name"}
          value={this.state.full_name}
          keyboardType={"default"}
        />
        <ProfileCategory
          category={"Email"}
          value={this.state.email}
          keyboardType={"email-address"}
        />
        <ProfileCategory
          category={"Zip Code"}
          value={this.state.zip}
          keyboardType={"numeric"}
        />
        <ProfileCategory
          category={"Phone Number"}
          value={this.state.phone_number}
          keyboardType={"numeric"}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <NavigationEvents onDidFocus={() => this.onRender()} />
        <View style={styles.header}>
          <Text style={styles.title}>Edit Profile</Text>
          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
        </View>
        {!this.state.loading && this.displayCategories()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    justifyContent: "center",
    borderStyle: "solid",
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
  },
  infoWrapper: {
    width: "100%"
  }
});
