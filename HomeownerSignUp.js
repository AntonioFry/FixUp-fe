import React from "react";
import { View, StyleSheet, Image } from "react-native";
import SignUpQuestion from "./SignUpQuestion";

export default class HomeownerSignUp extends React.Component {
  state = {
    questionNumber: 1
  };

  advanceQuestion = () => {
    const { questionNumber } = this.state;
    this.setState({ questionNumber: questionNumber + 1 });
  };

  displayDots = () => {
    const allDots = [];
    for (let i = 1; i < 5; i++) {
      if(this.state.questionNumber === i) {
        allDots.push(
          <Image
            style={styles.activeDot}
            source={require("./assets/activeDot.png")}
          />
        );
      } else {
        allDots.push(
          <Image
            style={styles.inactiveDot}
            source={require("./assets/inactiveDot.png")}
          />
        );
      }
    }
    return allDots;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.state.questionNumber === 1 && (
          <SignUpQuestion
            advanceQuestion={this.advanceQuestion}
            prompt="What's your zip code?"
            placeholder="Enter zip code"
            buttonText="Next"
          />
        )}
        {this.state.questionNumber === 2 && (
          <SignUpQuestion
            advanceQuestion={this.advanceQuestion}
            prompt="What's your phone number?"
            placeholder="Enter phone"
            buttonText="Next"
          />
        )}
        {this.state.questionNumber === 3 && (
          <SignUpQuestion
            advanceQuestion={this.advanceQuestion}
            prompt="What's your email address?"
            placeholder="Enter phone"
            buttonText="Next"
          />
        )}
        {this.state.questionNumber === 4 && (
          <SignUpQuestion
            advanceQuestion={this.advanceQuestion}
            prompt="Choose a password"
            placeholder="Enter password"
            buttonText="Finish"
          />
        )}
        <View style={styles.dotsWrapper}>
          {this.displayDots()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  dotsWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  },
  inactiveDot: {
    height: 15,
    width: 15
  },
  activeDot: {
    height: 25,
    width: 25
  }
});
