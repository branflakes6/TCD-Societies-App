import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    ScrollView,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
    Button
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import List from "./List";
import SearchBar from "./SearchBar";
import styles from '../styles/listStyles';
import logo from './images/Logo.png';




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
        <>
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
