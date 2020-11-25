<template>
  <div id="app">
    <headerPage />
    <footerPage />
  </div>
</template>

<script>
import headerPage from './components/header.vue'
import footerPage from './components/footer.vue'

export default {
  name: 'App',
  data(){
    return {
    }
  },
  components:{
    headerPage,
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
