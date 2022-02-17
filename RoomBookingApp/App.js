import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from "moment";

//importing styles.js from styles folder
import styles from './styles/styles';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      nameOfEvent:"",
      dateOfEvent:"",
      organisingBody:"",
      organiserName:"",
      mobileNumber:"",
      tcdEmail:"",
      eventDescription:"",
      room:"",
      prepTo:"",
      prepFrom:"",
      startTime:"",
      endTime:"",
      numParticipants:"",
      numStaff:"",
      guests:"",
      equipment:"",
      staging:"",
      food:"",
      alcohol:"",
      caterer:"",
      power:"",
      facilities:"",
      other:"",
    }
  }

  submit() {
    console.log(this.state)
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
            onChangeText={(text) => { this.setState({ organisingBody: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

          <TextInput
            placeholder='Mobile Number'
            onChangeText={(number) => { this.setState({ mobileNumber: number}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

          <TextInput
            placeholder='TCD Email'
            onChangeText={(text) => { this.setState({ tcdEmail: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

          <TextInput
            multiline
            numberOfLines={5}
            placeholder='Event Description/Outline'
            onChangeText={(text) => { this.setState({ eventDescription: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />
        

          <Text style={styles.heading2}>Where is your event?</Text>

          <TextInput
            placeholder='Room of Event'
            onChangeText={(text) => { this.setState({ room: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />
        
        <TextInput
            placeholder='Preparation Time From:'
            onChangeText={(text) => { this.setState({ prepFrom: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />

        <TextInput
            placeholder='Preparation Time To:'
            onChangeText={(text) => { this.setState({ prepTo: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />

        <TextInput
            placeholder='Event Time From:'
            onChangeText={(text) => { this.setState({ startTime: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />

        <TextInput
            placeholder='Event Time To:'
            onChangeText={(text) => { this.setState({ endTime: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />




        <Text style={{ fontSize: 20, textAlign: 'center' }}>Event Details</Text>

        <TextInput
            placeholder='Number of Participants'
            onChangeText={(text) => { this.setState({ numParticipants: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />

        <TextInput
            placeholder='Number of Event Staff'
            onChangeText={(text) => { this.setState({ numStaff: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />  

          <TextInput
            placeholder='Special Guests or VIPs'
            onChangeText={(text) => { this.setState({ guests: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />  

          <TextInput
            multiline
            numberOfLines={5}
            placeholder='Equipment'
            onChangeText={(text) => { this.setState({ equipment: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

          <TextInput
            multiline
            numberOfLines={5}
            placeholder='Staging/Room Setup'
            onChangeText={(text) => { this.setState({ staging: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

          <TextInput
            placeholder='Food Served?'
            onChangeText={(text) => { this.setState({ food: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />  

          <TextInput
            placeholder='Alcohol Served?'
            onChangeText={(text) => { this.setState({ alcohol: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />  

          <TextInput
            placeholder='Using Caterer?'
            onChangeText={(text) => { this.setState({ caterer: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />  

        <Text style={{  margin: 20, top: 10, fontSize: 20, textAlign: 'center' }}>Additional Info</Text>

        <TextInput
            placeholder='Power Source Required?'
            onChangeText={(text) => { this.setState({ power: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />  

          
        <TextInput
            multiline
            numberOfLines={5}
            placeholder='Facilities for disabled persons'
            onChangeText={(text) => { this.setState({ facilities: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

          
        <TextInput
            multiline
            numberOfLines={5}
            placeholder='Other Requirements'
            onChangeText={(text) => { this.setState({ other: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

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