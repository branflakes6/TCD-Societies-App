import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { TestScreen } from './src/tst/testScreen'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Trinity Room Booking App!</Text>
      <StatusBar style="auto" />
      <TestScreen/>
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
