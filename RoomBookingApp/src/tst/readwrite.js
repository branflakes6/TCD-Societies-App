import React, { useState, useEffect } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';

import { Read } from '../firebase/read'
import { Write } from '../firebase/write'

export function ReadWrite() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [entry, setEntry] = useState('')
    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const setupProps = () => {

        var propData = {
            text:entityText,
            email:'rowlanja@tcd.ie'
        }
        Write(propData)
    }

    const callRead = () => {

        var propData = {
            email:'rowlanja@tcd.ie',
            entities:entities
        }
        Read(propData)
    }

    return (
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder='Add new entity'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEntityText(text)}
                value={entityText}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={setupProps} >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
        { entities && (
            <View style={styles.listContainer}>
                <FlatList
                    data={entities}
                    renderItem={callRead()}
                    keyExtractor={(item) => item.id}
                    removeClippedSubviews={true}
                />
            </View>
        )}
    </View>
    )
}