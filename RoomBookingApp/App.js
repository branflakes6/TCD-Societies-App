import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';
import Formscreen from './components/Formscreen';
import Listscreen from './components/Listscreen';
import Userscreen from './components/Userscreen';
import LoginRegister from './components/LoginRegisterScreen';
import Eventscreen from './components/Eventscreen';
import { RegistrationScreen } from '../RoomBookingApp/src/tst/register'

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

  const[loggedIn, setLoggedIn]= useState()
  const[email, setEmail]= useState()
  const[verified, setVerified] = useState()
  
  function setLogIn(email){
    print('verified : ', verified)
  }

  return (
    
    <NavigationContainer>
      {verified ? 
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
          <Stack.Screen name="Events" component={Eventscreen} />
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
            {() => <LoginRegister setLoggedIn={setLogIn} setVerified={setVerified}/>} 
          </Stack.Screen>
          
        </Stack.Navigator>
        
      }
    </NavigationContainer>
  );
}