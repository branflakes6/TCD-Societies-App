<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png" width="450" height="450">
    <h1>TCD Room Bookings</h1>
    <DataDisplay v-if="dataFound" :bookingRef="bookingRef" :userEmail="userEmail"/>
    <Approval v-if="dataFound" :bookingRef="bookingRef" :userEmail="userEmail"/>
    <div v-if="!dataFound">
      Something went wrong. Please approve/deny this booking via our app!
    </div>
  </div>
</template>
<script>
import Approval from './components/Approval.vue';
import DataDisplay from './components/DataDisplay.vue';

export default {
  name: 'app',
  mounted() {  
    document.title = "TCD Room Bookings";  
  },  
  components: {
    Approval,
    DataDisplay
  },
  data (){
    return {
      refFound: Boolean,
      idFound: Boolean,
      emailFound: Boolean,
      dataFound: false,
      userEmail: "",
      bookingRef: "",
      useState: Object
    }
  },
  created() {
    let urlParams = new URLSearchParams(window.location.search);
    this.refFound = urlParams.has('ref'); // check for booking ref
    console.log(this.refFound); 
    this.emailFound = urlParams.has('id'); // check for user email
    console.log(this.emailFound); 
    this.bookingRef = urlParams.get('ref');
    console.log(this.bookingRef);
    this.userEmail = urlParams.get('id')
    console.log(this.userEmail);
    this.dataFound = this.refFound && this.emailFound;
  },  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
