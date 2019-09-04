import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
      }
    ]
  };

  componentDidMount() {
    // fetch all notifications from API
    // Clean them so new notifications display differently
  }

  logout = () => {
    // logout contractor and return to login screen
  };

  displayNotifications = () => {
    // take all notifications and render each as a component
    return this.state.notifications.map(notification => {
      return <Notification seen={notification.seen} message={notification.message} />
    });
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.contractorName}>
            {this.props.contractorName}Contractor Name
          </Text>
          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.logoutButton}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notificationsSection}>
          <Text style={styles.notificationsTitle}>Project Leads</Text>
          <ScrollView style={styles.notificationsWrapper}>
            {this.state.notifications.length > 0 && this.displayNotifications()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  header: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "5%",
    paddingHorizontal: 15,
    backgroundColor: "orange"
  },
  logoutButton: {
    color: "#7C9EB2",
    fontSize: 16
  },
  contractorName: {
    fontSize: 16,
    fontWeight: "600"
  },
  notificationsSection: {
    height: "60%"
  },
  notificationsTitle: {
    fontSize: 16,
    fontWeight: "200",
    margin: 10,
    color: "darkgray",
    textAlign: "center"
  },
  notificationsWrapper: {
    // padding: 10
  }
});
