import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export default class ViewProject extends React.Component {
  render() {
    const { title, category, photo, description } = this.props.navigation.state.params;
    return (
      <View style={styles.projectWrapper}>
        <Text>{title}</Text>
        {/* <Image source={{ uri: photo.uri }} /> */}
        <Text>{category}</Text>
        <Text>{description}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  projectWrapper: {
    height: "100%",
    justifyContent: "flex-start",
    marginTop: 70
  }
});