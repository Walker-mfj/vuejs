<template>
  <div class="sun-page">
    <sunItem />
    <div class="sun-container">
      <div class="intro">
        <h1>Today's a good day to sow SUN</h1>
        <h4>Stake to mine and earn SUN</h4>
        <p>SUN smart contract has been verified by SlowMist. Check out the audit report <a>here</a>.</p>
      </div>
      <div class="alert">
        <p>Currently we only support staking through this page. Assets that are staked via other means will not be included in Official mining and cannot be returned.</p>
        <span class="alert_icon">
          <i class="fas fa-times"></i>
        </span>
      </div>
      <div class="sun-dasboard">
        <div class="sun-nav">
          <div>
            <div class="title">
              Total Staked Value
              <a href="#">Mining rules</a>
            </div>
            <div class="mined_amount">
              ≈ 
              <span>7,999,968,812 <span class="trxUni">TRX</span></span>
            </div>
            <div class="usd_amount">
              ≈ 
              <span>200,296,796 <span class="undUni">USD</span></span>
            </div>
          </div>
          <a class="getLP">
            Get LP Token on JustSwap
            <span class="questionCircle">?</span>
          </a>
        </div>
      </div>
    </div>
    <div class="nav-link">
      <span :class="{active: isShow}" @click="clickShow">Active</span>|
      <span :class="{active: !isShow}" @click="clickShow">Ended</span>
    </div>
    <div class="container active-link" v-if="isShow">
      <section class= 'sun'>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogo1.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">SUN/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total">
            <span class="t-num">Total: 54,462,041,155</span>
            <span class="apy">APY: 37.70%</span>
          </div>
          <div class="info">
            <div>
              <p>Total staked</p>
              <p>
                <span>1,742,8517</span>
                <span>SUN</span>
              </p>
              <p>
                <span>561,446,660</span>
                <span>TRX</span>
              </p>
            </div>
            <div>
              <p>Pool supply</p>
              <p>
                <span>23,127</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link">Get LP Token</a>
            <button class="create_btn">Select</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogo2.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">USDT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake USDT/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total">
            <span class="t-num">Total:875,645,180</span>
            <span class="apy">APY: 19.30%</span>
          </div>
          <div class="info">
            <div>
              <p>Total staked</p>
              <p>
                <span>1,742,8517</span>
                <span>SUN</span>
              </p>
              <p>
                <span>561,446,660</span>
                <span>TRX</span>
              </p>
            </div>
            <div>
              <p>Pool supply</p>
              <p>
                <span>23,127</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link">Get LP Token</a>
            <button class="create_btn">Select</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogo3.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">SUN/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total">
            <span class="t-num">Total: 54,462,041,155</span>
            <span class="apy">APY: 37.70%</span>
          </div>
          <div class="info">
            <div>
              <p>Total staked</p>
              <p>
                <span>1,742,8517</span>
                <span>SUN</span>
              </p>
              <p>
                <span>561,446,660</span>
                <span>TRX</span>
              </p>
            </div>
            <div>
              <p>Pool supply</p>
              <p>
                <span>23,127</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link">Get LP Token</a>
            <button class="create_btn">Select</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogo4.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">USDJ/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake WBTT/TRX LP Earn <b>1x</b> SUN
              </div>
            </div>
          </div>
          <div class="total">
            <span class="t-num">Total: 54,462,041,155</span>
            <span class="apy">APY: 37.70%</span>
          </div>
          <div class="info">
            <div>
              <p>Total staked</p>
              <p>
                <span>1,742,8517</span>
                <span>SUN</span>
              </p>
              <p>
                <span>561,446,660</span>
                <span>TRX</span>
              </p>
            </div>
            <div>
              <p>Pool supply</p>
              <p>
                <span>23,127</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link">Get LP Token</a>
            <button class="create_btn">Select</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogo5.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">SUN/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total">
            <span class="t-num">Total: 54,462,041,155</span>
            <span class="apy">APY: 37.70%</span>
          </div>
          <div class="info">
            <div>
              <p>Total staked</p>
              <p>
                <span>1,742,8517</span>
                <span>SUN</span>
              </p>
              <p>
                <span>561,446,660</span>
                <span>TRX</span>
              </p>
            </div>
            <div>
              <p>Pool supply</p>
              <p>
                <span>23,127</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link">Get LP Token</a>
            <button class="create_btn">Select</button>
          </div>
        </div>
      </section>
    </div>
    <div class="container ended-link" v-else>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogoEnded1.svg" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.11.02 17:00:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>22,400</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>HT/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogoEnded2.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.10.28 22:20:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>8,400</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>SUN/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogoEnded3.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.10.28 22:20:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>44,800</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>USDT/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogoEnded4.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.11.02 17:00:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>22,400</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>HT/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogoEnded5.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.10.28 22:20:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>16,800</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>USDJ/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogoEnded6.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.11.02 17:00:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>22,400</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>HT/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/tokenLogoEnded7.png" alt="tokenLogo">
            <img class="sunLogo" src="../assets/sunLogo.png" alt="sunLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.11.02 17:00:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>22,400</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>HT/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
      <section class= 'sun'>
        <div class="over">Ended</div>
        <div>
          <div class="sun-header">
            <img class="tokenLogo" src="../assets/sunLogo.png" alt="tokenLogo">
            <div class="header-right">
              <h1 class="title">HT/TRX LP Pool</h1>
              <div class="hr-sub">
                Stake SUN/TRX LP Earn <b>9x</b> SUN
              </div>
            </div>
          </div>
          <div class="total countdown">
            2020.11.02 17:00:00 Ended
          </div>
          <div class="info">
            <div>
              <p>Total Supply</p>
              <p>
                <span>22,400</span>
                <span>SUN</span>
              </p>
            </div>
            <div>
              <p>My staked</p>
              <p>
                <span>--</span>
                <span>HT/TRX LP</span>
              </p>
            </div>
            <div>
              <p>Pending Claim</p>
              <p>
                <span>--</span>
                <span>SUN</span>
              </p>
            </div>
          </div>
          <div class="bottomFix">
            <a class="type-link gray">Claim & Unstake</a>
            <button class="create_btn endedLink">Continue mining for more profits</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import sunItem from './sunItem.vue'
