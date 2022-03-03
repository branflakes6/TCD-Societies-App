import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from '../tst/styles.js';
//import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { readBooking } from '../firebase/read'

export function BookingTile(props) {
    
    var str = ""
    const booking = props.props
    console.log(booking)
    Object.keys(booking).forEach(function(key){
        str += key + ": " + booking[key] + "\n"
    }) 


    return ( 
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <Card>
            <Card.Title title={booking.nameOfEvent} subtitle={booking.dateOfEvent}/>
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>{booking.eventDescription}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Aprove</Button>
                <Button>Deny</Button>
            </Card.Actions>
            </Card>
        </View>
    </View>
    )
}