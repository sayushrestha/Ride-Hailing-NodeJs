<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  data() {
    return {
      passengers: [{name:'Hilal'}, {name:'Ayse'}]
    }
  },
  computed : {
    ...mapState(['countHome']),
  }
}
</script>

<template lang="pug">
  .home 
    h1 Passengers
    .passenger(v-for="passenger in passengers")
      | {{ passenger.name }}

   
</template>

