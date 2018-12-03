<template>
  <div class="XsLanding">
    <div class="header">
      <img src="./xsLanding/header.png" alt="">
    </div>
    <div class="content1">
      <div>
        <img src="./xsLanding/name.png" alt="">
        <input type="text" placeholder="姓名"  v-model="postData.NAME">
      </div>
      <div>
        <img src="./xsLanding/phone.png" alt="">
        <input type="text" placeholder="手机号" v-model="postData.PHONE">
      </div>
      <div>
        <button @click="verify">立即领取福利</button>
      </div>
    </div>
    <div class="content2">
      <img src="./xsLanding/2.png" alt="">
    </div>
    <div class="content3">
      <img src="./xsLanding/3.png" alt="">
    </div>
    <div class="content4">
      <img src="./xsLanding/4.png" alt="">
    </div>
    <div class="footer">
      <p>入市有风险 投资需谨慎</p>
      <p>陕西卓创信息科技有限公司</p>
    </div>
    <div class="modal" v-if="modal">
      <div @click="modalOff">
        <img src="./xsLanding/modal.png" alt="">
      </div>
    </div>
    <div class="dialog" v-if="phone||name||phoneerr">
      <div v-if="phone">
        请输入手机号
      </div>
      <div v-if="name">
        请输入姓名
      </div>
      <div v-if="phoneerr">
        手机号格式错误
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XsLanding',
  data () {
    return {
      modal: false,
      postData: {},
      phone: false,
      name: false,
      phoneerr: false
    }
  },
  methods: {
    post () {
      this.$post(Object.assign({}, this.postData, {
        TERMINALSOURCE: 0,
        SOURCE: window.location.href.indexOf('vip.sxzctec095.cn') !== -1 ? 1 : 0,
        KEYWORD: window.location.search.replace(/(^\?)/, '') // window.location.href.split('?').pop()
      })).then(res => {
        console.log(res)
        this.postData = {}
        this.modal = true
      }).catch(err => {
        console.err(err)
      })
    },
    modalOff () {
      this.modal = false
    },
    verify () {
      let valid = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/// 手机号码校验规则
      if (!this.postData.NAME) {
        this.name = true
      }
      if (!this.postData.PHONE) {
        this.phone = true
      }
      if (this.postData.PHONE && !valid.test(this.postData.PHONE)) {
        this.phoneerr = true
      }
      if (!this.postData.NAME || !this.postData.PHONE || !valid.test(this.postData.PHONE)) {
        setTimeout(() => {
          this.name = false
          this.phone = false
          this.phoneerr = false
        }, 1000)
      } else {
        this.post()
      }
    }
  }
}
</script>
<style scoped>
.dialog{
  position: fixed;
  left:6rem;
  top:15rem;
}
.dialog>div{
  width: 10rem;
  color: #ffffff;
  background-color: rgba(0,0,0,0.7);
  line-height: 3rem;
  margin: 2rem 0;
}
.modal{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  padding-top:150px;
}
.modal>div{
  display: inline-block;
  position: relative;
}
.modal>div>img{
  width:20rem;
}
img{
  width: 100%;
}
input{
  border: 0.1rem solid #c1c1c1;
  line-height: 3rem;
  padding-left: 3rem;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  font-size: 1.3rem;
  width: 17rem;
}
input::-webkit-input-placeholder {
    color: #c1c1c1;
    font-size: 1.3rem;
    line-height: 3rem;
}
input:-moz-placeholder {
    color: #c1c1c1;
    font-size: 1.3rem;
    line-height: 3rem;
}
input:-ms-input-placeholder {
    color: #c1c1c1;
    font-size: 1.3rem;
    line-height: 3rem;
}
.content1{
  padding: 2rem 0 1rem
}
.content1>div{
  margin-bottom: 2.3rem;
  position: relative;
}
.content1>div>button{
  width: 17rem;
  border: none;
  background-color: #107eef;
  color: #ffffff;
  font-size: 1.3rem;
  line-height: 3rem;
  vertical-align: bottom;
}
.content1>div>img{
  width: 1.3rem;
  position: absolute;
  top:0.5rem;
  left: 3.5rem;
}
.content3,.content4{
  margin-top: 2rem;
}
.footer{
  background-color: #152c44;
  width:100%;
  padding: 1rem 0 1.5rem;
}
.footer>p{
  /* line-height: 82px; */
  font-size: 1rem;
  color:#ffffff;
}
</style>
