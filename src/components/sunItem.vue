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
              <p>My Stake</p>
              <div class="input readToken">
                <input type="text" placeholder="0" readonly>
              </div>
            </div>
            <div>
              <p class="sub-text">
                <span>Stake SUN</span>
                <span>MAX</span>
              </p>
              <div class="input">
                <input type="text" placeholder="0">
              </div>
              <p>Maximum Stake: <span>0</span> SUN</p>
            </div>
            <button class="stake-btn" @click="stakeToken">Stake</button>
          </div>
          <div class="ant-modal-tabs" v-else>
            <div>
              <p class="sub-text">
                <span>Pending Claim</span>
                <span>Claim</span>
              </p>
              <div class="input readToken">
                <input type="text" placeholder="0" readonly>
              </div>
            </div>
            <div>
              <p  class="sub-text">
                <span>Staked</span>
                <span>MAX</span>
              </p>
              <div class="input">
                <input type="text" placeholder="0">
              </div>
              <p>Maximum Amount: <span>0</span> SUN</p>
            </div>
            <button class="stake-btn">Claim & Unstake</button>
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
        isShow: true
      }
    },
    methods: {
      activeTab: function(){
        this.isShow = !this.isShow
      },
      closeModalStake: function(){
        let antModalMask = document.querySelector('.ant-modal-sun .ant-modal-mask')
        let antModalWrap = document.querySelector('.ant-modal-sun .ant-modal-wrap')
        antModalMask.classList.add("closeModalMask")
        antModalWrap.classList.add("closeModalWrap")
      },
      stakeToken: async function(){
        const trc20ContractAddress = "TZJe5r25dGBpQAnc1Yi62gDyj1qvduY5Ap";//contract address
        try {
            let contract = await window.tronWeb.contract().at(trc20ContractAddress);
            //Use call to execute a pure or view smart contract method.
            // These methods do not modify the blockchain, do not cost anything to execute and are also not broadcasted to the network.
            await contract.stakeToken(
              20
            ).send({
                feeLimit: 50000000
            }).then(output => {console.log('- Output:', output, '\n');});
        } 
        catch(error) {
          console.error("trigger smart contract error",error)
        }
      }
    },
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
      transition:.35s;
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
                 input{
                  height: 50px;
                  width: 100%;
                  border-radius: 8px;
                  padding-left: 15px;
                  background-color: #fff;
                  outline: none;
                  border: none;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  &:focus{
                    border: 1px solid #6726eb;
                  }
                }
                &.readToken{
                  input{
                    background-color: rgb(233, 233, 233);
                    cursor: auto;
                    &:focus{
                      border: none;
                      outline: none;
                    }
                  }
                }
              }
            }
          }
          .stake-btn{
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
        }
      }
    }
  }
</style>