import React from "react";
import { Picker, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class SpecialtyPicker extends React.Component {
  state = {
    specialty: "Electrical"
  };

  render() {
    return (
      <View style={styles.questionWrapper}>
        <Text style={styles.prompt}>{this.props.prompt}</Text>
        <Picker
          selectedValue={this.state.specialty}
          style={styles.picker}
          onValueChange={itemValue =>
            this.setState({ specialty: itemValue })
          }
        >
          <Picker.Item color="orange" label="Electrical" value="Electrical" />
          <Picker.Item color="orange" label="Plumbing" value="Plumbing" />
          <Picker.Item color="orange" label="Landscaping" value="Landscaping" />
          <Picker.Item color="orange" label="Drywall" value="Drywall" />
          <Picker.Item color="orange" label="Carpentry" value="Carpentry" />
        </Picker>
        <TouchableOpacity
          onPress={() => this.props.advanceQuestion(this.props.data, this.state.specialty)}
          style={styles.button}
        >
          <Text>{this.props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  prompt: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#7C9EB2",
    width: 300,
    height: 50,
    marginBottom: 10
  },
  picker: {
    height: 50,
    width: 300,
    marginBottom: 170,
    marginTop: -30,
    backfaceVisibility: "hidden"
  }
});