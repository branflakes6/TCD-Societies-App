import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

import { onFooterLinkPress, onLoginPress } from '../firebase/login'
import { Read } from '../firebase/read'
import { Write } from '../firebase/write'

export function LoginScreen() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [entry, setEntry] = useState('')

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
            <TouchableOpacity style={styles.button} onPress={Write(entry, email)}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
        { entities && (
            <View style={styles.listContainer}>
                <FlatList
                    data={entities}
                    renderItem={Read}
                    keyExtractor={(item) => item.id}
                    removeClippedSubviews={true}
                />
            </View>
        )}
    </View>
    )
}