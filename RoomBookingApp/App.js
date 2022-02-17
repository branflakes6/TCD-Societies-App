import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from "moment";
import { writeBooking } from './src/firebase/write'

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
      tcdEmail: "",
      eventDescription: "",
      room: "",
      prepTo: "",
      prepFrom: "",
      startTime: "",
      endTime: "",
      numParticipants: "",
      numStaff: "",
      guests: "",
      equipment: "",
      staging: "",
      food: "",
      alcohol: "",
      caterer: "",
      power: "",
      facilities: "",
      other: "",
    }
  }

  submit() {
    console.log(this.state)
    var propData = {
      booking: this.state
    }
    writeBooking(propData)
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
            placeholder='Mobile Number'
            keyboardType='numeric'
            onChangeText={(number) => { this.setState({ mobileNumber: number }) }}
            style={styles.mobileNum}
          />

          <TextInput
            placeholder='TCD Email'
            keyboardType='email-address'
            onChangeText={(text) => { this.setState({ tcdEmail: text + "@tcd.ie" }) }}
            style={styles.tcdEmail}
          />

          <TextInput
            multiline={true}
            numberOfLines={5}
            placeholder='Event Description/Outline'
            onChangeText={(text) => { this.setState({ eventDescription: text }) }}
            style={styles.eventDesc}
          />

          <Text style={styles.heading2}>Where is your event?</Text>

          {/* <Button
            title='Submit Request' onPress={() => { this.submit() }}
          />
          */}

          <TextInput
            placeholder='Room of Event'
            onChangeText={(text) => { this.setState({ room: text }) }}
            style={styles.room}
          />

          <TextInput
            placeholder='Preparation Time From:'
            onChangeText={(text) => { this.setState({ prepFrom: text }) }}
            style={styles.prepFrom}
          />

          <TextInput
            placeholder='Preparation Time To:'
            onChangeText={(text) => { this.setState({ prepTo: text }) }}
            style={styles.prepTo}
          />

          <TextInput
            placeholder='Event Time From:'
            onChangeText={(text) => { this.setState({ startTime: text }) }}
            style={styles.startTime}
          />

          <TextInput
            placeholder='Event Time To:'
            onChangeText={(text) => { this.setState({ endTime: text }) }}
            style={styles.endTime}
          />

          <Text style={styles.heading3}>Event Details</Text>

          <TextInput
            keyboardType='numeric'
            placeholder='Number of Participants'
            onChangeText={(text) => { this.setState({ numParticipants: text }) }}
            style={styles.numParticipants}
          />

          <TextInput
            keyboardType='numeric'
            placeholder='Number of Event Staff'
            onChangeText={(text) => { this.setState({ numStaff: text }) }}
            style={styles.numStaff}
          />

          <TextInput
            keyboardType='numeric'
            placeholder='Special Guests or VIPs'
            onChangeText={(text) => { this.setState({ guests: text }) }}
            style={styles.guests}
          />

          <TextInput
            multiline
            numberOfLines={5}
            placeholder='Equipment'
            onChangeText={(text) => { this.setState({ equipment: text }) }}
            style={styles.equipment}
          />

          <TextInput
            multiline
            numberOfLines={5}
            placeholder='Staging/Room Setup'
            onChangeText={(text) => { this.setState({ staging: text }) }}
            style={styles.staging}
          />

          <TextInput
            placeholder='Food Served?'
            onChangeText={(text) => { this.setState({ food: text }) }}
            style={styles.food}
          />

          <TextInput
            placeholder='Alcohol Served?'
            onChangeText={(text) => { this.setState({ alcohol: text }) }}
            style={styles.alcohol}
          />

          <TextInput
            placeholder='Using Caterer?'
            onChangeText={(text) => { this.setState({ caterer: text }) }}
            style={styles.caterer}
          />

          <Text style={styles.heading4}>Additional Info</Text>

          <TextInput
            placeholder='Power Source Required?'
            onChangeText={(text) => { this.setState({ power: text }) }}
            style={styles.power}
          />

          <TextInput
            multiline
            numberOfLines={5}
            placeholder='Facilities for disabled persons'
            onChangeText={(text) => { this.setState({ facilities: text }) }}
            style={styles.facilities}
          />

          <TextInput
            multiline
            numberOfLines={5}
            placeholder='Other Requirements'
            onChangeText={(text) => { this.setState({ other: text }) }}
            style={styles.other}
          />

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

export default App;
