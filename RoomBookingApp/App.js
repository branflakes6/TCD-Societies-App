import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, DatePicker } from 'react-native'

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      nameOfEvent:"",
      dateOfEvent:"",
      organisingBody:"",
      organiserName:"",
      mobileNumber:"",
      tcdEmail:"",
      eventDescription:"",
    }
  }

  submit() {
    console.warn(this.state)
  }

  render() {
    
    return (
      <View style={{ margin: 40, marginTop: 40 }}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>What is your event?</Text>
          <TextInput
            placeholder='Name of Event'
            onChangeText={(text) => { this.setState({ nameOfEvent: text}) }}
            style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginTop: 20 }}
          />

          <TextInput 
            placeholder='Date of Event'
            onChangeText={(text) => { this.setState({ dateOfEvent: text}) }}
            style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginTop: 20 }}
          />

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
        
        <Text style={{  margin: 20, top: 10, fontSize: 20, textAlign: 'center' }}>Where is your event?</Text>
        
        <Button 
          title='Submit Request' onPress={()=>{this.submit()}} 
        />

        <StatusBar style="auto" />

      </View>
      
    )
  }
}

export default App