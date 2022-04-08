<template>
  <div class="display">
    <p>Booking Reference: {{bookingRef}}</p>
    <p>Your Email: {{userEmail}}</p>
  </div>
</template>

<script>
export default {
  name: 'DataDisplay',
  props: {
      bookingRef: String,
      userEmail: String
  }
}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
