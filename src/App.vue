<template>
  <div id="app">
    <Header />
    <sunPage />
  </div>
</template>

<script>
import sunPage from './components/sun-page.vue'
import Header from './components/header.vue'
export default {
  name: 'App',
  data(){
    return {
      show: false
    }
  },
  components:{
    sunPage,
    Header
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
