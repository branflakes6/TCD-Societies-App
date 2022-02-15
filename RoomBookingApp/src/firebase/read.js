import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import { useEffect } from 'react'

export function Read(props) {


    const entityRef = firebase.firestore().collection('entities')
    const userID = props.email
    
    useEffect(() => {
        entityRef
            .where("authorID", "==", "rowlanja@tcd.ie")
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
    }, [])

    
}