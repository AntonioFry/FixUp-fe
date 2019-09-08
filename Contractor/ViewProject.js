import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export default class ViewProject extends React.Component {
  render() {
    return (
      <View style={styles.projectWrapper}>
        <Text>{this.props.title}</Text>
        {/* <Image source={{ uri: photo.uri }} /> */}
        <Text>{this.props.description}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  projectWrapper: {
    width: 300,
    height: 500
  }
});