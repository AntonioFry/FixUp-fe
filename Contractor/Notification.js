import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class Notification extends React.Component {
  state = {}

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={!this.props.seen ? styles.seen : styles.unseen}>{this.props.message}</Text>
        <Image style={styles.bell} source={require("../assets/forward.png")} />
      </View>
    )
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
    fontWeight: "900",
  },
  unseen: {
    fontWeight: "100",
  },
  bell: {
    height: 15,
    width: 15
  }
});