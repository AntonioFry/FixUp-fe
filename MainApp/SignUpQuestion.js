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
        />
        <TouchableOpacity
          onPress={field => this.props.advanceQuestion(this.state.field)}
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
    // height: 200
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
