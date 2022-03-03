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

const Listings = ({ navigation }) => {
    return (
        <>
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
                    <Image style={styles.cardImage} source={logo} />
                    <View style={styles.cardHeader}>
                        <View>
                            <Text style={styles.title}>{"Hist Rec Room"}</Text>
                            <Text style={styles.description}>{"GMB, Front Square"}</Text>
                            <View style={styles.timeContainer}>
                                <Image style={styles.iconData} source={logo} />
                                <Text style={styles.time}></Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardFooter}>
                        <View style={styles.socialBarContainer}>
                            <View style={styles.socialBarSection}>
                                <TouchableOpacity style={styles.socialBarButton}>
                                    <Image style={styles.icon} source={logo} />
                                    <Text style={styles.socialBarLabel}>52</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.socialBarSection}>
                                <TouchableOpacity style={styles.socialBarButton}>
                                    <Image style={styles.icon} source={logo} />
                                    <Text style={styles.socialBarLabel}>67</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={{ logo }} />
                    <View style={styles.cardHeader}>
                        <View>
                            <Text style={styles.title}></Text>
                            <Text style={styles.description}></Text>
                            <View style={styles.timeContainer}>
                                <Image style={styles.iconData} source={{ logo }} />
                                <Text style={styles.time}></Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardFooter}>
                        <View style={styles.socialBarContainer}>
                            <View style={styles.socialBarSection}>
                                <TouchableOpacity style={styles.socialBarButton}>
                                    <Image style={styles.icon} source={{ logo }} />
                                    <Text style={styles.socialBarLabel}>78</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.socialBarSection}>
                                <TouchableOpacity style={styles.socialBarButton}>
                                    <Image style={styles.icon} source={{ logo }} />
                                    <Text style={styles.socialBarLabel}>25</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </>
    );
};

export default Listings;
