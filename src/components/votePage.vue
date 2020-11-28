<template>
    <div>
        <div class="vote-list-container">
            <div class="title">Vote</div>
            <div class="vote-list">
                <div class="tablist">
                    <div class="ant-tabs-tab" :class="{active: isShow}" @click="Show">
                        <div role="tab" class="ant-tabs-tab-btn">Active</div>
                    </div>
                    <div class="ant-tabs-tab" :class="{active: !isShow}" @click="Show">
                        <div role="tab" class="ant-tabs-tab-btn">Closed</div>
                    </div>
                    <div class="ant-tab-ink-bar" :class="{active: !isShow}"></div>
                </div>
                <div class="ant-tabs-active" v-if="isShow">
                    <div class="center">
                        <img src="../assets/empty.png" alt="Empty tab">
                        <div>No proposal up for vote. Please check other voting instead.</div>
                    </div>
                </div>
                <div class="ant-tabs-closed" v-else>
                    <router-link :to="{path: '/vote/detail',query: {symbol: 'sun'}}">
                        <div class="vote-list-card">
                            <div class="l1">
                                <div class="l1-l">Vote for Your Favorite Pool</div>
                                <div class="l1-r">Ends at: Oct 18 2020 17:00:00</div>
                            </div>
                            <div class="l2">
                                <div class="l2-l">Closed</div>
                                <div class="l2-r">
                                    <span class="author">
                                        Author: 
                                        <span class="text333">SUN Team</span>
                                    </span>
                                    <span class="pool-supply">
                                        Total pool supply: 
                                        <span class="text333">1,200 SUN</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{path: '/vote/detail1',query: {symbol: 'sun1'}}">
                        <div class="vote-list-card">
                            <div class="l1">
                                <div class="l1-l">Vote the featured token onto JustSwap’s token list</div>
                                <div class="l1-r">Ends at: Nov 08 2020 11:00:00</div>
                            </div>
                            <div class="l2">
                                <div class="l2-l">Closed</div>
                                <div class="l2-r">
                                    <span class="author">
                                        Author: 
                                        <span class="text333">SUN Team</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </router-link>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow: true,
        }
    },
    methods: {
        Show: function(el){
            if(el.target.classList.contains('active')){
                return
            }
            else this.isShow = !this.isShow
        },
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
    $color-hover: #5915e1;
    .vote-list-container{
        width: 62.5%;
        margin: 100px auto 0;
        .title{
            font-size: 1vw;
            color: #fff;
        }
        .vote-list{
            background-color: #fff;
            box-shadow: 0 20px 40px 0 hsla(0,0%,58%,.06);
            min-height: 585px;
            padding: 20px;
            margin-top: 20px;
            border-radius: 10px;
            .tablist{
                display: flex;
                color: rgba(0,0,0,.65);
                font-size: 14px;
                line-height: 1.5;
                border-bottom: 1px solid #f0f0f0;
                position: relative;
                .ant-tabs-tab{
                    align-items: center;
                    padding: 12px 0;
                    margin: 0 32px 0 0;
                    font-weight: 500;
                    cursor: pointer;
                    &:hover{
                        color: $color-hover;
                    }
                }
                .ant-tabs-tab.active{
                    color: $color-hover;
                }
                .ant-tab-ink-bar{
                    position: absolute;
                    bottom: -1px;
                    height: 2px;
                    left: 0;
                    width: 38px;
                    background-color: $color-hover;
                    transition: .3s;
                    &.active{
                        width: 40px;
                        left: 70px;
                    }
                }
            }
            .ant-tabs-active{
                text-align: center;
                .center{
                    padding-top: 10%;
                    padding-bottom: 10%;
                    img{
                        width: 18%;
                        max-width: 200px;
                        min-width: 100px;
                    }
                    div{
                        margin-top: 20px;
                        font-size: 14px;
                        color: rgba(0,0,0,.65);
                    }
                }
            }
            .ant-tabs-closed{
                margin-top: 20px;
                width: 100%;
                a{
                    text-decoration: none;
                    font-size: 16px;
                    .vote-list-card{
                        padding: 30px 20px;
                        box-shadow: 0 6px 40px 0 rgba(55,34,96,.07);
                        border-radius: 10px;
                        .l1{
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 14px;
                            .l1-l{
                                font-size: 1vw;
                                color: #333;
                            } 
                            .l1-r{
                                font-size: .6vw;
                                color: #999;
                                line-height: 17px;
                            }
                        }
                        .l2{
                            display: flex;
                            justify-content: space-between;
                            .l2-l{
                                color: #999;
                                background: hsla(0,0%,60%,.2);
                                border-radius: 13px;
                                padding: 5px 19px;
                                line-height: 1.5715;
                            }
                            .l2-r{
                                font-size: .6vw;
                                color: #999;
                                line-height: 17px;
                                .text333{
                                    color: #333;
                                }
                                .pool-supply{
                                    margin-left: 10px;
                                    .text333{
                                        color: #333;
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
    }
</style>