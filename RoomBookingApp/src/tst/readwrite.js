import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import styles from './styles';

import { Read } from '../firebase/read'
import { Write } from '../firebase/write'

export function ReadWrite() {
    

    const [entityText, setEntityText] = useState('')
    const [emailRead, setEmailRead] = useState('')
    const [emailWrite, setEmailWrite] = useState('')
    const [entities, setEntities] = useState([])
 
    function callWrite() {
        var propData = {
            text:entityText,
            email: emailWrite
        }
        Write(propData)
    }

    function callRead() {
        var propData = {
            setEntities:setEntities,
            email:emailRead,
        }
        Read(propData)
    }

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <h2>Read Function</h2>
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
                <Text style={styles.buttonText}>Read</Text>
            </TouchableOpacity>
            <h2>Write Function</h2>
            <TextInput
                style={styles.input}
                placeholder='message'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEntityText(text)}
                value={entityText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='email'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmailWrite(text)}
                value={emailWrite}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={() => callWrite()} >
                <Text style={styles.buttonText}>Write</Text>
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