import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './src/screen/HomeScreen';
import AddNoteScreen from './src/screen/AddNoteScreen';
import AboutScreen from './src/screen/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainStackNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Add Note" component={AddNoteScreen} options={{ title: 'Add Content' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'User Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainStackNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Note"
        component={AddNoteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="description" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
