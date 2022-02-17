import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import styles from '../tst/styles.js';

import { readBooking } from '../firebase/read'

export function BookingTile(props) {
    
    var str = ""
    const booking = props.props
    Object.keys(booking).forEach(function(key){
        str += key + ": " + booking[key] + "\n"
    }) 


    return (
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <h2> This is a booking </h2>
            <Text style={styles.entityText}>
                {str}
            </Text>
        </View>
    </View>
    )
}