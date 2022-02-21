import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import styles from '../tst/styles.js';

import { readRoom } from '../firebase/read'
import { writeRoom } from '../firebase/write'
import { BookingTile } from '../components/bookingTile'

export function TestBooking() {
    
    const [roomID, setRoomID] = useState('')
    const [roomName, setRoomName] = useState('')
    const [roomBookStatus, setBookStatus] = useState('')
    const [entities, setEntities] = useState([])
 

    function callWrite() {
        var booking = {
            isVisible: false,
            nameOfEvent: "Test Event 1",
            dateOfEvent: "16-02-2022",
            organisingBody: "Geogsoc",
            organiserName: "Brian",
            mobileNumber: "00000001",
            tcdEmail: "dog"+"@tcd.ie",
            eventDescription: "eating apples",
            building: "Gym",
            room: "Swimming Pool"
        }
        var propData = {
            booking: booking
        }
        writeBooking(propData)
    }

    function callRead() {
        var propData = {
            setEntities:setEntities,
            email:emailRead,
        }
        readBooking(propData)
    }


    const renderEntity = ({item, index}) => {
        return (
        <BookingTile props={item}/> 
        )

    }

    return (
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <h2>Write a booking to the DB</h2>
            <TouchableOpacity style={styles.button} onPress={() => callWrite()} >
                <Text style={styles.buttonText}>Write Booking</Text>
            </TouchableOpacity>

            <h2>Read Bookings from DB</h2>
            <TextInput
                style={styles.input}
                placeholder='email'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmailRead(text)}
                value={emailRead}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={() => callRead()} >
                <Text style={styles.buttonText}>Read Bookings</Text>
            </TouchableOpacity>


            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    </View>
    )
}