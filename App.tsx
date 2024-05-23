import * as React from 'react';
import StackNavigation from './navigation/StackNavigation';
import Providers from './providers/Providers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function App() {
  console.log('App');
  
  return (
    <SafeAreaView style={styles.container}>
      <Providers>
        <StatusBar style="dark" />
        <StackNavigation />
      </Providers>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B5323",
  },
});

export default App;