export default {
  data() { 
    return{
      isShow: true
    }
  },
  methods: {
    clickShow: function(el){
      if(el.target.classList.contains('active') == true){
        return  
      }
      else this.isShow = !this.isShow
    }
  },
  components: {
    sunItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin :0;
    padding: 0;
    box-sizing: border-box;
  }
  .sun-page{
    width: 100%;
  }
  .sun-container{
    width: 50%;
    margin:auto;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .sun-container .intro{
    padding-top: 60px;
  }
  .sun-container .intro h1{
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  .sun-container .intro h4{
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .sun-container .intro p{
    font-size: 12px;
  }
  .sun-container .intro p a{
    text-decoration: underline;
  }
  .sun-container .alert{
    color: rgba(255,0,0,.85);
    position: absolute;
    width: 100%;
    top:190px;
    left: 0;
    margin: auto;
    font-size: 16px;
    border: 1px solid #ffe58f;
    padding: 8px 0px;
    background-color: #fffbe6;
    border-radius: 5px;
  }
  .sun-container .alert .alert_icon i{
    position: absolute;
    right: 10px;
    top : 12px;
    font-size: 15px;
    font-weight: 300;
    color: rgba(0,0,0,.45);
    cursor: pointer;
    transition: 0.3s;
  }
  .sun-container .alert .alert_icon i:hover{
    color: rgba(0,0,0,.6);
  }
  .sun-container .alert p{
    width: 90%;
    margin: auto;
    font-weight: 500;
    line-height: 1.5;
  }
  .sun-container .sun-dasboard{
    margin: 80px auto 0;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 20px 40px 0 hsla(0,0%,58%,.06);
  }
  .sun-container .sun-dasboard .sun-nav{
    display: flex;
    align-items: center;
    padding: 26px 30px 16px;
    justify-content: space-between;
    color: #1f1f1f;
    border-bottom: 1px solid rgba(89,21,225,.1);
  }
  .sun-dasboard .sun-nav div:first-child{
    text-align: left;
  }
  .sun-dasboard .sun-nav .title{
    font-size: 14px;
    color: #666;
    padding-left: 30px;
    background: url(https://sun.io/static/media/stakeLogo.c7790db2.svg) 0 no-repeat;
    background-size: 17px 17px;
  }
  .sun-dasboard .sun-nav .title a{
    color: #6726eb;
    font-size: 12px;
    margin-left: 8px;
    text-decoration: underline;
  }
  .sun-dasboard .sun-nav .mined_amount{
    margin-top: 15px;
    font-size: 24px;
    color: #333;
    line-height: 2;
  }
  .sun-dasboard .sun-nav .mined_amount .trxUni{
    font-size: 16px;
  }
  .sun-dasboard .sun-nav .usd_amount{
    font-size: 12px;
    color: #999;
  }
  .sun-dasboard .sun-nav .getLP{
    font-size: 13px;
    color: #fff;
    background-color: #5915e1;
    border-radius: 5px;
    padding: 10px 14px;
    text-decoration: none;
    cursor: pointer;
  }
  .sun-dasboard .sun-nav .getLP .questionCircle{
    display: inline-block;
    font-size: 11px;
    width: 15px;
    height: 15px;
    border-radius: 16px;
    line-height: 15px;
    border: 1px solid #fff;
    margin-left: 8px;
  }
  .sun-page .nav-link{
    padding-top: 50px;
    text-align: center;
  }
  .sun-page .nav-link span{
    cursor: pointer;
    padding: 0 20px;
    font-size: 18px;
    color:rgba(0,0,0,.65);
  }
  .sun-page .nav-link span:hover{
    color: #5915e1!important;
  }
  .sun-page .nav-link span.active{
    color: #5915e1;
  }
  .container{
    width: 65%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 30px;
  }
  .sun{
    padding: 20px;
    width: calc((100% - 60px)/3);
    background-color: #fff;
    border-radius: 15px;
    margin: 10px 20px 10px 0px;
    position: relative;
    overflow: hidden;
    height: 470px;
    position: relative;
  }
  .container .sun .over{
    position: absolute;
    font-size: 14px;
    background-color: #999;
    right: -25px;
    top: 80px;
    height: 33px;
    line-height: 33px;
    width: 150px;
    transform-origin: right top;
    transform: rotate(45deg);
    /* transform: rotate(-315deg); */
    text-align: center;
    color: #fff;
  }
  .sun-header{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
  }
  img.tokenLogo{
    width: 14%;
  }
  img.sunLogo{
    width: 14%;
    margin-left: -10px;
  }
  .sun-header .header-right{
    text-align: left;
    margin-left: 10px;
  }
  .sun-header .header-right .title{
    font-size: 18px;
  }
  .sun-header .header-right .hr-sub{
    font-size: 12px;
    color: #999;
    margin-top: 5px;
  }
  .sun-header .header-right .hr-sub b{
    color: #6726eb;
  }
  .sun .total{
    display: flex;
    justify-content: space-between;
    margin: 30px auto 0px;
    width: 100%;
  }
  .sun .total .t-num{
    font-size: 12px;
    color: rgba(0,0,0,.65);
  }
  .sun .total .apy{
    font-size: 13px;
    color: #1ba27a;
  }
  .sun .total.countdown{
    color: #d90019;
    font-size: 14px;
    line-height: 16px;
    justify-content: center;
  }
  .sun .info{
    margin: 10px auto 0;
    width: 100%;
    padding: 14px 20px;
    box-shadow: inset 0 -2px 8px 0 rgba(51,1,138,.08);
    border-radius: 15px;
  }
  .sun .info div p:first-child{
    font-size: 10px;
    color: #666;
    line-height: 3;
  }
  .sun .info div p:nth-child(n+2){
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #1a1a1a;
  }
  .sun .info div p:nth-child(n+2) span:first-child{
    display: block;
    mask-border: -20px;
  }
  .sun .info div p:nth-child(n+2) span{
    font-size: 12px;
    color: #999;
    line-height: 2;
  }
  .sun .bottomFix{
    bottom: 20px;
    width: calc(100% - 40px);
    position: absolute;
  }
  .sun .bottomFix .type-link{
    color: #6726eb;
    font-size: 12px;
    display: block;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }
  .sun .bottomFix .type-link.gray{
    color: #b79cef;
    cursor: not-allowed;
  }
  .sun .bottomFix .create_btn{
    width: 100%;
    display: block;
    color: #fff;
    font-size: 12px;
    border-radius: 10px;
    text-align: center;
    background: #6726eb;
    border: 0;
    height: 40px;
    margin: 13px 0;
    outline: none;
    cursor: pointer;
  }
  .sun .bottomFix .create_btn.endedLink{
    color: #b79cef;
    background: #e2d9f6;
  }
  @media screen and (max-width: 1600px){
    .sun-page .sun-container{
      width: 60%;
    }
    .sun-page .container{
      width: 80%;
    }
  }
  @media screen and (max-width: 1200px){
    .sun-header .header-right .title{
      font-size: 15px;
    }
    .sun-header .header-right .hr-sub{
      font-size: 9px;
    }
    .sun .total .t-num{
      font-size: 10px;
    }
    .sun .total .apy{
      font-size: 11px;
    }
  }
  @media screen and (max-width: 1000px){
    .container{
      width: 90%; 
    }
    .container .sun{
      width: 100%;
    }
    .sun .sun-header .tokenLogo{
      width: 50px;
    }
    .sun .sun-header .sunLogo{
      width: 50px;
    }
    .sun-header .header-right .title{
      font-size: 20px;
    }
    .sun-header .header-right .hr-sub{
      font-size: 15px;
    }
    .sun .total .t-num{
      font-size: 13px;
    }
    .sun .total .apy{
      font-size: 14px;
    }
  }
</style>