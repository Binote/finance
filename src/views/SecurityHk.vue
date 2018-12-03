<template>
  <div class="SecurityHk">
    <div class="header">
      <div class="left">
        <img src="./securityPic/security_left.png" alt="">
      </div>
      <div class="login">
        <div class="input">
          <img src="./securityPic/security_icon_user.png" alt="">
          <input type="text" placeholder="请输入您的姓名" v-model="postData.NAME">
        </div>
        <div class="input">
          <img src="./securityPic/security_icon_phone.png" alt="">
          <input type="text" placeholder="请输入手机号码" v-model="postData.PHONE">
        </div>
        <div class="btn" @click="post">
          <img src="./securityPic/seciurty_btn_login.png" alt="">
        </div>
      </div>
    </div>
    <div class="content1">
      <img src="./securityPic/security_content1.png" alt="">
    </div>
    <div class="content2">
      <div class="left">
        <img src="./securityPic/security_content2_text.png" alt="">
        <div class="btn">
          <img src="./securityPic/security_content2_btn.png" alt="">
        </div>
      </div>
      <div class="right">
        <img src="./securityPic/security_content2_right.png" alt="">
      </div>
    </div>
    <div class="content3">
      <div class="left">
        <img src="./securityPic/security_content3_left.png" alt="">
      </div>
      <div class="right">
        <img src="./securityPic/security_content3_right.png" alt="">
        <div class="btn">
          <img src="./securityPic/security_content3_btn.png" alt="">
        </div>
      </div>
    </div>
    <div class="content4">
      <div class="left">
        <img src="./securityPic/securityhk_content4_left.png" alt="">
        <div class="btn">
          <img src="./securityPic/security_content4_btn.png" alt="">
        </div>
      </div>
      <div class="right">
        <img src="./securityPic/security_content4_right.png" alt="">
      </div>
    </div>
    <div class="footer">
      <span>投资有风险，入市需谨慎</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SecurityHk',
  data () {
    return {
      postData: {}
    }
  },
  methods: {
    post () {
      this.$post(Object.assign({}, this.postData, {
        TERMINALSOURCE: 1,
        SOURCE: window.location.href.indexOf('vip.sxzctec095.cn') !== -1 ? 1 : 0,
        KEYWORD: window.location.search.replace(/(^\?)/, '') // window.location.href.split('?').pop()
      })).then(res => {
        console.log(res)
        this.postData = {}
      }).catch(err => {
        console.err(err)
      })
    }
  }
}
</script>
<style scoped>
img{
  width: 100%;
}
.header{
  width:100%;
  padding: 350px 0 0;
  background: url('./securityPic/securityhk_header_bg.png') no-repeat;
  background-size: 100% 100%;
}

.header>div{
  display: inline-block;
/* margin:0 20px; */
  position: relative;
  bottom: -80px;
  /* margin-bottom: -34px; */
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
}
.header>.login{
  width:484px;
  padding: 155px 0 47px;
  background: url('./securityPic/security_login.png') no-repeat;
  background-size: 100% 100%;
  bottom: -30px;
}
.header>.login>.input{
  position: relative;
  margin-bottom: 43px;
}
.header>.login>.input>input{
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  height:58px;
  line-height: 58px;
  width: 415px;
  padding-left: 59px;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  font-size: 22px;
}
input::-webkit-input-placeholder {
    color: #c0c0c0;
    font-size: 22px;
    line-height: 58px;
}
input:-moz-placeholder {
    color: #c0c0c0;
    font-size: 22px;
}
input:-ms-input-placeholder {
    color: #c0c0c0;
    font-size: 22px;
}
.header>.login>.input>img{
  width: 24px;
  position: absolute;
  left:55px;
  top:11px;
}
.header>.login>.btn>img{
  width: 415px;
}
/* .header>.login>.btn{
  margin-bottom: 37px;
} */
.content1{
  padding-top: 50px;
  display: inline-block;
  margin-bottom: 56px;
}
.content2{
  width: 100%;
  background: url('./securityPic/security_content2_bg.png') no-repeat;
  background-size: 100% 100%;
  padding: 45px 0 63px;
}
.content2>div{
  display: inline-block;
  margin:0 10px;
}
.content3{
  width: 100%;
  background: url('./securityPic/security_content3_bg.png') no-repeat;
  background-size: 100% 100%;
  padding: 65px 0 75px;
}
.content3>div{
  display: inline-block;
  margin:0 50px;
}
.content3>.right>img{
  margin-bottom: 35px;
  margin-left: 25px;
}
.content4{
  width: 100%;
  background: url('./securityPic/security_content4_bg.png') no-repeat;
  background-size: 100% 100%;
  padding: 45px 0 63px;
}
.content4>div{
  display: inline-block;
  margin:0 10px;
}
.content4>.left>img{
  margin-bottom: 25px;
}
.footer{
  background-color: #fff;
  width:100%;
}
.footer>span{
  line-height: 82px;
  font-size: 14px;
  color:#b5b5b5;
}
</style>
