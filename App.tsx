/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Amplify } from 'aws-amplify';
import RootNavigation from './src/navigation/RootNavigation';
import {ThemeProvider} from "./src/globals/ThemeContext";
import config from './src/aws-exports'
Amplify.configure(config)
function App(){
  return (
      <ThemeProvider>
      <RootNavigation/>
      </ThemeProvider>
  );
}
export default App;
