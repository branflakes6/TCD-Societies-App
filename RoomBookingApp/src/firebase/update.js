import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

export function UpdateRoom(props) {
    
    const roomID = props.RoomID
    const update = props.Update
    const entityRef = firebase.firestore().collection('rooms').doc(roomID);

    entityRef
        .update(update)
        .then(() => {
            console.log('Room updated!');
          })
        .catch(error => {
            console.log(error)
        });
}

export function UpdateUser(props) {
    
    const email = props.email
    const update = props.Update
    const entityRef = firebase.firestore().collection('users').doc(email);

    entityRef
        .update(update)
        .then(() => {
            console.log('User updated!');
          })
        .catch(error => {
            console.log(error)
        });
}

export function UpdateBooking(props) {
    
    const update = props.update
    const booking = props.booking
    const entityRef = firebase.firestore().collection('bookings').doc(booking.id);
    entityRef
        .update({status:update})
        .then(() => {
            console.log('Booking updated!');
          })
        .catch(error => {
            console.log(error)
        });
}
export function closeBooking(props) {
    const booking = props.booking
    const entityRef = firebase.firestore().collection('bookings').doc(booking.id);
    entityRef
        .update({open:false})
        .then(() => {
            console.log('Booking updated!');
          })
        .catch(error => {
            console.log(error)
        });
}
export function sendFeedback (props) {
    const booking = props.booking
    const text = props.text
    const entityRef = firebase.firestore().collection('bookings').doc(booking.id);
    entityRef
        .update({feedback:text})
        .then(() => {
            console.log('Booking updated!');
          })
        .catch(error => {
            console.log(error)
        });
}
export function attendingEvent(props) {
    console.log(props)
    const userEmail= props.email
    const eventID = props.event.id
    const usr = firebase.firestore().collection('users')
        usr.where("email", "==", userEmail)
        .get()
        .then( snapshots=> {
            snapshots.forEach (snapshot => {
                snapshot.ref.update({events : firebase.firestore.FieldValue.arrayUnion(eventID)})
            })
        })
        .catch(error => {
            console.log(error)
        });
    const event = props.event
    const collection = firebase.firestore().collection('events').doc(event.id);
    collection
        .update({attendees : firebase.firestore.FieldValue.arrayUnion(userEmail)})
        .then(() => {
            console.log();
          })
        .catch(error => {
            console.log(error)
        });
}
export function notAttendingEvent(props) {
    const userEmail= props.email
    const eventID = props.event.id
    const usr = firebase.firestore().collection('users')
        usr.where("email", "==", userEmail)
        .get()
        .then( snapshots=> {
            snapshots.forEach (snapshot => {
                snapshot.ref.update({events : firebase.firestore.FieldValue.arrayRemove(eventID)})
            })
        })
        .catch(error => {
            console.log(error)
        });
    const event = props.event
    const collection = firebase.firestore().collection('events').doc(event.id);
    collection
        .update({attendees : firebase.firestore.FieldValue.arrayRemove(userEmail)})
        .then(() => {
            console.log();
          })
        .catch(error => {
            console.log(error)
        });
}