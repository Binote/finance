<template>
  <div class="XsOld">
    <div class="header">
      <img src="./xsOld/hk_header.png" alt="">
      <div class="form">
        <div>
          <input type="text" placeholder="请输入姓名..." v-model="postData.NAME">
        </div>
        <div>
          <input type="text" placeholder="请输入手机号..." v-model="postData.PHONE">
        </div>
        <div class="btn">
          <button @click="post"><img src="./xsOld/btn.png" alt=""></button>
        </div>
      </div>
    </div>
    <div class="content">
      <img src="./xsOld/content.png" alt="">
    </div>
    <div class="footer">
      <span>
        投资有风险 入市需谨慎
      </span>
    </div>
    <div class="down">
      <span>选股精准 把握先机</span>
      <button>免费下载</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'XsOld',
  data () {
    return {
      modal: false,
      postData: {}
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
input{
  width:13rem;
  border-radius: 0.25rem;
  border: 0;
  padding-left: 1.7rem;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  line-height: 2.5rem;
}
input::-webkit-input-placeholder {
    color: #a5a5aa;
    font-size: 0.9rem;
    letter-spacing:0.1rem;
}
input:-moz-placeholder {
    color: #a5a5aa;
    font-size: 0.8rem;
}
input:-ms-input-placeholder {
    color: #a5a5aa;
    font-size: 0.8rem;
}
.header{
  position: relative;
  margin-bottom: 2.5rem;
}

.header>.form{
  position: absolute;
  top:10.5rem;
  left:4.5rem;
}
.header>.form>div{
  margin-bottom: 1rem;
}
.header>.form>.btn>button{
  border: none;
  width: 13rem;
}
.footer{
  font-size: 1rem;
  color: #a1a1a1;
  line-height: 5rem;
}
.down{
  background-color: #1f77ce;
}
.down>span{
  color: #ffffff;
  line-height: 5rem;
  font-size: 0.8rem;
}
.down>button{
  width: 10rem;
  border: none;
  border-radius: 0.4rem;
  background-color: #248bf0;
  color: #ffffff;
  font-size: 1rem;
  line-height: 3rem;
  vertical-align: bottom;
  position: relative;
  top:-1.2rem;
  margin-left: 1rem;
}
</style>
