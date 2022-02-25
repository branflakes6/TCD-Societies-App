import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const User = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to Your Profile!
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