import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import styles from '../tst/styles.js';

import { readRoom } from '../firebase/read'
import { writeRoom } from '../firebase/write'
import { BookingTile } from '../components/bookingTile'

export function TestRoom() {
    
    const [roomID, setRoomID] = useState('')
    const [roomName, setRoomName] = useState('')
    const [roomBookStatus, setBookStatus] = useState('')
    const [entities, setEntities] = useState([])
 

    function callWrite() {
        var room = {
            Name : "Anex",
            Capacity: "50",
            Building: "Lloyd Institute",
            Projector : "True",
            Speakers : "True",
            Board: "False",
            FoodAndDrink: "True",
            // Images = [], 
            Booked : "False"
        }
        var propData = {
            room: room
        }
        writeRoom(propData)
    }

    function callRead() {
        var propData = {
            setEntities:setEntities,
            roomID:"Anex",
        }
        readRoom(propData)
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
                <Text style={styles.buttonText}>Write Room</Text>
            </TouchableOpacity>

            <h2>Read Bookings from DB</h2>
            <TextInput
                style={styles.input}
                placeholder='room'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setRoomID(text)}
                value={roomID}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={() => callRead()} >
                <Text style={styles.buttonText}>Read A Room</Text>
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