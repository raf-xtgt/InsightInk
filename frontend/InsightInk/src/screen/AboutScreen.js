import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

AboutScreen.navigationOptions = {
    headerTitle: 'InsightInk'
}

export default AboutScreen;
