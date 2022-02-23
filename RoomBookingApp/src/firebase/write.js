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

// this is for writing rooms to the room database. This is not for updating room status
export function writeRoom(props) {
    console.log("writting room")
    const room = props.room
    const roomid = props.room.Name

    const collection = firebase.firestore().collection('rooms').doc(roomid)
    const length = Object.keys(room).length
    if (room && length > 0) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        room.timestamp = timestamp

        collection
            .set(props.room)
            .then(_doc => {
                console.log(_doc)
            })
            .catch((error) => {
                alert(error)
            });
    }
}

// this is for writing rooms to the room database. This is not for updating room status
export function writeUser(props) {
    console.log("writting room")

    const userID = props.user.email
    const user = props.user

    const collection = firebase.firestore().collection('users').doc(userID)
    const length = Object.keys(user).length
    if (user && length > 0) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        user.timestamp = timestamp

        collection
            .set(props.user)
            .then(_doc => {
                console.log('wrote : ', _doc)
            })
            .catch((error) => {
                alert(error)
            });
    }
}