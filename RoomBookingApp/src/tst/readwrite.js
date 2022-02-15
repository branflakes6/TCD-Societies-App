import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';

import { Read } from '../firebase/read'
import { Write } from '../firebase/write'

export function ReadWrite() {
    

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
            setEntities:setEntities
        }
        Read(propData)
    }

    const renderEntity = ({item, index}) => {
        console.log('rendering : ', entities)
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
            <TouchableOpacity style={styles.button} onPress={callRead()} >
                <Text style={styles.buttonText}>Read</Text>
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