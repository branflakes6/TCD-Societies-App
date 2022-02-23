import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

// Update template
export function Update(props) {
    
    const roomID = "Anexa"

    const entityRef = firebase.firestore().collection('rooms').doc(roomID);
    const userID = props.email


    entityRef
        .update({
            "Capacity":"2"
        })
        .then(() => {
            console.log('User updated!');
          })
}


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
            console.log('Room updated!');
          })
        .catch(error => {
            console.log(error)
        });
}
