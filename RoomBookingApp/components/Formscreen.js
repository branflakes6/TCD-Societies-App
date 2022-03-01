
import React, { useState } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { State, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import styles from '../styles/styles';

const Form = ({navigation }) => {
    const [name, nameOfEvent] = React.useState('');
    const [date, dateOfEvent] = React.useState(new Date());
    const [time, timeOfEvent] = React.useState('');
    const [orginiser, organisingBody] = React.useState('');
    const [number, mobileNumber] = React.useState('');
    const [emails, email] = React.useState('');

    const [mode, setMode] = React.useState('');
    const [show, setShow] = React.useState(false);
    

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(Platform.OS === 'ios');
        dateOfEvent(currentDate);
        timeOfEvent(moment(currentDate).format('HH:mm'));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

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
                onChangeText={(text) => nameOfEvent(text)}
                value={name}
            />
            <View style={styles.datetimeButton}>
                <Button title="Date of Event" onPress={showDatepicker} color='#f4511e'/>
                <Button title="Time of Event" onPress={showTimepicker} onChange={timeOfEvent} color='#f4511e'/> 
            </View>
            

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
            {show && (
                <DateTimePicker
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default Form;
