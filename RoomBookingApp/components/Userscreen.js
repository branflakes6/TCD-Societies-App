import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User = ({ navigation }) => {

    const [em, setEms] = useState('')
    var email = ""
    const onScreenLoad = () => {
        getData()
    } 
    useEffect(() => {
        onScreenLoad();
    }, [])

    
    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('@email')
        if(value !== null) {
            setEms(value)
        }
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to Your Profile!
            </Text>
            <Text style={styles.infoText}>
                Email: {em}
            </Text>
        </View>
    );
};

export default User;