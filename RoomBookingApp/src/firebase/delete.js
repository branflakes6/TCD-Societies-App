import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export async function DeleteRoom(props) {
    const room = props.roomID
    const collectionRef = firebase.firestore().collection('rooms').doc(room).delete();

}
export async function DeleteUser(props) {

    const email = props.email
    const collectionRef = firebase.firestore().collection('users').doc(email).delete();

}