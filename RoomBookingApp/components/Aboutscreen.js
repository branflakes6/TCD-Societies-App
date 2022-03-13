import React, { useState,  useEffect} from 'react'
import { FlatList, Text, View, ScrollView  } from 'react-native'
import styles from '../src/tst/styles.js';

import { readAllBookings, readBooking } from '../src/firebase/read'
import { BookingTile } from '../src/components/bookingTile'
import AsyncStorage from '@react-native-async-storage/async-storage';


const About = ({ navigation }) => {
    const [entities, setEntities] = useState([])
    var email = ""
    var userType = ""
    const onScreenLoad = () => {
        getData()
    } 
    useEffect(() => {
        onScreenLoad();
    }, [])

    
    const getData = async () => {
        try {
        const userT = await AsyncStorage.getItem('@userType')
        const value = await AsyncStorage.getItem('@email')
        if(value !== null) {
            email = value
            userType = userT
            callRead()
        }
        } catch(e) {
            console.log(e)
        }
    }

    function callRead() {
        var propData = {
            setEntities:setEntities,
            email:email,
            userType:userType
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