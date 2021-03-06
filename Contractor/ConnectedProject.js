import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { patchContractorProjectSeen } from "../contractorApiCalls";

export default class ConnectedProject extends React.Component {
  goToProject = async () => {
    const {
      title,
      description,
      photo,
      navigation,
      category,
      contractorId,
      projectId
    } = this.props;
    await patchContractorProjectSeen(contractorId, projectId)
    navigation.navigate("ViewProject", {
      title,
      description,
      photo,
      category,
      userEmail: "fake@gmail.com",
      userPhone: 5555555555,
      userType: "contractor"
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.goToProject} style={styles.wrapper}>
        <Text style={this.props.seen ? styles.seen : styles.unseen}>
          {this.props.title}
        </Text>
        <Image style={styles.bell} source={require("../assets/forward.png")} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    margin: 1,
    borderRadius: 1,
    padding: 14
  },
  seen: {
    fontWeight: "100"
  },
  unseen: {
    fontWeight: "900"
  },
  bell: {
    height: 15,
    width: 15
  }
});
