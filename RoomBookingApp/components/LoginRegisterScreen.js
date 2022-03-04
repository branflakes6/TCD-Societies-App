import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity  } from 'react-native';
import styles from '../styles/styles';
import { firebase } from '../src/firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { onFooterLinkPress, onLoginPress } from '../src/firebase/login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginRegister = ({ navigation, setVerified }) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registering, setRegistering] = useState(false)
    const [logingIn, setLogingIn] = useState(false)

    const [fullName, setFullName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@email', value)
        } catch (e) {
          console.log(e)
        }
      }

    function login(email, password){
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User" + uid + " does not exist anymore.")
                            return;
                        }
                        console.log('user logged in')
                        const user = firestoreDocument.data()
                        setVerified(true)
                        storeData(user.email)
                        // navigation.navigate('Home', {user: user})
                        
                        
                    })
                    .catch(error => {
                        alert(error)
                    })
            })
            .catch(error => {
                alert(error)
            }) 
    }

   function register(email, fullName, password, confirmPassword){
        if (password !== confirmPassword) {
            console.log("Passwords don't match.")
            return
        }
        console.log('registering : ', email, password)
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .catch((error) => {
                        alert(error)
                    });
                setRegistering(false) 
            })
            .catch((error) => {
                alert(error)
        });

    }

    function startRegistration(){
        console.log('starting registration')
        setRegistering(true)
    }

    function startLogin(){
        console.log('starting login')
        setRegistering(false)
    }


    // function setVerifiedProp(){
    //     setVerified = true
    // }

    // function setProp(){
    //     console.log('logging in : ', email, password)
    //     var status = onLoginPress(email, password)
    //     console.log('recieved : ', status)
    //     setLoggedIn(email)
    // }

    return (
        <View>
        { !registering ? 
        <View>
            <Text style={styles.headerText}>
                Login
            </Text>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => login(email, password)}
                >
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? <Text onPress={startRegistration} style={styles.footerLink}>Sign up</Text></Text>
                </View>
        </View>
        : 
        <View>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="always">
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => register(email, fullName, password, confirmPassword)}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={startLogin} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    }
    </View>
    );
};

export default LoginRegister;
