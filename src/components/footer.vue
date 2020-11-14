<template>
    <div class="footer">
      <a class="link-item">Twitter</a>  
      <a class="link-item">Telegram</a>  
      <a class="link-item">WeChat</a>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footer{
        width: 100%;
        text-align: center;
        padding-bottom: 30px;
        margin-top: 30px;
    }
    .footer .link-item{
        color: #999;
        font-size: 12px;
        margin: 0 30px;
        text-decoration: none;
        cursor: pointer;
    }
    .footer .link-item:hover{
        color: #6726eb;
    }
    .footer .link-item:active{
        color: #6726eb;
    }
</style>