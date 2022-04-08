import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
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

function menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Bookings" component={Aboutscreen} />
      <Drawer.Screen name="Form" component={Formscreen} />
      <Drawer.Screen name="Listings" component={Listscreen} />
      <Drawer.Screen name="User" component={Userscreen} />
      <Drawer.Screen name="Events" component={Eventscreen} />
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
              backgroundColor: '#fff',
            },
            headerTintColor: ' #000',
            headerTitleStyle: {
              fontWeight: 'bold',

            },
            headerShown: true,
            headerTitleAlign: 'center'
          }}>
          <Stack.Screen
            name="Welcome to the Trinity Room Book"
            component={menu}
            options={{ headerShown: false }}
          />
        </Stack.Navigator> : 
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
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