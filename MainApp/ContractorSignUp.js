import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import SignUpQuestion from "./SignUpQuestion";
import PhotoUpload from "./PhotoUpload";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

export default class ContractorSignUp extends React.Component {
  state = {
    questionNumber: 1,
    data: []
  };

  advanceQuestion = data => {
    this.logData(data);
    const { questionNumber } = this.state;
    if (questionNumber < 6) {
      this.setState({ questionNumber: questionNumber + 1 });
    } else {
      this.postData(this.state.data);
      this.props.navigation.navigate("ContractorApp");
    }
  };

  logData = contractorData => {
    const newData = [...this.state.data, contractorData];
    this.setState({ data: newData });
  };

  postData = data => {
    // apiCall to post data object to backend
  };

  displayDots = () => {
    const allDots = [];
    for (let i = 1; i < 7; i++) {
      if (this.state.questionNumber === i) {
        allDots.push(
          <Image
            key={i}
            style={styles.activeDot}
            source={require("../assets/activeDot.png")}
          />
        );
      } else {
        allDots.push(
          <Image
            key={i}
            style={styles.inactiveDot}
            source={require("../assets/inactiveDot.png")}
          />
        );
      }
    }
    return allDots;
  };

  render() {
    return (
      <View style={styles.fullWrapper}>
        <View style={styles.wrapper}>
          <View style={styles.questionsWrapper}>
            {this.state.questionNumber === 1 && (
              <PhotoUpload
                advanceQuestion={this.advanceQuestion}
                prompt="Upload your company logo"
              />
            )}
            {this.state.questionNumber === 2 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="What are your specialties?"
                placeholder="Choose specialties"
                buttonText="Next"
              />
            )}
            {this.state.questionNumber === 3 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="What's your zip code?"
                placeholder="Enter zip code"
                buttonText="Next"
              />
            )}
            {this.state.questionNumber === 4 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="What's your phone number?"
                placeholder="Enter phone"
                buttonText="Next"
              />
            )}
            {this.state.questionNumber === 5 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="What's your email address?"
                placeholder="Enter email"
                buttonText="Next"
              />
            )}
            {this.state.questionNumber === 6 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="Choose a password"
                placeholder="Enter password"
                buttonText="Finish"
              />
            )}
          </View>
        </View>
        <View style={styles.dotsWrapper}>{this.displayDots()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullWrapper: {
    flex: 1,
    justifyContent: "space-between"
  },
  wrapper: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  questionsWrapper: {
    justifyContent: "space-around",
    alignItems: "center"
  },
  dotsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  inactiveDot: {
    height: 10,
    width: 10,
    marginRight: 3,
    marginLeft: 3
  },
  activeDot: {
    height: 25,
    width: 25,
    marginRight: 3,
    marginLeft: 3
  },
  photoQuestionWrapper: {
    justifyContent: "center",
    alignItems: "center"
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
  }
});
