import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import List from "./List";
import SearchBar from "./SearchBar";
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

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from the fake api endpoint
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    All Available Listings
                </Text>
                <SafeAreaView style={styles.root}>
                  
                  <SearchBar
                    searchPhrase={searchPhrase}
                    setSearchPhrase={setSearchPhrase}
                    clicked={clicked}
                    setClicked={setClicked}
                  />
                  
                    <List
                      searchPhrase={searchPhrase}
                      data={fakeData}
                      setClicked={setClicked}
                    />
                  
                </SafeAreaView>





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

            </View>


        </ScrollView>
    );
};



export default Listings;
