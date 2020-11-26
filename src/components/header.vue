<template>
  <div class="sunPage-header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/SUNLogo.178d4636.png" alt="">
      </div>
      <div class="header-menu">
        <router-link to="/sun" class="menu-item">SUN</router-link>
        <router-link to="/vote" class="menu-item">Vote</router-link>
        <router-link to="/faq" class="menu-item">FAQs</router-link>
        <a href="">Learn</a>
      </div>
      <div class="header-right">
        <div class="connect-wallet" :class="{pointer: ((addressId!=='') ? true : false)}"  @click="showWallet">
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
    <div class="ant-modal-root">
      <div class="ant-modal-mask modalMaskClose" @click="closeModal"></div>
      <div class="ant-modal-wrap modalWrapClose" v-if="addressId===''">
        <div class="ant-modal">
          <div class="ant-modal-content">
            <button type="button" class="ant-modal-close" @click="closeModal">
              <div class="ant-modal-close-x">
                <img src="../assets/antModalClose.png" alt="">
              </div>
            </button>
            <div class="ant-modal-header">
              <div class="ant-modal-title">Connect to Wallet</div>
            </div>
            <div class="ant-modal-body">
              <div class="center">
                <div class="logo">
                  <img src="../assets/tokenLogo1.png" alt="">
                </div>
                <div class="wallet-list">
                  <div class="wallet-item">
                    <span>
                      <img src="../assets/Tronlink.svg" alt="">
                    </span>
                    <span>Tronlink Wallet</span>
                  </div>
                </div>
                <div class="tronlink-tip">
                  <span>Haven't installed TronLink yet?</span>
                  <a href="#">Click here>></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ant-modal-wrap modalWrapClose" v-else>
        <div class="ant-modal">
          <div class="ant-modal-content">
            <button type="button" class="ant-modal-close" @click="closeModal">
              <div class="ant-modal-close-x">
                <img src="../assets/antModalClose.png" alt="">
              </div>
            </button>
            <div class="ant-modal-header">
              <div class="ant-modal-title">Account</div>
            </div>
            <div class="ant-modal-body">
              <div>
                <div class="address-con">
                  <div class="tip-text">Connected with Tronlink</div>
                  <div class="address-text">
                    <span>{{ addressId }}</span>
                    <span>Copy</span>
                  </div>
                </div>
                <div class="sun-info">
                  <div>
                    <img src="../assets/tokenLogo1.png" alt="">
                  </div>
                  <div class="balance">0</div>
                  <div class="balance-text">SUN Blance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
window.onclick = function(el) {
  let antModalMask = document.querySelector('.ant-modal-root .ant-modal-mask')
  let antModalWrap = document.querySelector('.ant-modal-root .ant-modal-wrap')
  if(el.target == antModalWrap){
    antModalMask.classList.add("modalMaskClose")
    antModalWrap.classList.add("modalWrapClose")
  }
}
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
    closeModal: function(){
      let antModalMask = document.querySelector('.ant-modal-root .ant-modal-mask')
      let antModalWrap = document.querySelector('.ant-modal-root .ant-modal-wrap')
      antModalMask.classList.add("modalMaskClose")
      antModalWrap.classList.add("modalWrapClose")
    },
    showWallet: function(){
      let antModalMask = document.querySelector('.ant-modal-root .ant-modal-mask')
      let antModalWrap = document.querySelector('.ant-modal-root .ant-modal-wrap')
      antModalMask.classList.remove("modalMaskClose")
      antModalWrap.classList.remove("modalWrapClose")
    }
  },
  created(){
    setInterval(this.getAddressId,1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
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
  .header-right .connect-wallet span{
    cursor: pointer;
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
  .ant-modal-root{
    height: 100%;
    .ant-modal-mask{
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;
      height: 100%;
      background-color: rgba(0,0,0,.45);
      transition:.35s;
      &.modalMaskClose{
        opacity: 0;
        visibility: hidden;
      }
    }
    .ant-modal-wrap{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      overflow: auto;
      transform: scale(1);
      transition: .5s;
      transform-origin: (85%) 70px;
      &:before{
        background: black;
      }
      &.modalWrapClose{
        transform: scale(0);
        visibility: hidden;
      }
      .ant-modal{
        width: 540px;
        transform-origin: 661px -27px;
        text-align: center;
        top: calc(50vh - 225px);
        background: #fff;
        box-shadow: inset -7px -8px 10px 0 rgba(51,1,138,.21);
        border-radius: 30px;
        box-sizing: border-box;
        color: rgba(0,0,0,.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: "tnum","tnum";
        position: relative;
        top: 100px;
        margin: 0 auto;
        padding: 0 0 24px;
        .ant-modal-content{
          border-radius: 30px 30px 0 0;
          box-shadow: none;
          .ant-modal-close{
            padding-top: 15px;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
            color: rgba(0,0,0,.45);
            font-weight: 700;
            line-height: 1;
            border: 0;
            outline: 0;
            background: transparent;
            .ant-modal-close-x{
              width: 56px;
              height: 56px;
              margin-top: -5px;
              text-align: center;
              cursor: pointer;
              img{
                width: 40px;
              }
            }
          }
          .ant-modal-header{
            border-radius: 30px 30px 0 0;
            padding: 16px 24px;
            color: rgba(0,0,0,.65);
            background: #fff;
            border-bottom: 1px solid #f0f0f0;
            .ant-modal-title{
              font-size: 20px;
              color: #333;
              line-height: 28px;
              text-align: left;
              font-weight: 500;
            }
          }
          .ant-modal-body{
            padding: 24px;
            font-size: 14px;
            line-height: 1.5715;
            .center{
              text-align: center;
              .logo{
                img{
                  width: 90px;
                }
              }
              .wallet-list{
                text-align: 40px;
                margin-top: 40px;
                .wallet-item{
                  display: flex;
                  justify-content: space-between;
                  width: 95%;
                  align-items: center;
                  margin: 0 auto;
                  box-shadow: 0 10px 40px 0 rgba(21,55,156,.06);
                  border-radius: 20px;
                  padding: 20px;
                  cursor: pointer;
                  img{
                    width: 40px;
                  }
                  span:last-child{
                    font-size: 20px;
                    color: #333;
                  }
                }
              }
              .tronlink-tip{
                padding-left: 20px;
                margin-top: 80px;
                text-align: left;
                color: #999;
                a{
                  color: #5915e1;
                  font-size: 16px;
                  padding-left: 5px;
                }
              }
            }
            div{
              .address-con{
                padding: 20px;
                background: hsla(0,0%,66.7%,.2);
                border-radius: 15px;
                .tip-text{
                  color: #999;
                  text-align: left;
                }
                .address-text{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  span:first-child{
                    word-break: break-all;
                    max-width: 80%;
                  }
                  span:last-child{
                    color: #666;
                    cursor: pointer;
                  }
                }
              }
              .sun-info{
                margin-top: 20px;
                text-align: center;
                padding: 20px;
                div{
                  img{
                    width: 100px;
                  }
                }
                .balance{
                  font-size: 24px;
                  color: #1a1a1a;
                  margin-top: 20px;
                }
                .balance-text{
                  font-size: 14px;
                  color: #999;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
