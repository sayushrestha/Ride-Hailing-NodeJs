<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  data() {
    return {
      passengers: [],
      isLoading : true
    }
  },
  async mounted () {
    this.passengers = await this.fetchPassengers();
    this.isLoading = false

  },
  methods: {
    ...mapActions(['fetchPassengers']) 

  }
}
</script>

<template lang="pug">
  .home 
    h1 Passengers
    p(v-if="isLoading") Please wait
    p(v-else) There are {{ passengers.length}} passengers waiting
    ol 
    li(v-for="passenger in passengers" :key="passenger.id")
      a(:href="`/passengers/${passenger._id}`") {{ passenger.name }}

   
</template>

