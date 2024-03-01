<script>
import { mapActions } from 'vuex'
export default {
  name: 'PassengerView',
  data() {
    return {
      passenger: {},
      isLoading: true,
    }
  },
  async mounted() {
    this.passenger = await this.fetchPassenger(this.$route.params.passengerId)
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchPassenger']),
  },
}
</script>

<template lang="pug">
.passenger
  h1 Passenger Detail
  p(v-if="isLoading") Loading...
  template(v-else)
    p {{ passenger.name }}

</template>
