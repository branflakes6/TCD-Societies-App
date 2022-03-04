
import React, { useState } from 'react';
import { View, Button, Platform, Text, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { State, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import styles from '../styles/styles';
import emailjs from 'emailjs-com';
import { writeBooking } from '../src/firebase/write';

const Form = ({ navigation }) => {
    const [name, nameOfEvent] = React.useState('');
    const [date, dateOfEvent] = React.useState(new Date());
    const [eventTime, timeOfEvent] = React.useState('');
    const [orginiser, organisingBody] = React.useState('');
    const [orgName, orginiserName] = React.useState('');
    const [number, mobileNumber] = React.useState('');
    const [emails, tcdEmail] = React.useState('');
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

    const sendBooking = () => {
        var booking = {
            nameOfEvent: name,
            dateOfEvent: date,
            timeOfEvent: eventTime,
            organisingBody: orginiser,
            orginiserName: orgName,
            mobileNumber: number,
            tcdEmail: emails,
            eventDescription: evntDesc,
            room: roomN,
            prepFrom: prepareFrom,
            prepTo: prepareTo,
            endTime: eventEnd,
            numParticipants: participants,
            numStaff: staff,
            guests: numGuest,
            equipment: equip,
            staging: stag,
            food: foods,
            alcohol: alcohols,
            caterer: catererServ,
            power: pow,
            facilities: otherFacilities,
            others: others
        }
        var propData = {
            booking: booking
        }
        writeBooking(propData)
    }

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
                    text: "Continue", onPress: () =>
                        sendBooking() &
                        sendEmail() &
                        console.log({
                            "Name of Event": name,
                            "Organiser Email": emails,
                            "Organiser Phone Number": number,
                            "Date of Event": date,
                            "Time of Event": eventTime,
                            "Organising Body": orginiser,
                            "Organiser Name": orgName,
                            "Venue/Room of Event": roomN,
                            "Preparation Time From": prepareFrom,
                            "Preparation Time Until": prepareTo,
                            "End Time": eventEnd,
                            "Number of Participants": participants,
                            "Number of Staff": staff,
                            "Number of Guests": numGuest,
                            "Equipment Being Brought?": equip,
                            "Staging/Set Up Required?": stag,
                            "Food at Event?": foods,
                            "Alcohol at Event?": alcohols,
                            "Caterer at Event?": catererServ,
                            "Power Source Required?": pow,
                            "Room Facilities Required?": otherFacilities,
                            "Other Requirements?": others,
                            "Event Description": evntDesc
                        }) & navigation.navigate('Home')
                }
            ],
        );

        const sendEmail = async () => {
            console.log("ARRIVED AT SEND EMAIL!!!!")
        
            let templateParams = {
                //from_name: process.env.REACT_APP_EMAILJS_SENDER,
                //to_name: this.tcdEmail,
                nameOfEvent: name,
                dateOfEvent: date,
                timeOfEvent: eventTime,
                organisingBody: orginiser,
                orginiserName: orgName,
                mobileNumber: number,
                tcdEmail: emails,
                eventDescription: evntDesc,
                room: roomN,
                prepFrom: prepareFrom,
                prepTo: prepareTo,
                endTime: eventEnd,
                numParticipants: participants,
                numStaff: staff,
                guests: numGuest,
                equipment: equip,
                staging: stag,
                food: foods,
                alcohol: alcohols,
                caterer: catererServ,
                power: pow,
                facilities: otherFacilities,
                others: others
            }
        
            emailjs.send('service_c8eqpwr','template_waahbmx', templateParams,'user_PX5dMk1psBpqZh1IpmXwY')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
        }
        

    return (
        <ScrollView>
            <View style={styles.container}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
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
                        placeholder="Name of Event?"
                        onChangeText={(text) => nameOfEvent(text)}
                        value={name}
                    />

                    <View style={styles.datetimeButton}>
                        <Button style={styles.datetimeButton} title="Date of Event?" onPress={showDatepicker} color='#f4511e' />
                        <Text style={styles.dateText}>Date of Event: {moment(date).format('DD-MM-YYYY')}</Text>
                        <Button style={styles.datetimeButton} title="Time of Event?" onPress={showTimepicker} onChange={timeOfEvent} color='#f4511e' />
                        <Text style={styles.dateText}>Time of Event: {eventTime}</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Preparation Time From?"
                        onChangeText={prepFrom}
                        value={prepareFrom}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Preparation Time Until?"
                        onChangeText={prepTo}
                        value={prepareTo}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Event End Time?"
                        onChangeText={endTime}
                        value={eventEnd}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Organising Body?"
                        onChangeText={organisingBody}
                        value={orginiser}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Lead Organiser Name?"
                        onChangeText={orginiserName}
                        value={orgName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Organiser Email?"
                        onChangeText={tcdEmail}
                        value={emails}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Organiser Phone Number?"
                        onChangeText={mobileNumber}
                        value={number}
                        keyboardType="phone-pad"
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Room/Venue of Event?"
                        onChangeText={room}
                        value={roomN}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Number of Participants?"
                        onChangeText={numParticipants}
                        value={participants}
                        keyboardType="phone-pad"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Number of Staff?"
                        onChangeText={numStaff}
                        value={staff}
                        keyboardType="phone-pad"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="List of Guests/VIPs"
                        onChangeText={guests}
                        value={numGuest}
                        keyboardType="phone-pad"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Equipment Being Brought?"
                        onChangeText={equipment}
                        value={equip}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Staging/Set-Up Required?"
                        onChangeText={staging}
                        value={stag}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Food at Event?"
                        onChangeText={food}
                        value={foods}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Alcohol at Event?"
                        onChangeText={alcohol}
                        value={alcohols}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Caterer at Event?"
                        onChangeText={caterer}
                        value={catererServ}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Power Source Required?"
                        onChangeText={power}
                        value={pow}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Room Facilities Needed?"
                        onChangeText={facilities}
                        value={otherFacilities}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Other Requirements?"
                        onChangeText={other}
                        value={others}
                    />

                    <TextInput
                        multiline={true}
                        numberOfLines={5}
                        style={styles.input}
                        placeholder="Event Description"
                        onChangeText={eventDescription}
                        value={evntDesc}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={confirmationAlert}>
                        <Text style={styles.buttonText}>
                            Submit Request
                        </Text>
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            minimumDate={new Date()}
                        />
                    )}
                </KeyboardAwareScrollView>
            </View>
        </ScrollView>
    );
};

export default Form;
