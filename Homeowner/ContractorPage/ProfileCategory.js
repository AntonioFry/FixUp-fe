import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ProfileCategory = ({ category, value }) => {
  return (
    <View style={styles.categoryWrapper}>
      <Text style={styles.leftText}>{category}</Text>
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>{value}</Text>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
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
  rightTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  categoryWrapper: {
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
})