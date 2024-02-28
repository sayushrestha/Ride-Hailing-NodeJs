
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>

<template lang="pug">
  .about
    h1 This is a journey about seeking yourself
    HelloWorld( msg="Computer Science")
 
</template>

