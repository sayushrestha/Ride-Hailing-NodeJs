<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'About',
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(['countAbout']),
  },
}
</script>

<template lang="pug">
.about
h1 This is a journey about seeking yourself
HelloWorld(type="countAbout" :count="countAbout" msg="Computer Science")

</template>
