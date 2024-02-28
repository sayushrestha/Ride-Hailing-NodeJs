<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data (){
    return {
     
    }
  },
  methods : {
    ...mapActions(['increment', 'decrement']),
    // increment () { this.count++ },
    // decrement () { this.count-- }
  },
  computed : {
    ...mapState(['count']),
    upperCaseMsg() {
      return this.msg.toUpperCase()
    },
    
  }
}
</script>

<template lang="pug">
  .hello 
    p {{ upperCaseMsg }}
  .counter {{ count }}
  button.increment(@click="increment") Increment 
  button.decrement(@click="decrement") Decrement 
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
