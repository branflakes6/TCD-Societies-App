import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';
import Formscreen from './components/Formscreen';
import Listscreen from './components/Listscreen';
import Userscreen from './components/Userscreen';
import LoginScreen from './components/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Bookings" component={Aboutscreen} />
      <Drawer.Screen name="Form" component={Formscreen} />
      <Drawer.Screen name="Listings" component={Listscreen} />
      <Drawer.Screen name="User" component={Userscreen} />
    </Drawer.Navigator>
  );
}

export default function App() {

  const [loggedIn, setLoggedIn] = useState()
  const [email, setEmail] = useState()

  function setLogIn(email) {
    setLoggedIn(true)
    setEmail(email)
  }

  return (
    
    <NavigationContainer>
      {loggedIn ?
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
          }}
        >
          <Stack.Screen
            name="Welcome to the Trinity Room Book"
            component={root}
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator> :
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
          }}
        >
          <Stack.Screen
            name="Login"
            initialParams={{ setLoggedIn: loggedIn }}
          >
            {() => <LoginScreen setLoggedIn={setLogIn} />}
          </Stack.Screen>
        </Stack.Navigator>
        
      }
    </NavigationContainer>
  );
}
