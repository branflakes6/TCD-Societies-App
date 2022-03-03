import React, { useState,  } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button, ScrollView  } from 'react-native'
import styles from '../src/tst/styles.js';

import { readBooking } from '../src/firebase/read'
import { BookingTile } from '../src/components/bookingTile'



const About = ({ navigation }) => {
    const [emailRead, setEmailRead] = useState('')
    const [entities, setEntities] = useState([])
 
    function callRead() {
        var propData = {
            setEntities:setEntities,
            email:"dog@tcd.ie",
        }
        readBooking(propData)
    }
    const renderEntity = ({item, index}) => {
        return (
        <BookingTile props={item}/> 
        )

    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <Text style={styles.heading1}>Read Bookings from DB</Text>
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
    </ScrollView>
    )
};

export default About;