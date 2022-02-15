import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import React, { useEffect, useState } from 'react'

export function Write(props) {
    
    // payload is the JSON object we are writing to the database

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.email
    const entry = props.text

    if (entry && entry.length > 0) {

        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            text: entry,
            authorID: userID,
            createdAt: timestamp,
        };
        entityRef
            .add(data)
            .then(_doc => {
                console.log(_doc)
            })
            .catch((error) => {
                alert(error)
            });
    }
}