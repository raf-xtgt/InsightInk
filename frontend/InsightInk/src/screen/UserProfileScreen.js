import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

function UserProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

UserProfileScreen.navigationOptions = {
    headerTitle: 'InsightInk'
}

export default UserProfileScreen;
