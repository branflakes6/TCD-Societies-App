import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navigator from './components/header/drawer';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';
import Formscreen from './components/Formscreen';
import Listscreen from './components/Listscreen';
import Userscreen from './components/Userscreen';
import LoginScreen from './components/LoginScreen';

const Stack = createStackNavigator();

export default function App() {

  const[loggedIn, setLoggedIn]= useState()
  const[email, setEmail]= useState()
  
  function setLogIn(email){
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
          }}>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Bookings" component={Aboutscreen} />
          <Stack.Screen name="Form" component={Formscreen} />
          <Stack.Screen name="Listings" component={Listscreen} />
          <Stack.Screen name="User" component={Userscreen} />
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
          }}>
          <Stack.Screen 
            name="Login" 
            initialParams={{setLoggedIn: loggedIn}}  
          >
            {() => <LoginScreen setLoggedIn={setLogIn}/>} 
          </Stack.Screen>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
