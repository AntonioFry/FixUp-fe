import React from 'react';
import { View, Text } from 'react-native';

export default ProfileCategory = ({ category, value }) => {
  console.log(value)
  return (
    <View>
      <Text>{category}</Text>
      <View>
        <Text>{value}</Text>
      </View>
    </View> 
  )
}