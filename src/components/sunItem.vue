<template>
  <div class="ant-modal-sun">
    <div class="ant-modal-mask closeModalMask"></div>
    <div class="ant-modal-wrap closeModalWrap">
      <div class="ant-modal">
        <div class="ant-modal-content">
          <button type="button" class="ant-modal-close" @click="closeModalStake">
            <div class="ant-modal-close-x">
              <img src="../assets/antModalClose.png" alt="">
            </div>
          </button>
          <div class="ant-modal-header">
            <div class="ant-tabs-tab" :class="{activeTab: isShow}" @click="activeTab">Stake</div>
            <div class="ant-tabs-tab" :class="{activeTab: !isShow}"  @click="activeTab">Claim</div>
          </div>
          <div class="ant-modal-tabs" v-if="isShow">
            <div>
              <p class="sub-text">
                <span>Stake Token</span>
                <span @click="getBalanceOfStake">Get</span>
              </p>
              <div class="input readToken">
                <input type="text" v-model="balanceOfStake" placeholder="0" readonly>
                <span>AC</span>
              </div>
            </div>
            <div>
              <p class="sub-text">
                <span>Stake Token</span>
                <span @click="getMAXToken">MAX</span>
              </p>
              <div class="input">
                <input type="text" placeholder="0" v-model="amountToken" id="amountStakeToken">
                 <span>AC</span>
              </div>
              <p>Maximum Stake Token: <span>0</span> SUN</p>
            </div>
            <div>
              <p class="sub-text">
                <span>Stake TRX</span>
                <span @click="getMAXTRX">MAX</span>
              </p>
              <div class="input">
                <input type="text" placeholder="0" v-model="amountTRX" id="amountStakeTRX">
                <span>TRX</span>
              </div>
              <p>Maximum Stake TRX: <span>0</span> SUN</p>
            </div>
            <button class="stakeToken-btn" @click="stakeToken">Stake Token</button>
            <button class="stakeTRX-btn" @click="stakeTRX">Stake TRX</button>
          </div>
          <div class="ant-modal-tabs" v-else>
            <div>
              <p class="sub-text">
                <span>Pending Claim</span>
                <span>Claim</span>
              </p>
              <div class="input readToken">
                <input type="text" placeholder="0" readonly>
                <span>AC</span>
              </div>
            </div>
            <div>
              <p  class="sub-text">
                <span>Staked</span>
                <span>MAX</span>
              </p>
              <div class="input">
                <input type="text" placeholder="0">
                <span>AC</span>
              </div>
              <p>Maximum Amount: <span>0</span> SUN</p>
            </div>
            <button class="stakeToken-btn">Claim & Unstake</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        balanceOfStake : 0,
        isShow: true,
        amountToken: 0,
        amountTRX: 0
      }
    },
    methods: {
      activeTab: function(el){
        if(el.target.classList.contains('activeTab')){
          return
        }
        else this.isShow = !this.isShow
      },
      closeModalStake: function(){
        let antModalMask = document.querySelector('.ant-modal-sun .ant-modal-mask')
        let antModalWrap = document.querySelector('.ant-modal-sun .ant-modal-wrap')
        antModalMask.classList.add("closeModalMask")
        antModalWrap.classList.add("closeModalWrap")
      },
      stakeToken: async function() {
        if(this.amountToken === 0){
          alert("Invalid value amount token")
        }
        else{
          const trc20ContractAddress = "TVaDcZBrGozAsCWeDK4R2eG9mL3jn4iUFb";
          let amountStake = parseInt(document.getElementById('amountStakeToken').value) * Math.pow(10,6)
          try {
              let contract = await window.tronWeb.contract().at(trc20ContractAddress)
              await contract.stakeToken(
                  amountStake
              ).send({
                  feeLimit: 5000000
              }).then(output => output)
          } catch(error) {
              console.error("trigger smart contract error",error)
          }
        }
      },
      stakeTRX: async function() {
        if(this.amountTRX === 0){
          alert("Invalid value amount token")
          return
        }
        else{
          const trc20ContractAddress = "TVaDcZBrGozAsCWeDK4R2eG9mL3jn4iUFb"
          let amountStake = parseInt(document.getElementById('amountStakeTRX').value) * Math.pow(10,6)
          try {
            let contract = await window.tronWeb.contract().at(trc20ContractAddress);
            await contract.methods.stakeTRX().send({
              callValue: amountStake,
              feeLimit: 5000000
            }).then(output => output)
          } catch(error) {
            console.error("trigger smart contract error",error)
          }
        }
      },
      getBalanceOfStake: async function() {
        const trc20ContractAddress = "TVaDcZBrGozAsCWeDK4R2eG9mL3jn4iUFb";
        try {
          let contract = await window.tronWeb.contract().at(trc20ContractAddress);
          var result = await contract.methods.balanceOfStake("TVu3H7drteoaEDDpfBGyh3ZBtbUPhzbA96").call()
          this.balanceOfStake = (parseInt(result._hex) / Math.pow(10,6))
        } catch(error) {
          console.error("trigger smart contract error",error)
        }
      },
      getMAXToken: async function() {
        const trc20ContractAddress = "TVaDcZBrGozAsCWeDK4R2eG9mL3jn4iUFb"
        try {
            let contract = await window.tronWeb.contract().at(trc20ContractAddress);
            let result = await contract.methods.balanceOf("TVu3H7drteoaEDDpfBGyh3ZBtbUPhzbA96").call()
            this.amountToken = parseInt(result.balance._hex) / Math.pow(10,6)
        } catch(error) {
            console.error("trigger smart contract error",error)
        }
      },
      getMAXTRX: async function() {
        try {
            if(window.tronWeb && window.tronWeb.defaultAddress.base58){
              window.tronWeb.trx.getBalance('TVu3H7drteoaEDDpfBGyh3ZBtbUPhzbA96') 
              .then(result => this.amountTRX = result / Math.pow(10,6))
            }
        } catch(error) {
            console.error("trigger smart contract error",error)
        }
      },
    }
}
</script>
<style lang="scss" scoped>
  .ant-modal-sun{
    height: 100%;
    .ant-modal-mask{
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.45);
      transition:.5s;
      &.closeModalMask{
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
      transition: .35s;
      transform-origin: (50%) (60%);
      &:before{
        background: black;
      }
      &.closeModalWrap{
        transform: scale(0);
        visibility: hidden;
      }
      .ant-modal{
        width: 400px;
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
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 20px;
            margin-bottom: 40px;
            .ant-tabs-tab{
              width: 90px;
              padding: 15px 0;
              cursor: pointer;
              margin: 0 10px;
              &.activeTab{
                border-bottom: 2px solid #6726eb;
              }
            }
          }
          .ant-modal-tabs{
            width: 85%;
            margin: 0 auto;
            text-align: left;
            &>div{
              margin-top: 10px;
              p{
                font-size: 11px;
              }
              p:first-child{
                color: #333;
                font-size: 12px;
                font-weight: 600;
              }
              p.sub-text{
                display: flex;
                justify-content: space-between;
                span:last-child{
                  color: #fff;
                  font-size: 8px;
                  font-weight: 500;
                  padding: 4px 10px;
                  background-color: #6726eb;
                  border-radius: 20px;
                  cursor: pointer;
                }
              }
              .input{
                position: relative;
                 input{
                  height: 50px;
                  width: 100%;
                  border-radius: 8px;
                  padding-left: 15px;
                  background-color: #fff;
                  outline: none;
                  border: 1px solid rgb(224, 224, 224);
                  margin-top: 10px;
                  margin-bottom: 10px;
                  &:focus{
                    border: 1px solid #6726eb;
                  }
                }
                &.readToken{
                  input{
                    background-color: rgb(233, 233, 233);
                    border: none;
                    cursor: auto;
                    &:focus{
                      border: none;
                      outline: none;
                    }
                  }
                }
                span{
                  position: absolute;
                  top: 25px;
                  right: 10px;
                }
              }
            }
          }
          .stakeToken-btn{
            display: block;
            width: 100%;
            height: 40px;
            margin: 70px 0 10px 0;
            border-radius: 10px;
            border: 0;
            background: #6726eb;
            cursor: pointer;
            color: #fff;
            outline: none;
          }
          .stakeTRX-btn{
            display: block;
            width: 100%;
            height: 40px;
            margin: 10px 0 10px 0;
            border-radius: 10px;
            border: 0;
            background: #6726eb;
            cursor: pointer;
            color: #fff;
            outline: none;
          }
        }
      }
    }
  }
</style>