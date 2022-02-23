import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import styles from './styles.js';

import { readUser } from '../firebase/read'
import { writeUser } from '../firebase/write'
import { DeleteUser } from '../firebase/delete'
import { UpdateUser } from '../firebase/update'
import { BookingTile } from '../components/bookingTile'

export function TestUser() {
    
    const [roomID, setRoomID] = useState('')
    const [roomName, setRoomName] = useState('')
    const [roomBookStatus, setBookStatus] = useState('')
    const [entities, setEntities] = useState([])
 

    function callWrite() {
        var user = {
            email : "l@tcd.ie",
            fullName: "gg",
            id: "Lloyd"
        }
        var propData = {
            user: user
        }
        writeUser(propData)
    }

    function callRead() {
        var propData = {
            setEntities:setEntities,
            email:"G@tcd.ie",
        }
        readUser(propData)
    }

    function callDelete() {
        var propData = {
            setEntities:setEntities,
            email:"l@tcd.ie",
        }
        console.log('deleteing')
        DeleteUser(propData)
    }

    function callUpdate() {
        var propData = {
            setEntities:setEntities,
            email:"G@tcd.ie",
            Update:{
                fullName:"ff",
                id :"77"
            }
        }
        UpdateUser(propData)
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
                <Text style={styles.buttonText}>Write User</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => callRead()} >
                <Text style={styles.buttonText}>Read user</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => callDelete()} >
                <Text style={styles.buttonText}>delete user</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => callUpdate()} >
                <Text style={styles.buttonText}>Update user</Text>
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