<template>
  <div id="app">
    <sunPage />
  </div>
</template>

<script>
import sunPage from './components/sun-page.vue'
export default {
  name: 'App',
  data(){
    return {
      show: false
    }
  },
  components:{
    sunPage
  }
}
</script>

<style>

</style>
