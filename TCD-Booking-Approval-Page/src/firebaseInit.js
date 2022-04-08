// import firebase from 'firebase/compat/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBZPXDUFUnc0xjFNITWZzSdBHytmqRPuyA",
    authDomain: "soc-app-tcd.firebaseapp.com",
    projectId: "soc-app-tcd",
    storageBucket: "soc-app-tcd.appspot.com",
    messagingSenderId: "171428530839",
    appId: "1:171428530839:web:a174b8f3229abae5da37d2",
    measurementId: "G-Q8J0ZM1TYV"
  };
  
// export default firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };