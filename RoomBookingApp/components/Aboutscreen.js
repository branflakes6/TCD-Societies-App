import React, { useState,  useEffect} from 'react'
import { FlatList, Text, View, ScrollView  } from 'react-native'
import styles from '../src/tst/styles.js';

import { readAllBookings, readBooking } from '../src/firebase/read'
import { BookingTile } from '../src/components/bookingTile'
import AsyncStorage from '@react-native-async-storage/async-storage';


const About = ({ navigation }) => {
    const [entities, setEntities] = useState([])
    const [userType, setUserType] = React.useState('');
    var email = ""
    var userT= ""
    const onScreenLoad = () => {
        getData()
    } 
    useEffect(() => {
        onScreenLoad();
    }, [])

    
    const getData = async () => {
        try {
        userT = await AsyncStorage.getItem('@userType')
        const value = await AsyncStorage.getItem('@email')
        if(value !== null) {
            email = value
            setUserType(userT)
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
            userType:userT
        }
        readBooking(propData)
    }
    const renderEntity = ({item, index}) => {
        var propData = {
            item:item,
            userType:userType
        }
        return (
        <View>
            <BookingTile props={propData}/> 
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

export default Bookings;