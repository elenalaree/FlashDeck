import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Flashcard from './js/Flashcard';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import AppNavigator from './js/AppNavigator.js'; // Import your navigation component
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);

export default function App() {

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
