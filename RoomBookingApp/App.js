import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';
import Formscreen from './components/Formscreen';

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
        <Stack.Screen name="About" component={Aboutscreen} />
        <Stack.Screen name="Form" component={Formscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}