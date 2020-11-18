<template>
  <div id="app">
    <headerPage :page="Page"/>
    <sunPage v-show="Page.sun_page"/>
    <votePage v-show="Page.vote_page"/>
    <faqsPage v-show="Page.faqs_page"/>
    <footerPage />
  </div>
</template>

<script>
import headerPage from './components/header.vue'
import sunPage from './components/sun-page.vue'
import votePage from './components/votePage.vue'
import faqsPage from './components/FAQsPage.vue'
import footerPage from './components/footer.vue'

export default {
  name: 'App',
  data(){
    return {
      Page: {
        sun_page: true,
        vote_page: false,
        faqs_page: false
      }
    }
  },
  components:{
    headerPage,
    sunPage,
    votePage,
    faqsPage,
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
