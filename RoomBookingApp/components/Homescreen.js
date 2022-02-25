import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';
import logo from './images/Logo.png';


const Home = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to the Trinity Room Book!
            </Text>
            <img src={logo} alt="logo" />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Form")}>
                <Text style={styles.buttonText}>
                    Request a Room
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Bookings")}>
                <Text style={styles.buttonText}>
                    View My Bookings
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Listings")}>
                <Text style={styles.buttonText}>
                    View Available Listings
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("User")}>
                <Text style={styles.buttonText}>
                    My Profile
                </Text>

            </TouchableOpacity>
        </View>
    );
};

export default Home;