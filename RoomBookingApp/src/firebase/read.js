import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useEffect } from 'react'

export function Read(props) {

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.email
    
        entityRef
            .where("authorID", "==", userID)
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });

                    props.setEntities(newEntities)
                    console.log(newEntities)
                },
                error => {
                    console.log('Error : ', error)
                }
            )
}

export function readBooking(props){

    const collection = firebase.firestore().collection('bookings')
    const userID = props.email
    
        collection
            .where("tcdEmail", "==", userID)
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    props.setEntities(newEntities)
                },
                error => {
                    console.log('Error : ', error)
                }
            )
}

// returns room objects 
export function readSingleRoom(props){

    const roomID = props.roomID

    const collection = firebase.firestore()
        .collection('rooms')
        .doc(roomID)
        .get()
        .then( documentSnapshot => {
            console.log(documentSnapshot.data())
        });


}

// returns room objects 
export function readAllRoom(){

    const collection = firebase.firestore()
        .collection('rooms')
        .get()
        .then( querySnapshot => {
            console.log('Total users: ', querySnapshot.size);
        
            querySnapshot.forEach(documentSnapshot => {
              console.log('Rooms: ', documentSnapshot.id, documentSnapshot.data());
            });
        });
        
    console.log(collection)

}

export function readUser(props){

    const collection = firebase.firestore()
        .collection('users')
        .doc(props.email)
        .get()
        .then( documentSnapshot => {
            console.log(documentSnapshot.data())
            props.setEntities(documentSnapshot.data())
        });
}