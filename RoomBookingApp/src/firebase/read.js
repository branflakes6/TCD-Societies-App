import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import React, { useState, useEffect } from 'react'

export function Read(props) {


    const entityRef = firebase.firestore().collection('entities')
    const userID = props.email

    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        console.log(entity)
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    props.entities = newEntities

                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    
}