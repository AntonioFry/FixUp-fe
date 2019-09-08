import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ProfileCategory from "./ProfileCategory";

export default class ContractorProfile extends React.Component {
  state = {
    name: "Steve's Tools",
    email: "fake@gmail.com",
    zipCode: "80202",
    phone: "7813465555",
    specialty: "Electric",
    logo: { uri: undefined }
  };

  componentDidMount() {}

  logout = () => {
    // set currentUser in App state to null
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Edit Profile</Text>
          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoWrapper}>
          <ProfileCategory category={"Name"} value={this.state.name} keyboardType={"default"} />
          <ProfileCategory category={"Email"} value={this.state.email} keyboardType={"email-address"} />
          <ProfileCategory category={"Zip Code"} value={this.state.zipCode} keyboardType={"numeric"} />
          <ProfileCategory category={"Phone Number"} value={this.state.phone} keyboardType={"numeric"} />
          <ProfileCategory category={"Specialty"} value={this.state.specialty} keyboardType={"default"} />
          {this.state.logo.uri && (
            <View style={styles.logoWrapper}>
              <Text style={styles.leftText}>Logo</Text>
              <Image source={{ uri: this.state.logo.uri }} />
              <Image
                style={styles.editIcon}
                source={require("../assets/whiteEdit.png")}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%"
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
  infoWrapper: {
    width: "100%"
  },
  logoWrapper: {
    alignItems: "center",
    height: 200,
    paddingHorizontal: 15
  }
});
