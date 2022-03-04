import React, { useState,  } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

//import { readUser } from '../src/firebase/read'

const User = ({ navigation }) => {

    // const [entities, setEntities] = useState([])
 
    // var propData = {
    //     setEntities:setEntities,
    //     email:"james55@tcd.ie",
    // }

    // readUser(propData)
    // console.log(entities)

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to Your Profile!
            </Text>
            <Text style={styles.infoText}>
                Full name: gg
            </Text>
            <Text style={styles.infoText}>
                Email: james55@tcd.ie
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>
                    Go to Homescreen
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default User;