<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'Passengers',
  data() {
    return {
      passengers: [],
      isLoading: true,
    }
  },
  async mounted() {
    try {
      this.passengers = await this.fetchPassengers()
    } catch (e) {
      this.errMessage = e.message
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    ...mapActions(['fetchPassengers']),
  },
}
</script>

<template lang="pug">
.home 
  h1 Passengers
  p(v-if="errMessage") {{ errMessage }}
  p(v-else-if="isLoading") Please wait
  div(v-else)
    p There are {{ passengers.length}} passengers waiting
    ol 
    li(v-for="passenger in passengers" :key="passenger.id")
      a(:href="`/passengers/${passenger._id}`") {{ passenger.name }}

    
</template>
