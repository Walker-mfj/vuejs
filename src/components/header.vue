<template>
  <div class="sunPage-header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/SUNLogo.178d4636.png" alt="">
      </div>
      <div class="header-menu">
        <a href="#/sun" class="menu-item" :class="{active:page.sun_page}" @click="show_sun">SUN</a>
        <a href="#/vote" class="menu-item" :class="{active:page.vote_page}" @click="show_vote">Vote</a>
        <a href="#/faq" class="menu-item" :class="{active:page.faqs_page}" @click="show_faqs">FAQs</a>
        <a href="#" class="menu-item">Learn</a>
      </div>
      <div class="header-right">
        <div class="connect-wallet">Connect to Wallet</div>
        <div class="pc">
          <select name="lg-content">
            <option value="English">English</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    page: Object
  },
  methods: {
    show_sun: function(){
      this.page.sun_page = true
      this.page.vote_page = false
      this.page.faqs_page = false
    },
    show_vote: function(){
      this.page.sun_page = false
      this.page.vote_page = true
      this.page.faqs_page = false
    },
    show_faqs: function(){
      this.page.sun_page = false
      this.page.vote_page = false
      this.page.faqs_page = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sunPage-header::before{
    content: '';
    width: 100%;
    height: 400px;
    background-image: url(../assets/bj.76ce099b.png);
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .sunPage-header{
    width: 100%;
  }
  .sunPage-header .header-container{
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
  }
  .sunPage-header .header-container .logo{
    width: 33.33333%;
  }
  .sunPage-header .header-container .logo img{
    width: 150px;
  }
  .sunPage-header .header-container .header-menu{
    display: flex;
  }
  .sunPage-header .header-container .header-menu a{
    color: #fff;
    text-decoration: none;
    display: block;
    margin: 15px 5px;
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 5px;
  }
  .sunPage-header .header-container .header-menu a:hover{
    background-color: #6726eb;
  }
  .sunPage-header .header-container .header-menu a:active{
    background-color: #6726eb;
  }
  .sunPage-header .header-container .header-menu a.active{
    background-color: #6726eb;
  }
  .sunPage-header .header-container .header-right{
    color: #fff;
    width: 33.33333%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .header-right .lg-content option{
    cursor: pointer;
  }
  .header-right .connect-wallet{
    border-radius: 5px;
    font-size: 14px;
    padding: 7px 30px;
    cursor: pointer;
    background-color: #6726eb;
    margin-right: 40px;
  }
</style>
