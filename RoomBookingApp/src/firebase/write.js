import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

export function Write(props) {
    
    // payload is the JSON object we are writing to the database

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id
    const payload = props.extraData.payload


    if (entityText && entityText.length > 0) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            text: payload,
            authorID: userID,
            createdAt: timestamp,
        };
        entityRef
            .add(data)
            .then(_doc => {
                setEntityText('')
                Keyboard.dismiss()
            })
            .catch((error) => {
                alert(error)
            });
    }
}