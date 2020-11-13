<template>
  <div class="sunPage-header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/SUNLogo.178d4636.png" alt="">
      </div>
      <div class="header-menu">
        <a href="#" class="menu-item active">SUN</a>
        <a href="#" class="menu-item">Vote</a>
        <a href="#" class="menu-item">FAQs</a>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
