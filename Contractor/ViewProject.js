import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class ViewProject extends React.Component {
  render() {
    const {
      title,
      category,
      photo,
      description,
      userEmail,
      userPhone
    } = this.props.navigation.state.params;
    const base64image = `data:image/jpg;base64,${photo}`;
    return (
      <View style={styles.projectWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.photo}
          source={{ uri: base64image }}
        />
        <View style={styles.infoBox}>
          <Text style={styles.category}>#{category}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {this.props.navigation.state.params.userType === "contractor" && (
          <View style={styles.contactWrapper}>
            <Text style={styles.contactMessage}>
              This homeowner has shared their contact info with you!
            </Text>
            <Text style={styles.email}>{userEmail}</Text>
            <Text style={styles.phone}>{userPhone}</Text>
          </View>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  projectWrapper: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 70
  },
  title: {
    fontSize: 22,
    marginBottom: 10
  },
  photo: {
    height: 300,
    width: 200,
    borderRadius: 4
  },
  infoBox: {
    alignItems: "flex-start",
    width: "95%",
    height: "25%"
  },
  category: {
    marginTop: 10,
    fontSize: 16
  },
  description: {
    marginTop: 30,
    fontSize: 16
  },
  contactWrapper: {
    width: "95%",
    height: "25%",
    alignItems: "center"
  },
  contactMessage: {
    fontSize: 14,
    fontWeight: "100",
    color: "#7C9EB2",
    margin: 10,
    textAlign: "center"
  },
  email: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "700"
  },
  phone: {
    fontSize: 14,
    fontWeight: "700"
  }
});