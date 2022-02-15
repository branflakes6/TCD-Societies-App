import firebase from 'firebase/compat/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBZPXDUFUnc0xjFNITWZzSdBHytmqRPuyA',
  authDomain: 'soc-app-tcd.firebaseapp.com',
  projectId: 'soc-app-tcd',
  storageBucket: 'soc-app-tcd.appspot.com',
  messagingSenderId: '171428530839',
  appId: '1:171428530839:web:c015cff53404ad64da37d2',
  measurementId: "G-CPPKTFQC59"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };