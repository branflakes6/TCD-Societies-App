import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/listStyles';
import cap from './images/crowd-icon.png';
import space from './images/size-icon.png';
import house6 from './images/house-6.jpg';
import atrium from './images/atrium.jpg';
import projector from './images/projector-icon.png';
import screen from './images/tv-icon.png';
import socket from './images/socket-icon.png';
import wheelchair from './images/wheelchair-icon.png';
import { Chip } from 'react-native-paper';

const Listings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                All Available Listings
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>
                    Go to Homescreen
                </Text>
            </TouchableOpacity>


            <View style={styles.card}>
                <Image style={styles.cardImage} source={house6} />
                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.title}>Eliz Room</Text>
                        <Text style={styles.description}>House 6</Text>
                        <Text style={styles.time}>{"Mon – Fri, 8:00 – 18:00"}</Text>
                        <View style={styles.timeContainer}>
                        </View>
                    </View>
                </View>
                <View style={styles.cardHeader}>
                    <Chip>Meetings</Chip>
                    <Chip>Kitchen</Chip>
                    <Chip>Social Events</Chip>
                </View>
                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={cap} />
                                <Text style={styles.socialBarLabel}>30</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={space} />
                                <Text style={styles.socialBarLabel}>100m<sup>2</sup></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={projector} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={socket} />
                                <Text style={styles.socialBarLabel}>12</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.card}>
                <Image style={styles.cardImage} source={atrium} />
                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.title}>{"AV Room"}</Text>
                        <Text style={styles.description}>{"The Atrium, Room 3"}</Text>
                        <Text style={styles.time}>{"Mon – Sun, 7:30 – 22:00"}</Text>
                        <View style={styles.timeContainer}>
                        </View>
                    </View>
                </View>
                <View style={styles.cardHeader}>
                    <Chip>Social Events</Chip>
                    <Chip>Screenings</Chip>
                </View>
                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={cap} />
                                <Text style={styles.socialBarLabel}>25</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={space} />
                                <Text style={styles.socialBarLabel}>75m<sup>2</sup></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={wheelchair} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={projector} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={socket} />
                                <Text style={styles.socialBarLabel}>8</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.card}>
                <Image style={styles.cardImage} source={atrium} />
                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.title}>{"Conversation Room"}</Text>
                        <Text style={styles.description}>{"The Atrium, Room 4"}</Text>
                        <Text style={styles.time}>{"Mon – Sun, 7:30 – 22:00"}</Text>
                        <View style={styles.timeContainer}>
                        </View>
                    </View>
                </View>
                <View style={styles.cardHeader}>
                    <Chip>Social Events</Chip>
                </View>
                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={cap} />
                                <Text style={styles.socialBarLabel}>25</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={space} />
                                <Text style={styles.socialBarLabel}>75m<sup>2</sup></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={wheelchair} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={projector} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={socket} />
                                <Text style={styles.socialBarLabel}>6</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <Image style={styles.cardImage} source={atrium} />
                <View style={styles.cardHeader}>
                    <View>
                        <Text style={styles.title}>{"Workshop & Commitee Room"}</Text>
                        <Text style={styles.description}>{"The Atrium, Room 2"}</Text>
                        <Text style={styles.time}>{"Mon – Sun, 7:30 – 22:00"}</Text>
                        <View style={styles.timeContainer}>
                        </View>
                    </View>
                </View>
                <View style={styles.cardHeader}>
                    <Chip>Workshops</Chip>
                    <Chip>Meetings</Chip>
                    <Chip>Social Events</Chip>
                </View>
                <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={cap} />
                                <Text style={styles.socialBarLabel}>25</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={space} />
                                <Text style={styles.socialBarLabel}>75m<sup>2</sup></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={wheelchair} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={projector} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <Image style={styles.icon} source={socket} />
                                <Text style={styles.socialBarLabel}>6</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </View>



    );
};



export default Listings;
