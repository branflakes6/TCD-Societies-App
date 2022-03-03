import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native'
import styles from '../tst/styles.js';
//import { Provider as PaperProvider } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph, Divider, Dialog, Portal, Provider } from 'react-native-paper'
import { readBooking } from '../firebase/read'


export function BookingTile(props) {
    
    const booking = props.props
    const LeftContent = props => <Avatar.Icon {...props} icon="calendar"/>
    const [visibleAp, setVisibleAp] = React.useState(false);
    const [visibleDen, setVisibleDen] = React.useState(false);

    const confirmApprove = () => setVisibleAp(!visibleAp);
    const confirmDeny = () => setVisibleDen(!visibleDen);

    return ( 
        <Provider>
        <View>
            <Card mode="outlined">
            <Card.Title title={booking.nameOfEvent} subtitle={booking.dateOfEvent} left={LeftContent}/>
            <Card.Content>
                <Title>Card title</Title>
                <Paragraph>{booking.eventDescription} {booking.startTime}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button mode="contained" color="#65db56" onPress={confirmApprove}>Aprove</Button>
                <Portal>
                <Dialog visible={visibleAp} onDismiss={confirmApprove}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                    <Paragraph>This is simple dialog</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={confirmApprove}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
                </Portal>
                <Button mode="contained" color="#c23838" onPress={confirmDeny}>Deny</Button>
                <Portal>
                <Dialog visible={visibleDen} onDismiss={confirmDeny}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                    <Paragraph>This is simple dialog</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={confirmDeny}>Done</Button>
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