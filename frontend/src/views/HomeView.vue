<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  computed : {
    ...mapState(['countHome']),
  }
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld type="countHome" :count="countHome" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

