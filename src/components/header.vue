<template>
  <div class="sunPage-header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/SUNLogo.178d4636.png" alt="">
      </div>
      <div class="header-menu">
        <router-link to="/sun" class="menu-item" :class="{atvSun: activeSun}">SUN</router-link>
        <router-link to="/vote" class="menu-item" @click.native="inactiveSun">Vote</router-link>
        <router-link to="/faq" class="menu-item" @click.native="inactiveSun">FAQs</router-link>
        <a>Learn</a>
      </div>
      <div class="header-right">
        <div class="connect-wallet" :class="{pointer: ((addressId!=='') ? true : false)}">
          <span v-if="addressId===''">Connect to Wallet</span>
          <span v-else>
            <img src="../assets/Tronlink.svg" alt="">
            {{ addressId }}
          </span>
        </div>
        <div class="pc">
          <select name="lg-content">
            <option value="English">English</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      addressId : '',
      activeSun: true
    }
  },
  methods: {
    getAddressId: function(){
      if(window.tronWeb && window.tronWeb.defaultAddress.base58){
          this.addressId= window.tronWeb.defaultAddress.base58
      }
      else this.addressId= ''
    },
    inactiveSun: function(){
      this.activeSun=false
    }
  },
  created(){
    setInterval(this.getAddressId,1000)
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
  .sunPage-header .header-container .header-menu a.router-link-active{
    background-color: #6726eb;
  }
  .sunPage-header .header-container .header-menu a.atvSun{
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
    text-align: center;
    border-radius: 5px;
    font-size: 14px;
    padding: 7px 20px;
    cursor: pointer;
    background-color: #6726eb;
    margin-right: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 160px;
  }
  .header-right .connect-wallet.pointer{
    background-color: #fff;
    color: #333;
  }
  .header-right .connect-wallet img{
    width: 17px;
    display: inline-block;
    margin-right: 10px;
    vertical-align: center;
    margin-top: -5px;
    transform: translateY(3px);
  }
</style>
