<template>
  <div class="FourNineHk">
    <div class="header">
      <img src="./4.9/hk_header.png" alt="">
    </div>
    <div class="content1">
      <div class="form">
        <input type="text" placeholder="输入股票名称/代码" style="width:234px;">
        <input type="text" placeholder="您的姓名..." style="width:190px;" v-model="postData1.NAME">
        <input type="text" placeholder="输入您的手机号..." style="width:353px;" v-model="postData1.PHONE">
        <button @click="post('postData1')">立即获取测评结果</button>
      </div>
    </div>
    <div class="content2">
      <img src="./4.9/2.png" alt="">
      <div class="form">
        <input type="text" placeholder="您的姓名..." style="width:190px;" v-model="postData2.NAME">
        <input type="text" placeholder="输入您的手机号..." style="width:353px;" v-model="postData2.PHONE">
        <button @click="post('postData2')">获取解决方案</button>
      </div>
    </div>
    <div class="content3">
      <img src="./4.9/3.png" alt="">
    </div>
    <div class="content4">
      <button @click="()=>tabnum=1" class="first">这么多港股选哪个</button>
      <button @click="()=>tabnum=2">何时买入？何时卖出？</button>
      <button @click="()=>tabnum=3">港股被套怎么办</button>
      <div v-show="tabnum===1" @click="modalOn('modal1')">
        <img src="./4.9/4.1.png" alt="">
      </div>
      <div v-show="tabnum===2" @click="modalOn('modal2')">
        <img src="./4.9/4.2.png" alt="">
      </div>
      <div v-show="tabnum===3" @click="modalOn('modal2')">
        <img src="./4.9/4.3.png" alt="">
      </div>
    </div>
    <div class="content5">
      <div>
        <input type="text" placeholder="您的姓名..." v-model="postData4.NAME">
      </div>
      <div>
        <input type="text" placeholder="输入您的手机号..."  v-model="postData4.PHONE">
      </div>
      <div>
        <button @click="post('postData4')">立即获取测评结果</button>
      </div>
    </div>
    <div class="modal" v-if="modal1||modal2">
      <div class="modal" @click.stop="offModal" style="position:fixed;"></div>
      <div class="modal1" v-if="modal1">
        <img src="./4.9/modal1.png" alt="">
        <div class="form">
          <div>
            <input type="text" placeholder="输入您的姓名" v-model="postData3.NAME">
          </div>
          <div>
            <input type="text" placeholder="输入您的电话号码" v-model="postData3.PHONE">
          </div>
          <div>
            <button @click="post('postData3')">立即获取</button>
          </div>
        </div>
      </div>
      <div class="modal2" v-if="modal2">
        <img src="./4.9/modal2.png" alt="">
        <div class="form">
          <div>
            <input type="text" placeholder="输入股票名称/代码">
          </div>
          <div>
            <input type="text" placeholder="输入您的姓名" v-model="postData3.NAME">
          </div>
          <div>
            <input type="text" placeholder="输入您的电话号码" v-model="postData3.PHONE">
          </div>
          <div>
            <button @click="post('postData3')">立即获取</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import post from './post.js'
