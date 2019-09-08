import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class ConnectedProject extends React.Component {

  goToProject = () => {
    const { title, description, photo, navigation } = this.props;
    navigation.navigate("ViewProject", { title, description, photo });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.goToProject} style={styles.wrapper}>
        <Text style={!this.props.seen ? styles.seen : styles.unseen}>
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
    fontWeight: "900"
  },
  unseen: {
    fontWeight: "100"
  },
  bell: {
    height: 15,
    width: 15
  }
});
