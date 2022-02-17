import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import styles from './styles';

import { readBooking } from '../firebase/read'
import { writeBooking } from '../firebase/write'

export function TestBooking() {
    
    const [emailRead, setEmailRead] = useState('')
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
        var str = ""
        Object.keys(item).forEach(function(key){
            str += key + ": " + item[key] + "\n"
        }) 
        return (
            <View style={styles.entityContainer}>
            <Text style={styles.entityText}>
                    {index} . {str}
            </Text>
            </View>     
        )
    }

    return (
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <h2>Write a booking to the DB</h2>
            <TouchableOpacity style={styles.button} onPress={() => callWrite()} >
                <Text style={styles.buttonText}>Write Booking</Text>
            </TouchableOpacity>

            <h2>Read a booking</h2>
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
                <Text style={styles.buttonText}>Read Bookings from DB</Text>
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