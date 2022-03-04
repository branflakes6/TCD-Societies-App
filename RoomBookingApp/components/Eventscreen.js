import React, { useState,  useEffect} from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button, ScrollView  } from 'react-native'
import styles from '../src/tst/styles.js';

import { readEvents } from '../src/firebase/read'
import { EventTile } from '../src/components/eventTile'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Event = ({ navigation }) => {
    const [entities, setEntities] = useState([])
    var email = ""
    const onScreenLoad = () => {
        getData()
    } 
    useEffect(() => {
        onScreenLoad();
    }, [])

    
    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('@email')
        if(value !== null) {
            email = value
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
        }
        readEvents(propData)
    }
    const renderEntity = ({item, index}) => {
        

        return (
        <View>
            <EventTile props={item}/> 
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

export default Event;