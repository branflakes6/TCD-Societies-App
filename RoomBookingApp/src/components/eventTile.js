import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Divider, Dialog, Portal, Provider, Subheading, Text, Switch } from 'react-native-paper'
import { readEventsUser } from '../firebase/read';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {attendingEvent, notAttendingEvent} from '../firebase/update'


export function EventTile(props) {
    
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const event = props.props
    const LeftContent = props => <Avatar.Icon {...props} icon="calendar"/>
    const [description, viewDescription] = React.useState(false)
    const [expanded, setExpanded] = React.useState(true);
    const [userEmail, setUserEmail] = React.useState('');
    const handlePress = () => setExpanded(!expanded);
    const showDescription = () => viewDescription(!description)

    const eventTitle = event.nameOfEvent + " - " + event.organisingBody
    const persons = parseInt(event.numParticipants) + parseInt(event.numStaff) + parseInt(event.guests)
    const eventTime = event.dateOfEvent + " - " + event.timeOfEvent

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
            setUserEmail(email)
            callRead()
        }
        } catch(e) {
            console.log(e)
        }
    }

    function callRead() {
        // var propData = {
        //     setEntities:setEntities,
        //     email:email,
        // }
        //readEventsUser(propData)
    }

    function attending(){
        var propData = {
            event:event,
            email:userEmail
        }
        attendingEvent(propData)
    }
    function notAttending(){

        var propData = {
            event:event,
            email:userEmail
        }
        notAttendingEvent(propData)
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        card: {
            paddingHorizontal: 0
        },
        btn: {
            marginHorizontal: 4
        }
      });
    const renderEntity = ({item, index}) => {
        return (
        <View> 
            <List.Subheader> {index + 1} . {item}</List.Subheader>
        </View>
        )
    }
    return ( 
        
        <Provider>
        <View>
            <Card mode="outlined" style={styles.card}>
            <Card.Title title={eventTitle} subtitle={eventTime} left={LeftContent}/>
            <Card.Content>
                <List.Section>
                    <List.Accordion title="Event Details">
                        <List.Item title="Room" description={event.room} />
                        <List.Item title="Persons" description={persons}/>
                        <List.Item title="Food" description={event.food}/>
                        <List.Item title="Alcohol" description={event.alcohol}/>
                        <List.Item title="Caterer" description={event.caterer}/>
                        <List.Item title="Description" description={event.eventDescription} onPress={showDescription}/>
                        <Portal>
                        <Dialog visible={description} onDismiss={showDescription}>
                            <Dialog.Title>Description</Dialog.Title>
                            <Dialog.Content>
                            <Paragraph>{event.eventDescription}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                            <Button onPress={showDescription}>Close</Button>
                            </Dialog.Actions>
                        </Dialog>
                        </Portal>
                    </List.Accordion>
                </List.Section>
            </Card.Content>
            <Card.Actions>
                <Button mode="contained" color="#65db56" onPress={attending} style={styles.btn}>Going</Button>
                <Button mode="contained" color="#c23838" onPress={notAttending}style={styles.btn}>Not Going</Button>
            </Card.Actions>

            <List.Section>
            <List.Accordion
                title="Attendess"
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}
                >
                <FlatList 
                data={event.attendees}
                renderItem={renderEntity}
                />
            </List.Accordion>
            </List.Section>
            </Card> 
            <Divider/>
            
    </View>
    </Provider>
    )
}