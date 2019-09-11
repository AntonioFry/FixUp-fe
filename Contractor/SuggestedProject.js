import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class SuggestedProject extends React.Component {
  goToProject = () => {
    const {
      title,
      description,
      photo,
      navigation,
      category
    } = this.props;
    navigation.navigate("ViewProject", {
      title,
      description,
      photo,
      category,
    });
  }

  render() {
    const { title, photo, index } = this.props;
    const base64image = `data:image/jpg;base64,${photo}`;
    return (
      <View style={styles.suggestedProjectWrapper} key={index}>
        <Text style={styles.projTitle}>{title}</Text>
        <Image style={styles.projPhoto} source={{ uri: base64image }} />
        <TouchableOpacity onPress={this.goToProject} style={styles.viewButton}>
          <Text style={styles.seeMore}>See more</Text>
          <Image style={styles.moreIcon} source={require("../assets/more.png")} />
        </TouchableOpacity>
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
    height: 220,
    width: 230,
    borderRadius: 4
  },
  projTitle: {
    fontWeight: "700"
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  moreIcon: {
    height: 15,
    width: 15
  },
  seeMore: {
    fontWeight: "500",
    marginRight: 7
  }
});