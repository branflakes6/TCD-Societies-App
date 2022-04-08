import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert,
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
import pearse from './images/191-pearse.jpg';
import gmb from './images/gmb.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Listings = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="never">
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
                                        <Text style={styles.socialBarLabel}>50m2</Text>
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
                                        <Text style={styles.socialBarLabel}>30m2</Text>
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
                                        <Text style={styles.socialBarLabel}>35m2</Text>
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
                                        <Text style={styles.socialBarLabel}>35m2</Text>
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
                        <Image style={styles.cardImage} source={pearse} />
                        <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>191 Pearse Street</Text>
                                <Text style={styles.description}>House 6</Text>
                                <Text style={styles.time}>{"Mon – Sun, Mon – Sun, 7:00 – 16:00"}</Text>
                                <View style={styles.timeContainer}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardHeader}>
                            <Chip>Workshops</Chip>
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
                                        <Text style={styles.socialBarLabel}>35m2</Text>
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
                        <Image style={styles.cardImage} source={gmb} />
                        <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>Debating Chamber</Text>
                                <Text style={styles.description}>GMB(Graduates Memorial Building)</Text>
                                <Text style={styles.time}>{"Mon – Sun, Mon – Sun, 9:00 - 22:30"}</Text>
                                <View style={styles.timeContainer}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardHeader}>
                            <Chip>Debating</Chip>
                            <Chip>Speakers</Chip>
                            <Chip>Social Events</Chip>
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.socialBarContainer}>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={cap} />
                                        <Text style={styles.socialBarLabel}>200</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={space} />
                                        <Text style={styles.socialBarLabel}>150m2</Text>
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
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={wheelchair} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={gmb} />
                        <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>Phil Conversation Room</Text>
                                <Text style={styles.description}>GMB(Graduates Memorial Building)</Text>
                                <Text style={styles.time}>{"Mon – Sun, Mon – Sun, 9:00 - 22:30"}</Text>
                                <View style={styles.timeContainer}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardHeader}>
                            <Chip>Social Events</Chip>
                            <Chip>Receptions</Chip>
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.socialBarContainer}>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={cap} />
                                        <Text style={styles.socialBarLabel}>80</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={space} />
                                        <Text style={styles.socialBarLabel}>90m2</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={socket} />
                                        <Text style={styles.socialBarLabel}>8</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={wheelchair} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={gmb} />
                        <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>Hist Conversation Room</Text>
                                <Text style={styles.description}>GMB(Graduates Memorial Building), 1st Floor</Text>
                                <Text style={styles.time}>{"Mon – Sun, Mon – Sun, 9:00 - 22:30"}</Text>
                                <View style={styles.timeContainer}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardHeader}>
                            <Chip>Social Events</Chip>
                            <Chip>Receptions</Chip>
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.socialBarContainer}>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={cap} />
                                        <Text style={styles.socialBarLabel}>80</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={space} />
                                        <Text style={styles.socialBarLabel}>90m2</Text>
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
                        <Image style={styles.cardImage} source={gmb} />
                        <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>Resource Room</Text>
                                <Text style={styles.description}>GMB(Graduates Memorial Building), 3rd Floor</Text>
                                <Text style={styles.time}>{"Mon – Sun, Mon – Sun, 9:00 - 22:30"}</Text>
                                <View style={styles.timeContainer}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardHeader}>
                            <Chip>Meetings</Chip>
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
                                        <Text style={styles.socialBarLabel}>30m2</Text>
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
                        <Image style={styles.cardImage} source={gmb} />
                        <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>Hist Rec Room</Text>
                                <Text style={styles.description}>GMB(Graduates Memorial Building), 2nd Floor</Text>
                                <Text style={styles.time}>{"Mon – Sun, Mon – Sun, 9:00 - 22:30"}</Text>
                                <View style={styles.timeContainer}>
                                </View>
                            </View>
                        </View>
                        <View style={styles.cardHeader}>
                            <Chip>Receptions</Chip>
                            <Chip>Social Events</Chip>
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.socialBarContainer}>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={cap} />
                                        <Text style={styles.socialBarLabel}>100</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.socialBarSection}>
                                    <TouchableOpacity style={styles.socialBarButton}>
                                        <Image style={styles.icon} source={space} />
                                        <Text style={styles.socialBarLabel}>80m2</Text>
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


                </KeyboardAwareScrollView>

            </View>


        </ScrollView>
    );
};



export default Listings;