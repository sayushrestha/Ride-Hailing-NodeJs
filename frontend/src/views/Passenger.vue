<script>
import { mapActions } from 'vuex'
export default {
  name: 'PassengerView',
  data() {
    return {
      passenger: {},
      drivers: [],
      isLoading: true,
    }
  },
  async mounted() {
    this.passenger = await this.fetchPassenger(this.$route.params.passengerId)
    this.drivers = await this.fetchDrivers()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchPassenger', 'fetchDrivers', 'bookDriver']),
    bookDriverAndUpdatePassenger({
      driverId,
      passengerId,
      origin,
      destination,
    }) {},
  },
}
</script>

<template lang="pug">
.passenger

  p(v-if="isLoading") Loading...
  div(v-else)
    h1 Passenger Detail
    p {{ passenger.name }}

    h3 Booking History
    div(v-if="passenger.bookings.length")
      ol
       li(v-for="booking in passenger.bookings")
          | From {{ booking.origin }} to {{ booking.destination }} with {{ booking.driver.name }}
    p(v-else) No bookings

    h2 Create New Booking 
    div(v-if="drivers.length")
     h3 Drivers 
     ol
     li(v-for="driver in drivers")
        | {{ driver.name }} is waiting at {{ driver.location }}
        button.book(@click="bookDriver({driverId:driver._id, passengerId: passenger._id, origin: passenger.location, destination:'Kadikoy'} )") Book Driver

</template>
