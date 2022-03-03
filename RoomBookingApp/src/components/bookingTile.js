import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Divider, Dialog, Portal, Provider, Subheading, Text } from 'react-native-paper'



export function BookingTile(props) {
    
    const booking = props.props
    const LeftContent = props => <Avatar.Icon {...props} icon="calendar"/>
    const [visibleAp, setVisibleAp] = React.useState(false);
    const [visibleDen, setVisibleDen] = React.useState(false);
    const [description, viewDescription] = React.useState(false)

    const [expanded, setExpanded] = React.useState(true);

    const confirmApprove = () => setVisibleAp(!visibleAp);
    const confirmDeny = () => setVisibleDen(!visibleDen);
    const showDescription = () => viewDescription(!description)

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
        console.log("Approved")
    }
    function denyBooking () {
        setVisibleAp(!visibleDen)
        console.log("Denied")
    }
    return ( 
        
        <Provider>
        <View>
            <Card mode="outlined" style={styles.card}>
            <Card.Title title={eventTitle} subtitle={eventTime} left={LeftContent}/>
            <Card.Content>
                <Title> Current Booking Status: {booking.status}</Title>
                <List.Section>
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
                        <List.Item title="Organiser Email" description={booking.email}/>
                        <List.Item title="Organiser Phone Number" description={booking.mobileNumber}/>
                    </List.Accordion>
                </List.Section>
            </Card.Content>
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
            </Card.Actions>
            </Card> 
            <Divider/>
    </View>
    </Provider>
    )
}