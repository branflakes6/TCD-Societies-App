import React, { useState } from 'react';
import { View, Platform, ScrollView, Alert, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { State, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Text, Button, List, Provider as PaperProvider } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';
import styles from '../styles/formStyle';
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
    const [shouldShow, setShouldShow] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);

    const foodToggleSwitch = () => {
        if (isEnabled1) {
            food("No");
        } else {
            food("Yes");
        }
        setIsEnabled1(previousState => !previousState);
    };

    const alcoholToggleSwitch = () => {
        if (isEnabled2) {
            alcohol("No");
        } else {
            alcohol("Yes");
        }
        setIsEnabled2(previousState => !previousState);
    };

    const powerToggleSwitch = () => {
        if (isEnabled3) {
            power("No");
        } else {
            power("Yes");
        }
        setIsEnabled3(previousState => !previousState);
    };

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

        emailjs.send('service_c8eqpwr', 'template_waahbmx', templateParams, 'user_PX5dMk1psBpqZh1IpmXwY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <PaperProvider>
            <ScrollView>
                <View style={styles.container}>
                    <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
                        <Text style={styles.headerText}>
                            Request a room here!
                        </Text>

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
                            title="Event Start Time"
                            onPress={showTimepicker}
                            onChange={timeOfEvent}
                            color='#0569b9'>
                            <Text
                                style={styles.buttonText}>
                                Time of Event
                            </Text>
                        </Button>
                        <Text style={styles.dateText}>Time of Event: {eventTime}</Text>

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Name of Organising School/Dept/Club/Society"
                            onChangeText={organisingBody}
                            value={orginiser}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Event Organiser Name"
                            onChangeText={orginiserName}
                            value={orgName}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Email Address"
                            onChangeText={tcdEmail}
                            value={emails}
                            keyboardType="email-address"
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Phone Number (mobile)"
                            onChangeText={mobileNumber}
                            value={number}
                            keyboardType="phone-pad"
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

                        <Picker
                            mode='dropdown'
                            style={styles.picker}
                            selectedValue={roomN}
                            onValueChange={(itemValue) => room(itemValue)}
                        >
                            <Picker.Item label="Location of Event (Please Select)" value="" />
                            <Picker.Item label="191 Pearse Street - House 6" value="191 Pearse Street" />
                            <Picker.Item label="Anexa - Lloyd Institute" value="Anexa" />
                            <Picker.Item label="AV Room - The Atrium, Room 3" value="AV Room" />
                            <Picker.Item label="Computer Room - GMB" value="Computer Room" />
                            <Picker.Item label="Conversation Room - The Atrium, Room 4" value="Conversation Room" />
                            <Picker.Item label="Debating Chember - GMB" value="Debating Chember" />
                            <Picker.Item label="Eliz Room - House 6" value="Eliz Room" />
                            <Picker.Item label="Goldsmith Hall - Goldsmith" value="Goldsmith Hall" />
                            <Picker.Item label="Hist Conversation Room - GMB" value="Hist Conversation Room" />
                            <Picker.Item label="Hist Rec Room - GMB" value="Hist Rec Room" />
                            <Picker.Item label="Lab 3 - Lloyd Institute" value="Lab 3" />
                            <Picker.Item label="Phil Conversation Room - GMB" value="Phil Conversation Room" />
                            <Picker.Item label="Resource Room - GMB" value="Resource Room" />
                            <Picker.Item label="The Atrium Room 50 - GMB" value="The Atrium Room 50" />
                            <Picker.Item label="Workshop & Commitee Room - The Atrium, Room 2" value="Workshop and Commitee Room" />
                            <Picker.Item label="Zoom Room One - CSC Zoom Room" value="Zoom Room One" />
                            <Picker.Item label="Zoom Room Three - CSC Zoom Room" value="Zoom Room Three" />
                            <Picker.Item label="Zoom Room Two - CSC Zoom Room" value="Zoom Room Two" />
                        </Picker>

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
                            label="Number of Event Staff"
                            onChangeText={numStaff}
                            value={staff}
                            keyboardType="phone-pad"
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Preparation Time From"
                            onChangeText={prepFrom}
                            value={prepareFrom}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Preparation Time To"
                            onChangeText={prepTo}
                            value={prepareTo}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Event End Time"
                            onChangeText={endTime}
                            value={eventEnd}
                        />

                        <TextInput
                            activeOutlineColor='#0569b9'
                            selectionColor='#000'
                            mode="outlined"
                            style={styles.input}
                            label="Please List any Special Guests or VIPs"
                            onChangeText={guests}
                            value={numGuest}
                            keyboardType="phone-pad"
                        />

                        <Button
                            style={styles.advanceButton}
                            title="Hide/Show Component"
                            color='#0569b9'
                            activeOpacity={0.1}
                            onPress={() => setShouldShow(!shouldShow)}>
                            <Text
                                style={styles.advanceButtonText}>
                                Advance Options
                            </Text>
                        </Button>
                        {shouldShow ? (
                            <>
                                <Text style={styles.text}>Is food being served?</Text>
                                <Switch
                                    style={styles.switch}
                                    trackColor={{ false: '#767577', true: '#0569b9' }}
                                    thumbColor={isEnabled1 ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={foodToggleSwitch}
                                    value={isEnabled1}>
                                </Switch>
                                {isEnabled1 ? (
                                    <>
                                        <TextInput
                                            activeOutlineColor='#0569b9'
                                            selectionColor='#000'
                                            mode="outlined"
                                            style={styles.input}
                                            label="Are you using external caters? If so, please provide the name of the caterer"
                                            onChangeText={caterer}
                                            value={catererServ}
                                        />
                                    </>
                                ) : null}

                                <Text style={styles.text}>Is alcohol being served?</Text>
                                <Switch
                                    style={styles.switch}
                                    trackColor={{ false: '#767577', true: '#0569b9' }}
                                    thumbColor={isEnabled2 ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={alcoholToggleSwitch}
                                    value={isEnabled2}>
                                </Switch>

                                <Text style={styles.text}>Do you require a power source/sockets in the room?</Text>
                                <Switch
                                    style={styles.switch}
                                    trackColor={{ false: '#767577', true: '#0569b9' }}
                                    thumbColor={isEnabled3 ? '#f4f3f4' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={powerToggleSwitch}
                                    value={isEnabled3}>
                                </Switch>

                                <TextInput
                                    activeOutlineColor='#0569b9'
                                    selectionColor='#000'
                                    mode="outlined"
                                    style={styles.input}
                                    label="Any Equipment being used at the event?"
                                    onChangeText={equipment}
                                    value={equip}
                                />

                                <TextInput
                                    activeOutlineColor='#0569b9'
                                    selectionColor='#000'
                                    mode="outlined"
                                    style={styles.input}
                                    label="Any staging or room setup required?"
                                    onChangeText={staging}
                                    value={stag}
                                />

                                <TextInput
                                    activeOutlineColor='#0569b9'
                                    selectionColor='#000'
                                    mode="outlined"
                                    style={styles.input}
                                    label="Any Accesibility Requirements? (E.g. Wheelchair Access)"
                                    onChangeText={facilities}
                                    value={otherFacilities}
                                />

                                <TextInput
                                    activeOutlineColor='#0569b9'
                                    selectionColor='#000'
                                    mode="outlined"
                                    style={styles.input}
                                    label="Other Misc. Requirements"
                                    onChangeText={other}
                                    value={others}
                                />
                            </>
                        ) : null}


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
