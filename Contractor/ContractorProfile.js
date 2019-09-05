import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class ContractorProfile extends React.Component {
  state = {
    name: "Steve's Tools",
    logo: { uri: "./iamges/dog" },
    email: "fake@gmail.com",
    zipCode: 80202,
    phone: 7813465555,
    specialties: [
      "plumbing",
      "Electric",
      "Jazz",
      "Hockey",
      "Basketball",
      "Soups"
    ]
  };

  logout = () => {
    // set currentUser in App state to null
    this.props.navigation.navigate("Login");
  };

  displaySpecialties = () => {
    return this.state.specialties.map((spec, index) => (
      <Text style={styles.rightText} key={index}>
        {spec}
      </Text>
    ));
  };

  render() {
    const { name, logo, email, zipCode, phone } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Edit Profile</Text>
          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoRow}>
            <Text style={styles.leftText}>Name</Text>
            <View style={styles.rightTextWrapper}>
              <Text style={styles.rightText}>{name}</Text>
              <Image
                style={styles.editIcon}
                source={require("../assets/whiteEdit.png")}
              />
            </View>
          </View>
          <View style={styles.logoWrapper}>
            <Text style={styles.leftText}>Logo</Text>
            <Image source={{ uri: logo.uri }} />
            <Image
              style={styles.editIcon}
              source={require("../assets/whiteEdit.png")}
            />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.leftText}>Email</Text>
            <View style={styles.rightTextWrapper}>
              <Text style={styles.rightText}>{email}</Text>
              <Image
                style={styles.editIcon}
                source={require("../assets/whiteEdit.png")}
              />
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.leftText}>Zip Code</Text>
            <View style={styles.rightTextWrapper}>
              <Text style={styles.rightText}>{zipCode}</Text>
              <Image
                style={styles.editIcon}
                source={require("../assets/whiteEdit.png")}
              />
            </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.leftText}>Phone Number</Text>
            <View style={styles.rightTextWrapper}>
              <Text style={styles.rightText}>{phone}</Text>
              <Image
                style={styles.editIcon}
                source={require("../assets/whiteEdit.png")}
              />
            </View>
          </View>
          <View style={styles.specialtiesWrapper}>
            <Text style={styles.leftText}>Specialties</Text>
            <View style={styles.specialtiesContainer}>
              <View style={styles.specialtiesRightWrapper}>
                {this.state.specialties.length > 0 && this.displaySpecialties()}
              </View>
                <Image
                  style={styles.editIcon}
                  source={require("../assets/whiteEdit.png")}
                />
            </View>
          </View>
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
  specialtiesWrapper: {
    backgroundColor: "#7C9EB2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7C9EB2",
    minHeight: 70,
    paddingHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid"
  },
  specialtiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
  specialtiesRightWrapper: {
    justifyContent: "space-around",
    alignItems: "flex-end"
  }
});
