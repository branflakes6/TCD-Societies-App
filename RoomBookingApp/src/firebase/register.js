import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

export const onFooterLinkPress = () => {
        navigation.navigate('Login')
}

export const onRegisterPress = (email, fullName, password, confirmPassword) => {
    if (password !== confirmPassword) {
        console.log("Passwords don't match.")
        return
    }
    console.log('registering : ', email, password)
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                fullName,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    navigation.navigate('Home', {user: data})
                })
                .catch((error) => {
                    alert(error)
                });
        })
        .catch((error) => {
            alert(error)
    });
}