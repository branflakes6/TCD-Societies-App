import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useEffect } from 'react'


  
// DELETE TEMPLATE
export async function Delete(props) {

  const collectionRef = firebase.firestore().collection('rooms').doc(props.roomID).delete();

}

export async function DeleteRoom(props) {
    const room = props.roomID
    const collectionRef = firebase.firestore().collection('rooms').doc(room).delete();

}
export async function DeleteUser(props) {

    const email = props.email
    const collectionRef = firebase.firestore().collection('users').doc(email).delete();

}