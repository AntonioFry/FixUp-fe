import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SignUpQuestion from '../MainApp/SignUpQuestion';
import PhotoUpload from '../MainApp/PhotoUpload';

export default class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      questionNumber: 1,
      data: []
    }
  }

  advanceQuestion = data => {
    this.logData(data);
    const { questionNumber } = this.state;
    if (questionNumber < 5) {
      this.setState({ questionNumber: questionNumber + 1 });
    } else {
      this.postData(this.state.data);
      this.props.navigation.navigate("Home");
      this.setState({ questionNumber: 1 })
    }
  };

  logData = homeownerData => {
    const newData = [...this.state.data, homeownerData];
    this.setState({ data: newData });
  };

  postData = data => {
    // apiCall to post data object to backend
  };

  displayDots = () => {
    const allDots = [];
    for (let i = 1; i < 6; i++) {
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
                prompt="Upload image of project"
              />
            )}
            {this.state.questionNumber === 2 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="Name your project"
                placeholder="Project name"
                buttonText="Next"
              />
            )}
            {this.state.questionNumber === 3 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="Tag this project"
                placeholder="Project tag"
                buttonText="Next"
              />
            )}
            {this.state.questionNumber === 4 && (
              <SignUpQuestion
                advanceQuestion={this.advanceQuestion}
                prompt="Write description of project/problem"
                placeholder="Enter description"
                buttonText="Next"
              />
            )}
            {this.state.questionNumber === 5 && (
              <View style={styles.mainContainer}>
                <Text style={styles.text}>Your project has been posted</Text>
                <TouchableOpacity
                  onPress={this.advanceQuestion}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Home</Text>
                </TouchableOpacity>
              </View>
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
    height: 100
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
  mainContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
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
  }
});