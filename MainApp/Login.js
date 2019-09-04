import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/tools.jpg")}
        style={{
          width: "100%",
          height: "100%",
          display: "flex"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 100
          }}
        >
          <Text style={{ fontSize: 62, fontWeight: "900" }}>FixUp</Text>
          <View>
            <TextInput
              style={{
                width: 300,
                height: 50,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 4,
                padding: 5,
                marginBottom: 10
              }}
              onChangeText={this.handleEmail}
              value={this.state.email}
              placeholder="Enter email"
            />
            <TextInput
              style={{
                width: 300,
                height: 50,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 4,
                padding: 5
              }}
              onChangeText={this.handlePassword}
              value={this.state.password}
              placeholder="Enter password"
            />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ContractorApp")}
            style={styles.login}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signUpWrapper}>
            <Text style={styles.loginMessage}>Don't have an account? </Text>
            <Text
              onPress={() => this.props.navigation.navigate("SignUp")}
              style={styles.signUp}
            >Sign Up</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#7C9EB2",
    width: 300,
    height: 50,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  loginMessage: {
    fontSize: 18
  },
  signUpWrapper: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  signUp: {
    color: "#7C9EB2",
    fontSize: 18
  }
});
