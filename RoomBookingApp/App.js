import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { RegistrationScreen } from './src/tst/register'; 
import { LoginScreen } from './src/tst/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Trinity Room Booking App!</Text>
      <StatusBar style="auto" />
      {/* <RegistrationScreen/> */}
      <LoginScreen/>
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
