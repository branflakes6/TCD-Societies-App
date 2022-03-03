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
import logo from './images/Logo.png';
import cap from './images/crowd-icon.png';
import space from './images/size-icon.png';
import house6 from './images/house-6.jpg';
import atrium from './images/atrium.jpg';

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
                            <View style={styles.timeContainer}>
                            </View>
                        </View>
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
                                    <Text style={styles.socialBarLabel}>100m</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.card}>
                    <Image style={styles.cardImage} source={atrium} />
                    <View style={styles.cardHeader}>
                        <View>
                            <Text style={styles.title}>{"The Atrium AV Room"}</Text>
                            <Text style={styles.description}>{"The Atrium"}</Text>
                            <View style={styles.timeContainer}>
                            </View>
                        </View>
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
                                    <Text style={styles.socialBarLabel}>75m</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

    );
};

export default Listings;
