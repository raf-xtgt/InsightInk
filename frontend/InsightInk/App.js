import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import AddNoteScreen from './src/screen/AddNoteScreen';
import UserProfileScreen from './src/screen/UserProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Add Note" component={AddNoteScreen} options={{ title: 'Add Content' }} />
        <Stack.Screen name="User Profile" component={UserProfileScreen} options={{ title: 'User Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainStackNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add Note" component={AddNoteScreen} />
      <Tab.Screen name="User Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}

export default App;
