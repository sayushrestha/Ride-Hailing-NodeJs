<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  data() {
    return {
      passengers: []

    }
  },
  async mounted () {
    this.passengers = await this.fetchPassengers();

  },
  methods: {
    ...mapActions(['fetchPassengers']) 

  }
}
</script>

<template lang="pug">
  .home 
    h1 Passengers
    p There are {{ passengers.length}} passengers waiting
    ol 
    li(v-for="passenger in passengers" :key="passenger.id")
      a(:href="`/passengers/${passenger.id}`") {{ passenger.name }}

   
</template>

