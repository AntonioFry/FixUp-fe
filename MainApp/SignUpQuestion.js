import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";


export default class SignUpQuestion extends React.Component {
  state = {
    field: ""
  };

  handleChange = text => {
    this.setState({ field: text });
  };

  render() {
    return (
      <View style={styles.questionWrapper}>
        <Text style={styles.prompt}>{this.props.prompt}</Text>
        <TextInput
          style={styles.input}
          value={this.state.field}
          onChangeText={this.handleChange}
          placeholder={this.props.placeholder}
          keyboardType={this.props.keyboardType}
        />
        <TouchableOpacity
          onPress={() => this.props.advanceQuestion(this.props.data, this.state.field)}
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
    alignItems: "center",
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
  input: {
    width: 300,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginBottom: 10
  }
});
