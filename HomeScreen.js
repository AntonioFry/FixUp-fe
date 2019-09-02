import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
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
        source={require("./assets/tools.jpg")}
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
                width: 200,
                height: 40,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 4,
                padding: 5,
                marginBottom: 10
              }}
              name="email"
              onChangeText={this.handleEmail}
              value={this.state.email}
              placeholder="Enter email"
            />
            <TextInput
              style={{
                width: 200,
                height: 40,
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 4,
                padding: 5,
              }}
              name="password"
              onChangeText={this.handlePassword}
              value={this.state.password}
              placeholder="Enter password"
            />
          </View>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate("Projects")}
          ></Button>
          <Text>or</Text>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate("SignUp")}
          ></Button>
        </View>
      </ImageBackground>
    );
  }
}
