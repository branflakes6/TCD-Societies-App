import React, { useState,  useEffect} from 'react'
import { FlatList, Text, View, ScrollView  } from 'react-native'
import { Card, Button, Title, Paragraph, IconButton, Colors,Provider, Portal, RadioButton, Dialog } from 'react-native-paper';
import styles from '../src/tst/styles.js';

import { readEvents } from '../src/firebase/read'
import { EventTile } from '../src/components/eventTile'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Event = ({ navigation }) => {
    const [entities, setEntities] = useState([])
    const [modeMenu, viewModeMenu] = React.useState(false)
    const [userEmail, setUserEmail] = React.useState('');
    const confirmApprove = () => viewModeMenu(!modeMenu);

    const [mode, setMode] = React.useState('All');

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
            setUserEmail(email)
            callRead()
        }
        } catch(e) {
            console.log(e)
        }
    }

    function callRead() {
        var propData = {
            setEntities:setEntities,
            email:userEmail,
            mode:mode
        }
        readEvents(propData)
    }
    function updateEvents(){
        viewModeMenu(!modeMenu)
        callRead()
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
        <Provider>
        <ScrollView>
        <View style={styles.container}>
        <Card>
            <Card.Content>
                <Title>Sort By 
                    <IconButton
                    icon="arrow-down-drop-circle"
                    size={20}
                    onPress={confirmApprove}
                    />
                    <Portal>
                    <Dialog visible={modeMenu} onDismiss={confirmApprove}>
                        <Dialog.Title>View</Dialog.Title>
                        <Dialog.Content>
                        <RadioButton.Group onValueChange={newMode => setMode(newMode)} value={mode}>
                        <View>
                            <Text>All Events</Text>
                            <RadioButton value="All" />
                        </View>
                        <View>
                            <Text>Events Attending</Text>
                            <RadioButton value="Attendee" />
                        </View>
                        <View>
                            <Text>Events Running</Text>
                            <RadioButton value="Owner" />
                        </View>
                        </RadioButton.Group>  
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={updateEvents}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                    </Portal>
                </Title>
                
                
            </Card.Content>
        </Card>
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
    </Provider>
    )
};

export default Event;