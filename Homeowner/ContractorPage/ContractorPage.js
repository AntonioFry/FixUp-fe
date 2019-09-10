import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import ProfileCategory from "./ProfileCategory";

const ContractorPage = (props) => {
  const { name, email, zip, phone_number, category } = props.navigation.state.params;
  return (
    <View>
      <ProfileCategory category={"Name"} value={name} />
      <ProfileCategory category={"Email"} value={email} />
      <ProfileCategory category={"Zip Code"} value={zip} />
      <ProfileCategory category={"Phone Number"} value={phone_number} />
      <ProfileCategory category={"Specialty"} value={category} />
    </View>
  )
}

const styles = StyleSheet.create({
  
})

export default ContractorPage;