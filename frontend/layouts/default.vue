<template>
  <div>
    <Navbar></Navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'

export default {
  components: {
    Navbar
  },
  computed:{
    onload:function(){
      console.log("loggin in")
      this.$store.dispatch('auth/load')
    }
  },
  // asyncData() {
  //   console("Entering async Data")
  //   if(process.server) {
  //     console.log('on server')
  //   } else {
  //     console.log('on client')
     
  //     console.log(this.$store.dispatch('auth/load'))
  //   }
  // }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
