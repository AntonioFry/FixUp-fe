import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class ProfileCategory extends React.Component {
  state = {
    text: "",
    keyboardType: "",
    displayInput: false
  };

  componentDidMount() {
    this.setState({ text: this.props.value });
  }

  toggleInput = () => {
    this.setState({ displayInput: !this.state.displayInput });
  };

  onChangeText = text => {
    this.setState({ text });
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.toggleInput}
        style={styles.categoryWrapper}
      >
        <Text style={styles.leftText}>{this.props.category}</Text>
        <View style={styles.rightTextWrapper}>
          {!this.state.displayInput && (
            <Text style={styles.rightText}>{this.state.text}</Text>
          )}
          {this.state.displayInput && (
            <TextInput
              stlye={styles.input}
              autoFocus={true}
              value={this.state.text}
              onChangeText={text => this.onChangeText(text)}
              keyboardType={this.props.keyboardType}
              onBlur={this.toggleInput}
            />
          )}
          <Image
            style={styles.editIcon}
            source={require("../assets/whiteEdit.png")}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
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
  editIcon: {
    height: 10,
    width: 10,
    marginLeft: 10
  },
  rightTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    color: "white"
  }
});
