<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data (){
    return {
      count : 5 // initial local state
    }
  },
  methods : {
    increment () { this.count++ },
    decrement () { this.count-- }
  }
}
</script>

<template lang="pug">
  .hello 
    p {{ msg }}
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
