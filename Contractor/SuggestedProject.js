import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class SuggestedProject extends React.Component {
  render() {
    const { title, description, image, category } = this.props;
    return (
      <View style={styles.suggestedProjectWrapper} key={index}>
        <Text style={styles.projTitle}>{title}</Text>
        <Image
          style={styles.projPhoto}
          source={{ uri: image }}
        />
        <Text>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  suggestedProjectWrapper: {
    padding: 5,
    borderRadius: 8,
    width: 250,
    height: 300,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.17,
    shadowRadius: 8,
    elevation: 2
  },
  projPhoto: {
    height: 180,
    width: 230
  },
  projTitle: {
    fontWeight: "700"
  }
});