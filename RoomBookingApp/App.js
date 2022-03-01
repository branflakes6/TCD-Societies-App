import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navigator from './components/header/drawer';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';
import Formscreen from './components/Formscreen';
import Listscreen from './components/Listscreen';
import Userscreen from './components/Userscreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          headerShown: true,
          headerTitleAlign: 'center'
        }}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Bookings" component={Aboutscreen} />
        <Stack.Screen name="Form" component={Formscreen} />
        <Stack.Screen name="Listings" component={Listscreen} />
        <Stack.Screen name="User" component={Userscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}