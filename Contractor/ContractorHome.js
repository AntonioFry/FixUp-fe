import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Notification from "./Notification";

export default class ContractorHome extends React.Component {
  state = {
    notifications: [
      {
        seen: false,
        message: "You've been fixed up with a project!",
        date: "9/2/2019"
      },
      {
        seen: true,
        message: "You've been fixed up with a project!",
        date: "9/1/2019"
      },
      {
        seen: false,
        message: "You've been fixed up with a project!",
        date: "9/3/2019"
      },
      {
        seen: true,
        message: "You've been fixed up with a project!",
        date: "9/1/2019"
      },
      {
        seen: true,
        message: "You've been fixed up with a project!",
        date: "9/1/2019"
      }
    ],
    suggestedProjects: [
      {
        title: "Pipe burst",
        photo: "../assets/burstPipeGuy.jpg",
        description:
          "So I walked into my basement and saw this pipe fucking SPRAYING all over the place. Help?"
      },
      {
        title: "Pipe burst",
        photo: "../assets/burstPipeGuy.jpg",
        description:
          "So I walked into my basement and saw this pipe fucking SPRAYING all over the place. Help?"
      },
      {
        title: "Pipe burst",
        photo: "../assets/burstPipeGuy.jpg",
        description:
          "So I walked into my basement and saw this pipe fucking SPRAYING all over the place. Help?"
      },
      {
        title: "Pipe burst",
        photo: "../assets/burstPipeGuy.jpg",
        description:
          "So I walked into my basement and saw this pipe fucking SPRAYING all over the place. Help?"
      }
    ]
  };

  componentDidMount() {
    // fetch all notifications from API
    // Clean them so new notifications display differently
  }

  displayNotifications = () => {
    // take all notifications and render each as a component
    return this.state.notifications.map((notification, index) => {
      return (
        <Notification
          key={index}
          seen={notification.seen}
          message={notification.message}
        />
      );
    });
  };

  displaySuggestedProjects = () => {
    return this.state.suggestedProjects.map((proj, index) => {
      return (
        <View style={styles.suggestedProjectWrapper} key={index}>
          <Text style={styles.projTitle}>{proj.title}</Text>
          <Image style={styles.projPhoto} source={require("../assets/burstPipeGuy.jpg")} />
          <Text>{proj.description}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.contractorName}>
            {this.props.contractorName}Steve's Tools
          </Text>
        </View>
        <View style={styles.notificationsSection}>
          <Text style={styles.notificationsTitle}>Project Leads</Text>
          <ScrollView style={styles.notificationsWrapper}>
            {this.state.notifications.length > 0 && this.displayNotifications()}
          </ScrollView>
        </View>
        <Text style={styles.suggestionsTitle}>Suggested Projects</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.suggestionsWrapper}
        >
          {this.state.suggestedProjects.length > 0 &&
            this.displaySuggestedProjects()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-start"
  },
  header: {
    height: 65,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingTop: 20,
    paddingHorizontal: 15
  },
  contractorName: {
    fontSize: 20,
    fontWeight: "600",
    color: "orange"
  },
  notificationsSection: {
    height: "40%"
  },
  notificationsTitle: {
    fontSize: 16,
    fontWeight: "200",
    margin: 10,
    color: "darkgray",
    textAlign: "center"
  },
  notificationsWrapper: {},
  suggestionsWrapper: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  suggestedProjectWrapper: {
    padding: 5,
    borderRadius: 8,
    width: 250,
    height: 300,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.17,
    shadowRadius: 8,
    elevation: 2
  },
  projPhoto: {
    height: 180,
    width: 230
  },
  projTitle: {
    fontWeight: "700"
  },
  suggestionsTitle: {
    fontSize: 16,
    fontWeight: "200",
    margin: 10,
    color: "darkgray",
    textAlign: "center"
  }
});
