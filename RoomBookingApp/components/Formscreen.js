
import React, { useState } from 'react';
import { View, Platform, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import styles from '../styles/formStyle';
import { TextInput, Text, DefaultTheme, Button, Provider as PaperProvider } from 'react-native-paper';

const Form = ({ navigation }) => {
    const [name, nameOfEvent] = React.useState('');
    const [date, dateOfEvent] = React.useState(new Date());
    const [eventTime, timeOfEvent] = React.useState('');
    const [orginiser, organisingBody] = React.useState('');
    const [orgName, orginiserName] = React.useState('');
    const [number, mobileNumber] = React.useState('');
    const [emails, email] = React.useState('');
    const [evntDesc, eventDescription] = React.useState('');
    const [roomN, room] = React.useState('');
    const [prepareFrom, prepFrom] = React.useState('');
    const [prepareTo, prepTo] = React.useState('');
    const [eventEnd, endTime] = React.useState('');
    const [participants, numParticipants] = React.useState('');
    const [staff, numStaff] = React.useState('');
    const [numGuest, guests] = React.useState('');
    const [equip, equipment] = React.useState('');
    const [stag, staging] = React.useState('');
    const [foods, food] = React.useState('');
    const [alcohols, alcohol] = React.useState('');
    const [catererServ, caterer] = React.useState('');
    const [pow, power] = React.useState('');
    const [otherFacilities, facilities] = React.useState('');
    const [others, other] = React.useState('');

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

    const confirmationAlert = () =>
        Alert.alert(
            "Do you want to submit the form?",
            "Make sure all the details are filled out correctly.",
            [
                {
                    text: "Go Back",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Continue", onPress: () => console.log("OK Pressed") & console.log({
                        "Name of Event": name,
                        "Email": emails,
                        "Phone Number": number,
                        "Date of Event": date,
                        "Time of Event": eventTime,
                        "Organising Body": orginiser,
                        "Organiser Name": orgName,
                        "Room of Event": roomN,
                        "Preparation From": prepareFrom,
                        "Preparation To": prepareTo,
                        "End Time": eventEnd,
                        "Number of Participants": participants,
                        "Number of Staff": staff,
                        "Number of Guests": numGuest,
                        "Equipment": equip,
                        "Staging": stag,
                        "Food": foods,
                        "Alcohol": alcohols,
                        "Caterer": catererServ,
                        "Power": pow,
                        "Facilities": otherFacilities,
                        "Others": others,
                        "Event Description": evntDesc
                    }) & navigation.navigate('Home')
                }
            ],
        );

    return (
        <PaperProvider>
            <ScrollView>
                <View style={styles.container}>
                    <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
                        <Text style={styles.headerText}>
                            Request a room here!
                        </Text>

                        {/* <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.buttonText}>
                            Go to Homescreen
                        </Text>

                    </Button> */}

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            label="Name of Event"
                            style={styles.input}
                            onChangeText={(text) => nameOfEvent(text)}
                            value={name}
                        />

                        <Button
                            style={styles.datetimeButton}
                            title="Date of Event"
                            onPress={showDatepicker}>
                            <Text
                                style={styles.buttonText}>
                                Date of Event
                            </Text>
                        </Button>
                        <Text style={styles.dateText}>Date of Event: {moment(date).format('DD-MM-YYYY')}</Text>

                        <Button
                            style={styles.datetimeButton}
                            title="Time of Event"
                            onPress={showTimepicker}
                            onChange={timeOfEvent}
                            color='#f4511e'>
                            <Text
                                style={styles.buttonText}>
                                Date of Event
                            </Text>
                        </Button>
                        <Text style={styles.dateText}>Time of Event: {eventTime}</Text>

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Email"
                            onChangeText={email}
                            value={emails}
                            keyboardType="email-address"
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Phone Number"
                            onChangeText={mobileNumber}
                            value={number}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Organising Body"
                            onChangeText={organisingBody}
                            value={orginiser}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Organiser Name"
                            onChangeText={orginiserName}
                            value={orgName}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Room of Event"
                            onChangeText={room}
                            value={roomN}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Preparation From"
                            onChangeText={prepFrom}
                            value={prepareFrom}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Preparation To"
                            onChangeText={prepTo}
                            value={prepareTo}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="End Time"
                            onChangeText={endTime}
                            value={eventEnd}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Number of Participants"
                            onChangeText={numParticipants}
                            value={participants}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Number of Staff"
                            onChangeText={numStaff}
                            value={staff}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Number of Guests"
                            onChangeText={guests}
                            value={numGuest}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Equipment"
                            onChangeText={equipment}
                            value={equip}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Staging"
                            onChangeText={staging}
                            value={stag}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Food"
                            onChangeText={food}
                            value={foods}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Alcohol"
                            onChangeText={alcohol}
                            value={alcohols}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Caterer"
                            onChangeText={caterer}
                            value={catererServ}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Power"
                            onChangeText={power}
                            value={pow}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Facilities"
                            onChangeText={facilities}
                            value={otherFacilities}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Others"
                            onChangeText={other}
                            value={others}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            multiline={true}
                            numberOfLines={5}
                            style={styles.input}
                            label="Event Description"
                            onChangeText={eventDescription}
                            value={evntDesc}
                        />

                        <Button
                            style={styles.button}
                            onPress={confirmationAlert}>
                            <Text style={styles.buttonText}>
                                Submit Request
                            </Text>
                        </Button>
                        {show && (
                            <DateTimePicker
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </KeyboardAwareScrollView>
                </View>
            </ScrollView>
        </PaperProvider>
    );
};

export default Form;
