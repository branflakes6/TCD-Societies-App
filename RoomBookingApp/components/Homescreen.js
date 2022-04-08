import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from 'react-navigation';
import styles from '../styles/styles';
import logo from './images/Logo.png';



const Home = ({ navigation }) => {

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ alignItems: "center", margin: 16 }} onClick={() => this.props.navigation.openDrawer()}>
          <Text name="bars" size={24} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>
        Trinity Room Booking App
      </Text>
      <View style={styles.container}>
        <Image source={logo} style={styles.appLogo} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Form")}>
          <Text style={styles.buttonText}>
            Request a Room
          </Text>

        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;