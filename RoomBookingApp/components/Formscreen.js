import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { State, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles';

const Form = ({ navigation }) => {
    const [name, nameOfEvent] = React.useState('');
    const [date, dateOfEvent] = React.useState('');
    const [time, timeOfEvent] = React.useState('');
    const [orginiser, organisingBody] = React.useState('');
    const [number, mobileNumber] = React.useState('');
    const [emails, email] = React.useState('');


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome to Formscreen!
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>
                    Go to Homescreen
                </Text>

            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Name of Event"
                onChangeText={nameOfEvent}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={email}
                value={emails}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                onChangeText={mobileNumber}
                value={number}
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Event"
                onChangeText={dateOfEvent}
                value={date}
            />
            <TextInput
                style={styles.input}
                placeholder="Time of Event"
                onChangeText={timeOfEvent}
                value={time}
            />
            <TextInput
                style={styles.input}
                placeholder="Organising Body"
                onChangeText={organisingBody}
                value={orginiser}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log({
                    "Name of Event": name,
                    "Email": emails,
                    "Phone Number": number,
                    "Date of Event": date,
                    "Time of Event": time,
                    "Organising Body": orginiser
                    }
                ) & navigation.navigate("Home")}>
                <Text style={styles.buttonText}>
                    Request
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Form;