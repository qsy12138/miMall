<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">钱思远主页</a><span>|</span>
            <a href="">Vue全栈课程</a><span>|</span>
            <a href="">React全家桶课程</a><span>|</span>
            <a href="">微信支付专项课程(H5+小程序+Node+Mongo)</a>
        </div>
        <div class="copyRight">Copyright @2019 mi.futurefe.com.com All Rights Reserved</div>
    </div>
</template>

<script>
export default {
    name:'nav-footer'
}
</script>

<style lang="scss" scoped>
    .footer{
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 56px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
    }
</style>