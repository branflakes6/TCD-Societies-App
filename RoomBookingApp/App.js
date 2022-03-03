import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from "moment";
import emailjs from 'emailjs-com';
// import Config from "react-native-config";
import {USER_ID, ACCESS_TOKEN, EMAILJS_SENDER, SERVICE_ID, TEMPLATE_ID} from "@env";

//require('dotenv').config();

//importing styles.js from styles folder
import styles from './styles/styles';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      nameOfEvent: "",
      dateOfEvent: "",
      organisingBody: "",
      organiserName: "",
      mobileNumber: "",
      tcdEmail: ""+"@tcd.ie",
      eventDescription: "",
      building: "",
      room: ""
    }
  }

  submit() {
    console.log("ARRIVED AT SUBMIT")
    console.log(this.state)
    this.sendEmail()
  }

  handleCalendar = (datetime) => {
    this.setState({
      isVisible: false,
      dateOfEvent: moment(datetime).format('DD-MM-YYYY HH:mm')
    })
  }

  closeCalendar = () => {
    this.setState({
      isVisible: false
    })
  }

  showCalendar = () => {
    this.setState({
      isVisible: true
    })
  }

  async sendEmail() {
    console.log("ARRIVED AT SEND EMAIL!!!!")

    let templateParams = {
      //from_name: process.env.REACT_APP_EMAILJS_SENDER,
      //to_name: this.tcdEmail,
      organiserName: this.state.organiserName,
      building: this.state.building,
      dateOfEvent: this.state.dateOfEvent,
      eventDescription: this.state.eventDescription,
      mobileNumber: this.state.mobileNumber,
      nameOfEvent: this.state.nameOfEvent,      
      organisingBody: this.state.organisingBody,
      room: this.state.room,
      tcdEmail: this.state.tcdEmail
    }
    console.log(SERVICE_ID);
    console.log(TEMPLATE_ID);
    console.log(USER_ID);

    emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, templateParams,process.env.REACT_APP_USER_ID, process.env.REACT_APP_ACCESS_TOKEN)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }

  render() {

    return (
      <View style={styles.container}>

        <KeyboardAwareScrollView keyboardShouldPersistTaps="never">

          <DateTimePicker
            isVisible={this.state.isVisible}
            onConfirm={this.handleCalendar}
            onCancel={this.closeCalendar}
            mode={'datetime'}
            is24Hour={true}
          />

          <Text style={styles.heading1}>What is your event?</Text>

          <TextInput
            placeholder='Name of Event'
            onChangeText={(text) => { this.setState({ nameOfEvent: text }) }}
            style={styles.eventName}
          />

          <Button onPress={this.showCalendar} title='Pick a booking date' />

          <Text style={styles.datePicker}>Date/Time of Event:
            {this.state.dateOfEvent}
          </Text>

          <TextInput
            placeholder='Organising Body'
            onChangeText={(text) => { this.setState({ organisingBody: text }) }}
            style={styles.orgBody}
          />

          <TextInput
            placeholder='Organiser Name'
            onChangeText={(text) => { this.setState({ organiserName: text }) }}
            style={styles.orgName}
          />

          <TextInput
            placeholder='Mobile Number'
            keyboardType='numeric'
            onChangeText={(number) => { this.setState({ mobileNumber: number }) }}
            style={styles.mobileNum}
          />

          <TextInput
            placeholder='TCD Username'
            keyboardType='email-address'
            onChangeText={(text) => { this.setState({ tcdEmail: text + "@tcd.ie"}) }}
            style={styles.tcdEmail}
          />

          <TextInput
            multiline={true}
            placeholder='Event Description/Outline'
            onChangeText={(text) => { this.setState({ eventDescription: text }) }}
            style={styles.eventDesc}
          />

          <Text style={styles.heading2}>Where is your event?</Text>

          {/* <Button
            title='Submit Request' onPress={() => { this.submit() }}
          />
           */}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => { this.submit() }}>
            <Text style={styles.submitButtonText}>Submit Request</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />

        </KeyboardAwareScrollView>

      </View>

    )
  }
}

export default App