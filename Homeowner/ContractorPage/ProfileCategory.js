import React from 'react';
import { View, Text } from 'react-native';

export const ProfileCategory = ({ category, value }) => {
  return (
    <View>
      <Text>{category}</Text>
      <View>
        <Text>{value}</Text>
      </View>
    </View> 
  )
}