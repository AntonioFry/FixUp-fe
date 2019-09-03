import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

export default class PhotoUpload extends React.Component {
  state = {
    photo: null
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  pickImage = async () => {
    await this.getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      this.setState({ photo: result });
    }
  };

  render() {
    return (
      <View style={styles.questionWrapper}>
        <Text style={styles.prompt}>{this.props.prompt}</Text>
        <TouchableOpacity style={styles.button} onPress={this.pickImage}>
          <Text>Choose image</Text>
        </TouchableOpacity>
        {this.state.photo && (
          <Image
            source={{ uri: this.state.photo.uri }}
            style={{ width: 300, height: 300, marginBottom: 10 }}
          />
        )}
        <TouchableOpacity
          onPress={field => this.props.advanceQuestion(this.state.photo)}
          style={styles.button}
        >
          <Text>Next</Text>
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
