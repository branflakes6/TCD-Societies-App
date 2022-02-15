import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


import { RegistrationScreen } from './register'; 
import { LoginScreen } from './login';
import { ReadWrite } from './readwrite';

import { onRegisterPress, onFooterLinkPress } from '../firebase/register'
// onRegisterPress definition : onRegisterPress(email, fullName, password, confirmPassword)

export function TestScreen({navigation}) {
    
    return (
        <View style={styles.container}>
          <RegistrationScreen/>
          <br/>
          <LoginScreen/>
          <br/>
          <ReadWrite />
        </View>
    );
}