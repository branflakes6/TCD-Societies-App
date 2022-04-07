import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Navigator from './components/header/drawer';

import Homescreen from './components/Homescreen';
import Aboutscreen from './components/Aboutscreen';
import Formscreen from './components/Formscreen';
import Listscreen from './components/Listscreen';
import Userscreen from './components/Userscreen';
import LoginRegister from './components/LoginRegisterScreen';
import Eventscreen from './components/Eventscreen';
import { TestRoom } from '../RoomBookingApp/src/tst/testRoom'
import { RegistrationScreen } from '../RoomBookingApp/src/tst/register'

const Stack = createStackNavigator();

export default function App() {

  const[loggedIn, setLoggedIn]= useState()
  const[email, setEmail]= useState()
  const[verified, setVerified] = useState()
  
  function setLogIn(email){
    // setLoggedIn(true)
    // setEmail(email)
    print('verified : ', verified)
  }

  return (
    <NavigationContainer>
     <TestRoom/>
    </NavigationContainer>
  );
}
