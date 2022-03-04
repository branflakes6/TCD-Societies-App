import React, { useState,  useEffect} from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button, ScrollView  } from 'react-native'
import styles from '../src/tst/styles.js';

import { readBooking } from '../src/firebase/read'
import { BookingTile } from '../src/components/bookingTile'



const About = ({ navigation }) => {
    const [emailRead, setEmailRead] = useState('')
    const [entities, setEntities] = useState([])

    const onScreenLoad = () => {
        callRead()
    } 
    useEffect(() => {
        // write your code here, it's like componentWillMount
        onScreenLoad();
    }, [])

    function callRead() {
        var propData = {
            setEntities:setEntities,
            email:"dog@tcd.ie",
        }
        readBooking(propData)
    }
    const renderEntity = ({item, index}) => {
        return (
        <View>
            <BookingTile props={item}/> 
            <Text>{"\n"}</Text>
        </View>
        )

    }

    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.formContainer}>
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