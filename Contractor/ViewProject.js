import React from "react";
import { View, Text, Image } from "react-native";


export const ViewProject = props => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image source={{ uri: props.photo.uri }} />
      <Text>{props.description}</Text>
    </View>
  );
};