export default {
  name: 'FourNineHk',
  data () {
    return {
      tabnum: 1,
      postData1: {},
      postData2: {},
      postData3: {},
      postData4: {},
      modal1: false,
      modal2: false
    }
  },
  methods: {
    post (postData) {
      this.$post(Object.assign({}, this[postData], {
        TERMINALSOURCE: 1,
        SOURCE: window.location.href.indexOf('vip.sxzctec095.cn') !== -1 ? 1 : 0,
        KEYWORD: window.location.search.replace(/(^\?)/, '') // window.location.href.split('?').pop()
      })).then(res => {
        console.log(res)
        this.postData = {}
        this.modal1 = false
        this.modal2 = false
      }).catch(err => {
        console.err(err)
        this.modal1 = false
        this.modal2 = false
      })
    },
    modalOn (modal) {
      this[modal] = true
    },
    know () {
      this.form = false
      this.success = false
    },
    offModal () {
      this.modal1 = false
      this.modal2 = false
    }
  }
}
</script>
<style scoped>
.modal{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  padding-top:100px;
}
.modal>div{
  display: inline-block;
  position: relative;
}
.modal>.modal1>.form{
  position: absolute;
  top:255px;
  left:50px;
}
.modal>.modal2>.form{
  position: absolute;
  top:120px;
  left:50px;
}
.modal>div>.form>div>input::-webkit-input-placeholder {
    font-size: 18px;
}
.modal>div>.form>div>input:-moz-placeholder {
    font-size: 18px;
}
.modal>div>.form>div>input:-ms-input-placeholder {
    font-size: 18px;
}
.modal>.modal1>.form>div>input{
  width: 330px;
  line-height: 46px;
  text-align: center;
  padding-left: 0;
  margin-left: 0;
  margin-bottom: 20px;
  font-size: 18px;
}
.modal>.modal2>.form>div>input{
  width: 420px;
  line-height: 46px;
  /* text-align: center; */
  padding-left: 30px;
  margin-left: 0;
  margin-bottom: 13px;
  font-size: 18px;
}
.modal>.modal1>.form>div>button{
  width: 330px;
  line-height: 53px;
  text-align: center;
  background-color: #dd3027;
  color: #ffffff;
  border: 0;
  border-radius: 10px;
  font-size: 30px;
  /* font-weight: bold; */
  margin-top:10px;
}
.modal>.modal2>.form>div>button{
  width: 420px;
  line-height: 58px;
  text-align: center;
  background-color: #458ac7;
  color: #ffffff;
  border: 0;
  border-radius: 10px;
  font-size: 30px;
  /* font-weight: bold; */
  margin-top:30px;
}
img{
  width: 100%;
}
input{
  border: 1px solid #cecfcf;
  border-radius: 10px;
  line-height: 76px;
  padding-left: 20px;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  font-size: 22px;
  margin-left: 16px;
}
input::-webkit-input-placeholder {
    color: #c0c0c0;
    font-size: 22px;
    line-height: 76px;
}
input:-moz-placeholder {
    color: #c0c0c0;
    font-size: 22px;
    line-height: 76px;
}
input:-ms-input-placeholder {
    color: #c0c0c0;
    font-size: 22px;
    line-height: 76px;
}
.content1{
  width: 100%;
  background: url('./4.9/hk_1.png') no-repeat;
  background-size: 100% 100%;
  padding: 284px 0 704px;
}
/* .content1>div{
  display: inline-block;
  margin:0 50px;
} */
.content1>.form img{
  width:391px;
}
/* .content2{
  width: 100%;
  background: url('./4.9/2.png') no-repeat;
  background-size: 80% 60%;
  padding: 384px 0 32px;
} */
.content2>img{
  width: 1041px;
  margin:48px 0 52px;
}
.form{
  margin-bottom: 71px;
}
.form>button{
  width: 394px;
  border: none;
  background-color: #458ac7;
  color: #f2e572;
  border-radius: 10px;
  font-size: 33.9px;
  line-height: 78px;
  vertical-align: bottom;
  margin-left: 16px;
}
.content4{
  padding-top: 56px;
}
.content4>button{
  width: 366px;
  border: none;
  background-color: #458ac7;
  color: #ffffff;
  font-size: 26px;
  line-height: 73px;
  vertical-align: bottom;
  margin-left: 16px;
   box-shadow: #95bcdf 2px 2px 3px 2px;
}
.content4>button.first{
  margin-left: 0;
}
.content4>div>img{
  width: 1142px;
}
.content5{
  width: 100%;
  background: url('./4.9/5.png') no-repeat;
  background-size: 100% 100%;
  padding: 245px 0 170px;
  margin-bottom: 30px;
}
.content5>div>input{
  line-height:44px;
  border-radius: 7px;
  width: 248px;
  margin-bottom: 24px;
  font-size: 20px;
  margin-left:0;
}
.content5>div>input::-webkit-input-placeholder{
  color: #b3b3b3;
  font-size: 20px;
  line-height:44px;

}
.content5>div>button{
  width: 246px;
  border: none;
  background-color: #f2e572;
  color: #458ac7;
  border-radius: 10px;
  font-size: 21px;
  line-height: 48px;
  vertical-align: bottom;
  border-radius: 7px;
}
</style>
