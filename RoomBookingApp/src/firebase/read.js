import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
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

export function readEvents(props){

    const collection = firebase.firestore().collection('bookings')
    const userID = props.email
    
        collection
            .where("status", "==", "Approved")
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

export function readEventsUser(props){

    const collection = firebase.firestore().collection('users')
    const userID = props.email
        collection
            .where("email", "==", userID)
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    })
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
            props.setEntities(documentSnapshot.data())
            const newEntities = []
            const entity = documentSnapshot.data()
            entity.id = documentSnapshot.id
            newEntities.push(entity)
            props.setEntities(newEntities)

        })
        .catch(error => {
            console.log(error)
        });


}

// returns room objects 
export function readAllRoom(props){

    const collection = firebase.firestore()
        .collection('rooms')
        .get()
        .then( querySnapshot => {
            const newEntities = []

            querySnapshot.forEach(documentSnapshot => {
                const entity = documentSnapshot.data()
                entity.id = documentSnapshot.id
                newEntities.push(entity)
            });
            props.setEntities(newEntities)
        })
        .catch(error => {
            console.log(error)
        });
        

}

export function readUser(props){

    const collection = firebase.firestore()
        .collection('users')
        .doc(props.email)
        .get()
        .then( documentSnapshot => {
            props.setEntities(documentSnapshot.data())
            const newEntities = []
            const entity = documentSnapshot.data()
            entity.id = documentSnapshot.id
            newEntities.push(entity)
            props.setEntities(newEntities)
        })
        .catch(error => {
            console.log(error)
        });
}