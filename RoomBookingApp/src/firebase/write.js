import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

export function Write(props) {
    
    // payload is the JSON object we are writing to the database

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.email
    const entry = props.text

    if (entry && entry.length > 0) {

        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            text: entry,
            authorID: userID,
            createdAt: timestamp,
        };
        entityRef
            .add(data)
            .then(_doc => {
                console.log(_doc)
            })
            .catch((error) => {
                alert(error)
            });
    }
}

export function writeBooking(props) {
    console.log("writting booking")
    const collection = firebase.firestore().collection('bookings')
    const booking = props.booking

    const length = Object.keys(booking).length
    if (booking && length > 0) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        booking.timestamp = timestamp

        collection
            .add(booking)
            .then(_doc => {
                console.log(_doc)
            })
            .catch((error) => {
                alert(error)
            });
    }
}