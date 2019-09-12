import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import ProfileCategory from "./ProfileCategory";
import { getContractor } from "../contractorApiCalls";
import { NavigationEvents } from "react-navigation";

export default class ContractorProfile extends React.Component {
  state = {
    name: "",
    email: "",
    zip: null,
    phone_number: null,
    category: "",
    logo: null,
    loading: false
  };

  onRender = async () => {
    this.setState({ loading: true });
    const contractorId = this.props.navigation.getParam("contractorId");
    const contractor = await getContractor(contractorId);
    const { name, email, zip, phone_number, category, logo } = contractor;
    const base64image = `data:image/jpg;base64,${logo}`;
    this.setState({
      name,
      email,
      zip,
      phone_number,
      logo: base64image,
      category,
      loading: false
    });
  };

  logout = () => {
    this.props.navigation.navigate("Login");
  };

  displayInfo = () => {
    return (
      <View style={styles.infoWrapper}>
        <ProfileCategory
          category={"Name"}
          value={this.state.name}
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
        <ProfileCategory
          category={"Specialty"}
          value={this.state.category}
          keyboardType={"default"}
        />
        {this.state.logo && (
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={{ uri: this.state.logo }} />
          </View>
        )}
      </View>
    );
  };

  render() {
    return (
      <View>
        {this.state.loading && (
          <View style={styles.loadingWrapper}>
            <Image source={require("../assets/gears.gif")} />
          </View>
        )}
        {!this.state.loading && (
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>Edit Profile</Text>
              <TouchableOpacity onPress={this.logout}>
                <Text style={styles.logoutButton}>Logout</Text>
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
              <NavigationEvents onDidFocus={() => this.onRender()} />
              {!this.state.loading && this.displayInfo()}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
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
  infoWrapper: {
    width: "100%"
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: 350,
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#7C9EB2",
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid"
  },
  logo: {
    height: "90%",
    width: "90%",
    borderRadius: 4
  },
  loadingWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }
});
