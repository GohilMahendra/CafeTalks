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

Amplify.configure(awsExports); 
function App(): JSX.Element {
  return (
    <SafeAreaView style={{
      flex:1
    }}>
      <RootNavigation/>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
