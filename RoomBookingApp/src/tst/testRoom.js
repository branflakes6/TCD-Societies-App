import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Button  } from 'react-native'
import styles from '../tst/styles.js';
import { firebase } from '../firebase/config';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { readSingleRoom, readAllRoom } from '../firebase/read'
import { writeRoom } from '../firebase/write'
import { Delete, DeleteRoom } from '../firebase/delete'
import { UpdateRoom } from '../firebase/update'
import { BookingTile } from '../components/bookingTile'

export function TestRoom() {
    
    const [roomID, setRoomID] = useState('')
    const [roomName, setRoomName] = useState('')
    const [roomBookStatus, setBookStatus] = useState('')
    const [entities, setEntities] = useState([])
    const [recommendations, setRecommentdations] = useState([])
    function callBulkWrite() {
        var names = ['Debating Chamber', 'Phil Conversation Room','Hist Conversation Room','Rec Room','Resource Room','Computer Room', 'Goldsmith Hall','The Atrium Room 50','The Main Atrium Space']
        var socketCounts = [45,76,34,56,23,76,56,44,24]
        var capacities = [546,65,34,78,34,76,45,64,32]
        var sizes = [234,236,653,885,212,563,775,2345,456]
        names.forEach(function (name, index) {
            console.log(index) // index
            console.log(name) // value
            var room = {
                Booked : true,
                Building : 'GMB',
                Capacity : capacities[index],
                Description : 'Room for soc event',
                Name : name,
                SocketCount : socketCounts[index],
                Projector : true,
                Screen : true,
                Size : 30,
                TablesChairs : true,
                Venue :	'Trinity Campus',
                WheelchairAccess : true
    
            }
            var propData = {
                room: room
            }
            writeRoom(propData)
        });

    }


    
    function callWrite() {
        var room = {
            Name : "lab3",
            Capacity: "50",
            Building: "Lloyd Institute",
            Projector : "True",
            Speakers : "True",
            Board: "False",
            FoodAndDrink: "True",
            // Images = [], 
            Booked : "False"
        }
        var propData = {
            room: room
        }
        writeRoom(propData)
    }

    function callReadSingleRoom() {
        var propData = {
            setEntities:setEntities,
            roomID:"lab3",
        }
        readSingleRoom(propData)
    }

    function roomSuggestion() {

        var requirements = {    
            Booked : true,
            Building : 'GMB',
            Capacity : 35,
            Description : 'Room for soc event',
            Name : 'Name',
            SocketCount : 3,
            Projector : true,
            Screen : true,
            Size : 30,
            TablesChairs : true,
            Venue :	'Trinity Campus',
            WheelchairAccess : true
        }
        
        const objectComparisonCallback = (arrayItemA, arrayItemB) => {
            if (arrayItemA.Points < arrayItemB.Points) {
              return 1
            }
          
            if (arrayItemA.Points > arrayItemB.Points) {
              return -1
            }
          
            return 0
        }

        const collection = firebase.firestore()
            .collection('rooms')
            .get()
            .then( querySnapshot => {
                var sortedRooms = []
                var points = {}
                querySnapshot.forEach(documentSnapshot => {
                    const entity = documentSnapshot.data()
                    recommend.push(entity)
                });
                sortedRooms.forEach(room => {
                    var point = 0
                    if (requirements['Capacity'] < room['Capacity']) point++
                    if (requirements['SocketCount'] < room['SocketCount']) point++
                    if (requirements['Size'] < room['Size']) point++
                    if (requirements['Projector'] == room['Projector']) point++
                    if (requirements['Screen'] == room['Screen']) point++
                    if (requirements['TablesChairs'] == room['TablesChairs']) point++
                    if (requirements['WheelchairAccess'] == room['WheelchairAccess']) point++
                    room['Points'] = point
                })

                sortedRooms.sort(objectComparisonCallback)
                setRecommentdations(sortedRooms)                
            })
            .catch(error => {
                console.log(error)
            });

    }

    function callDeleteRoom() {
        var propData = {
            setEntities:setEntities,
            roomID:"Anex",
        }
        DeleteRoom(propData)
    }

    function callUpdate() {
        console.log('update')
        var propData = {
            setEntities:setEntities,
            RoomID:"Anex",
            Update:{
                "capacity":"25",
                "location":"hamilton"
            }
        }
        UpdateRoom(propData)
    }

    const renderEntity = ({item, index}) => {
        console.log('rendering')
        return (
        <BookingTile props={item}/> 
        )
    }

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.Name} />
    );

    return (
        <View style={styles.container}>
        <View style={styles.formContainer}>
            <h2>Write a booking to the DB</h2>
            <TouchableOpacity style={styles.button} onPress={() => callWrite()} >
                <Text style={styles.buttonText}>Write Rooms</Text>
            </TouchableOpacity>

            <h2>Read Bookings from DB</h2>
            <TextInput
                style={styles.input}
                placeholder='room'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setRoomID(text)}
                value={roomID}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={() => callReadSingleRoom()} >
                <Text style={styles.buttonText}>Read Single Room</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => testRecommendationFeature()} >
                <Text style={styles.buttonText}>Read All Room</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => callDeleteRoom()} >
                <Text style={styles.buttonText}>delete room</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => callUpdate()} >
                <Text style={styles.buttonText}>Update room</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => roomSuggestion()} >
                <Text style={styles.buttonText}>Suggest room</Text>
            </TouchableOpacity>


            { recommendations && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={recommendations}
                        renderItem={renderItem}
                        keyExtractor={item => item.Name}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    </View>
    )
}