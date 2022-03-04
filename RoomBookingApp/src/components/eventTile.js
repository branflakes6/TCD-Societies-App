import React, { useState } from 'react'
import { View, StyleSheet} from 'react-native'
import { List, Avatar, Button, Card, Title, Paragraph, Divider, Dialog, Portal, Provider, Subheading, Text, Switch } from 'react-native-paper'



export function EventTile(props) {
    
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const booking = props.props
    const LeftContent = props => <Avatar.Icon {...props} icon="calendar"/>
    const [description, viewDescription] = React.useState(false)

    const confirmApprove = () => setIsSwitchOn(true);
    const confirmDeny = () => setIsSwitchOn(false);

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
    return ( 
        
        <Provider>
        <View>
            <Card mode="outlined" style={styles.card}>
            <Card.Title title={eventTitle} subtitle={eventTime} left={LeftContent}/>
            <Card.Content>
                <List.Section>
                    <List.Accordion title="Event Details">
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
            </Card.Content>
            <Card.Actions>
                <Button mode="contained" color="#65db56" onPress={confirmApprove} style={styles.btn}>Going</Button>
                <Button mode="contained" color="#c23838" onPress={confirmDeny} style={styles.btn}>Not Going</Button>
                <Switch value={isSwitchOn} />
            </Card.Actions>
            </Card> 
            <Divider/>
    </View>
    </Provider>
    )
}