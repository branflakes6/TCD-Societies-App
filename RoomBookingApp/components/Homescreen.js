import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to Homescreen!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("About")}>
                <Text style={styles.buttonText}>
                    Go to Aboutscreen
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Form")}>
                <Text style={styles.buttonText}>
                    Go to Formscreen
                </Text>

            </TouchableOpacity>
        </View>
    );
};

export default Home;