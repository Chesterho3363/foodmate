import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import MapScreen from './screens/MapScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/foodmate_0.png')} />
    </View>
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
