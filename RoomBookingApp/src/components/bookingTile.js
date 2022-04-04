import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Divider, Dialog, Portal, Provider, Subheading, Text, IconButton, Colors, TextInput } from 'react-native-paper'
import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {UpdateBooking, closeBooking, sendFeedback} from '../firebase/update'
//import styles from '../components/bookingsStyle.js';

export function BookingTile(props) {

    const booking = props.props.item
    const [text, setText] = React.useState(booking.feedback);
    const LeftContent = props => <Avatar.Icon {...props} icon="calendar"/>
    const [visibleAp, setVisibleAp] = React.useState(false);
    const [visibleDen, setVisibleDen] = React.useState(false);
    const [visibleMeat, setVisibleMeat] = React.useState(false);
    const [visibleFeedback, setVisibleFeedback] = React.useState(false);
    const [visibleEvent, setVisibleEvent] = React.useState(false);
    const [description, viewDescription] = React.useState(false)
 
    const confirmApprove = () => setVisibleAp(!visibleAp);
    const confirmDeny = () => setVisibleDen(!visibleDen);
    const showDescription = () => viewDescription(!description)
    const confirmClose = () => setVisibleMeat(!visibleMeat)
    const confirmFeedback = () => setVisibleFeedback(!visibleFeedback)
    const confirmEvent = () => setVisibleEvent(!setVisibleEvent)

    const eventTitle = booking.nameOfEvent + " - " + booking.organisingBody
    const persons = parseInt(booking.numParticipants) + parseInt(booking.numStaff) + parseInt(booking.guests)
    const eventTime = booking.dateOfEvent + " - " + booking.timeOfEvent

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
    
    function approveBooking () {
        setVisibleAp(!visibleAp)
        var propData = {
            booking:booking,
            update:"Approved"
        }
        UpdateBooking(propData)
    }
    function denyBooking () {
        setVisibleDen(!visibleDen)
        var propData = {
            booking:booking,
            update:"Denied"
        }
        UpdateBooking(propData)
    }
    function cBooking () {
        setVisibleMeat(!visibleMeat)
        var propData = {
            booking:booking,
        }
        closeBooking(propData)
    }
    function cFeedback () {
        setVisibleFeedback(!visibleFeedback)
        var propData = {
            booking:booking,
            text:text
        }
        sendFeedback(propData)
    }
    function createNewEvent() {
        setVisibleEvent(!setVisibleEvent)
        var propData = {
            event:booking
        }
        createEvent(propData)
    }
    const renderAdmin = () => {
        if (props.props.userType == "admin") {
            return (
            <View>
            <Card.Actions>
                <Button mode="contained" color="#65db56" onPress={confirmApprove} style={styles.btn}>Aprove</Button>
                <Portal>
                <Dialog visible={visibleAp} onDismiss={confirmApprove}>
                    <Dialog.Title>Confirmation</Dialog.Title>
                    <Dialog.Content>
                    <Paragraph>Are you sure you want to confirm this booking?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={approveBooking}>Yes</Button>
                    <Button onPress={confirmApprove}>No</Button>
                    </Dialog.Actions>
                </Dialog>
                </Portal>
                <Button mode="contained" color="#c23838" onPress={confirmDeny} style={styles.btn}>Deny</Button>
                <Portal>
                <Dialog visible={visibleDen} onDismiss={confirmDeny}>
                    <Dialog.Title>Confirmation</Dialog.Title>
                    <Dialog.Content>
                    <Paragraph>Are you sure you want to deny this booking?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={denyBooking}>Yes</Button>
                    <Button onPress={confirmDeny}>No</Button>
                    </Dialog.Actions>
                </Dialog>
                </Portal>
                <IconButton 
                    icon="dots-horizontal"
                    size={20}
                    onPress={confirmClose}
                    >
                </IconButton>
                <Portal>
                <Dialog visible={visibleMeat} onDismiss={confirmClose}>
                    <Dialog.Title>Remove Booking</Dialog.Title>
                    <Dialog.Content>
                    <Paragraph>Do you want to remove this booking?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={cBooking}>Yes</Button>
                    <Button onPress={confirmClose}>No</Button>
                    </Dialog.Actions>
                </Dialog>
                </Portal>
            </Card.Actions>
            <TextInput
            label="Fedback"
            value={text}
            onChangeText={text => setText(text)}
            multiline={true}
            numberOfLines={4}
            />
            <Button mode="contained" color="#c23838" onPress={confirmFeedback} style={styles.btn}>update</Button>
                <Portal>
                <Dialog visible={visibleFeedback} onDismiss={confirmFeedback}>
                    <Dialog.Title>Confirmation</Dialog.Title>
                    <Dialog.Content>
                    <Paragraph>Update Feedback?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={cFeedback}>Yes</Button>
                    <Button onPress={confirmFeedback}>No</Button>
                    </Dialog.Actions>
                </Dialog>
                </Portal>
            </View>
            )
        }
        else{
            if (booking.status == "Approved"){
                return (
                    <View>
                    <TextInput
                        label="Fedback"
                        value={text}
                        onChangeText={text => setText(text)}
                        multiline={true}
                        numberOfLines={4}
                        editable={false}
                        />
                    <Button mode="contained" color="#c23838" onPress={confirmEvent} style={styles.btn}>Create Event</Button>
                    <Portal>
                    <Dialog visible={visibleEvent} onDismiss={confirmEvent}>
                        <Dialog.Title>Confirmation</Dialog.Title>
                        <Dialog.Content>
                        <Paragraph>Create Event?</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={createNewEvent}>Yes</Button>
                        <Button onPress={confirmEvent}>No</Button>
                        </Dialog.Actions>
                    </Dialog>
                    </Portal>
                    </View>
                )
            }
            else{
                return (
                    <View>
                    <TextInput
                        label="Fedback"
                        value={text}
                        onChangeText={text => setText(text)}
                        multiline={true}
                        numberOfLines={4}
                        editable={false}
                        />
                    </View>
                )
            }

        }
    }
    return ( 
        <Provider>
        <View>
            <Card mode="outlined">
            <Card.Title title={eventTitle} subtitle={eventTime} left={LeftContent}/>
            <Card.Content>
                <Title> Current Booing Staus: {booking.status}</Title>
                <List.Section >
                    <List.Accordion title="Booking Details">
                        <List.Item title="Room" description={booking.room} />
                        <List.Item title="Persons" description={persons}/>
                        <List.Item title="Food" description={booking.food}/>
                        <List.Item title="Alcohol" description={booking.alcohol}/>
                        <List.Item title="Caterer" description={booking.caterer}/>
                        <List.Item title="Description" description={booking.eventDescription} onPress={showDescription}/>
                        <Portal>
                        <Dialog visible={description} onDismiss={showDescription}>
                            <Dialog.Title>Description</Dialog.Title>
                            <Dialog.Content>
                            <Paragraph>{booking.eventDescription}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                            <Button onPress={showDescription}>Close</Button>
                            </Dialog.Actions>
                        </Dialog>
                        </Portal>
                    </List.Accordion>
                </List.Section>
                <List.Section>
                    <List.Accordion title="Contact Details">
                        <List.Item title="Organiser Name" description={booking.orginiserName}/>
                        <List.Item title="Organiser Email" description={booking.tcdEmail}/>
                        <List.Item title="Organiser Phone Number" description={booking.mobileNumber}/>
                    </List.Accordion>
                </List.Section>
            </Card.Content>
            {renderAdmin()}
            </Card> 
            <Divider/>
    </View>
    </Provider>
    )
}