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
import awsExports from './src/aws-exports';
import RootNavigation from './src/navigation/RootNavigation';
import {ThemeProvider} from "./src/globals/ThemeContext";
Amplify.configure(awsExports); 
function App(){
  return (
      <ThemeProvider>
      <RootNavigation/>
      </ThemeProvider>
  );
}
export default App;
