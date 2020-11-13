<template>
  <div id="app">
    <bgrSun />
    <headerPage />
    <sunPage />
    <footerPage />
  </div>
</template>

<script>
import bgrSun from './components/background.vue'
import sunPage from './components/sun-page.vue'
import headerPage from './components/header.vue'
import footerPage from './components/footer.vue'

export default {
  name: 'App',
  data(){
    return {
    
    }
  },
  components:{
    sunPage,
    headerPage,
    bgrSun,
    footerPage
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
