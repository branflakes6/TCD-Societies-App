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

export function UpdateBooking(update) {
        
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
export function closeBooking() {
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
export function sendFeedback (text) {
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
export function eventCreationHelper() {

}