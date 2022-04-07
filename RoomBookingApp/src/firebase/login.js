import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const onFooterLinkPress = () => {
    navigation.navigate('Registration')
}

export const onLoginPress = ({navigation, email, password}) => {
    firebase
        .auth()
        .signInWithEmailAndPassword('qqqqqq@tcd.ie', 'qqqqqq')
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User" + uid + " does not exist anymore.")
                        return;
                    }
                    console.log('user logged in')
                    const user = firestoreDocument.data()
                    navigation.navigate('Home', {user: user})
                    
                    
                })
                .catch(error => {
                    alert(error)
                })
                .then( x =>{
                    return true
                }
                );
        })
        .catch(error => {
            alert(error)
        })
}  