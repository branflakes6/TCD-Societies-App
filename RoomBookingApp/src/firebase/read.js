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

    const collection = firebase.firestore().collection('rooms')
    const roomID = props.roomID
    console.log(roomID)
    collection
        .where("Name", "==", roomID)
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                console.log(newEntities)
                props.setEntities(newEntities)
            },
            error => {
                console.log('Error : ', error)
            }
        )
}

// returns room objects 
export function readAllRoom(props){

    const collection = firebase.firestore().collection('rooms')

    collection
        .onSnapshot(
            querySnapshot => {
                const newEntities = []
                querySnapshot.forEach(doc => {
                    const entity = doc.data()
                    entity.id = doc.id
                    newEntities.push(entity)
                });
                console.log(newEntities)
                props.setEntities(newEntities)
            },
            error => {
                console.log('Error : ', error)
            }
        )
}