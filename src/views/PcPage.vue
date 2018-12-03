<template>
  <div class="PcPage">
    <header>
      <div class="title">
        <img src="../assets/title.png" alt="">
      </div>
      <div class="content clearfix">
        <div class="watch">
          <img src="../assets/header_watch.png" alt="">
        </div>
        <div class="diagnosticBox">
          <div class="rec_title">
            <img src="../assets/rec2_title.png" alt="">
          </div>
          <div class="input">
            <input type="text" placeholder="请输入股票代码或名称...">
          </div>
          <div class="btn" @click="modalOn">
            <img src="../assets/button.png" alt="">
          </div>
          <div class="text">
            <span>
              （*由于诊断人数较多，每人仅限一支股票）
            </span>
          </div>
        </div>
      </div>

    </header>
    <div class="classify">
        <img src="../assets/classify.png" alt="">
    </div>
    <div class="content1">
      <img src="../assets/content1.png" alt="">
    </div>
    <div class="content2">
      <div class="content2_title">
        <img src="../assets/content2_title.png" alt="">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入股票代码或名称...">
      </div>
      <div class="btn"  @click="modalOn">
        <img src="../assets/button.png" alt="">
      </div>
    </div>
    <div class="content3">
      <img src="../assets/content3.png" alt="">
    </div>
    <div class="content2">
      <div class="content2_title">
        <img src="../assets/content2_title.png" alt="">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入股票代码或名称...">
      </div>
      <div class="btn"  @click="modalOn">
        <img src="../assets/button.png" alt="">
      </div>
    </div>
    <div class="footer">
     <p>投资有风险，选择需谨慎</p>
      <p>从市证券投资或期货交易，请通过合法证券期货经营机构进行。</p>
      <p>合法机构名单可到中国证监会网站（www.csrc.gov.cn）查询。</p>
      <p>湖南巨景证券投资顾问有限公司安徽分公司 皖ICP备17010396号</p>
    </div>
    <div class="modal" v-if="form||success">
      <div class="modal" @click.stop="offModal" style="position:fixed;"></div>
      <div class="kuanng" v-if="form">
        <img src="../assets/modal.png" alt="">
        <div class="form">
          <div class="input">
            <input type="text" placeholder="请输入您的姓名..." v-model="postData.NAME">
          </div>
          <div class="input">
            <input type="text" placeholder="请输入您的手机号码..." v-model="postData.PHONE">
          </div>
          <div class="btn">
            <button @click="post">立即诊断</button>
          </div>
        </div>
      </div>
      <div class="success" v-if="success" @click="know">
        <img src="../assets/success.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
// import post from './post.js'
export default {
  name: 'PcPage',
  data () {
    return {
      form: false,
      success: false,
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
        this.form = false
        this.success = true
      }).catch(err => {
        console.err(err)
      })
    },
    modalOn () {
      this.form = true
      this.success = false
    },
    know () {
      this.form = false
      this.success = false
    },
    offModal () {
      this.form = false
      this.success = false
    }
  }
}
</script>
<style scoped>
.modal>.kuanng>.form>.btn>button{
  background-color: #ffd323;
  color: #113d79;
  width: 349px;
  border: 0;
  border-radius: 10px;
  font-size: 30px;
  line-height: 63px;
  font-weight: bold
}
.modal>.kuanng>.form>.btn>button:hover{
  background-color: #74977e;
  color: #1259a1;
}
.modal>.kuanng>.form>div{
  margin:10px 0;
}
.modal>.kuanng>.form{
  margin-top: -280px;
}
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
.PcPage>header{
  width: 100%;
  background: url('../assets/header_bg.png') no-repeat;
  background-size:100% 100%;
}
.PcPage>header>.content{
  padding: 40px 0 45px;
}
.PcPage>header>.content>div{
  display: inline-block;
  /* margin-top: 40px;
  margin-bottom: 45px; */
}
.PcPage>header>.content>.watch{
  /* float: left;
  margin-left:447px; */
  /* margin-top: 40px; */
}
.PcPage>header>.content>.diagnosticBox{
  background: url('../assets/rectangular2.png');
  width: 434px;
  height: 435px;
  /* position: relative;
  top:-80px; */
  vertical-align: top;
  margin-top: 80px;
  /* float: left; */
  /* margin-left:29px; */
  /* margin-top: -70px; */
  /* margin-bottom: 45px; */
}
.PcPage>header>.content>.diagnosticBox>.rec_title{
  margin-top: 30px;
}
.PcPage>header>.content>.diagnosticBox>.input{
  margin-top: 30px;
}
input{
  width:349px;
  line-height: 64px;
  border-radius: 10px;
  border: 0;
  padding-left: 28px;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  font-size: 18px;
}
input::-webkit-input-placeholder {
    color: #a5a5aa;
    font-size: 18px;
    line-height: 64px;
}
input:-moz-placeholder {
    color: #a5a5aa;
    font-size: 18px;
    line-height: 64px;
}
input:-ms-input-placeholder {
    color: #a5a5aa;
    font-size: 18px;
    line-height: 64px;
}
.PcPage>header>.content>.diagnosticBox>.btn{
  margin-top:64px;
}
/* .clearfix:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
} */
.text{
  color: #fff;
  font-size: 18px;
  margin-top:23px;
}
.PcPage>.classify{
  background-color: #136dbd;
  width:100%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  padding-top:27px;
  padding-bottom:37px;
}
.PcPage>.content1{
  background-color: #136dbd;
  background: url('../assets/content1_bg.png') no-repeat;
  background-size: 100% 100%;
  padding: 45px 0 52px;
}
/* .PcPage>.content1 img{
  width:100%;
} */
.PcPage>.content3{
  background-color: #136dbd;
  background: url('../assets/content1_bg.png') no-repeat;
  background-size: 100% 100%;
  padding: 45px 0 52px;
}
/* .PcPage>.content3 img{
  width:100%;
} */
.PcPage>.content2{
  background-color: #136dbd;
  width:100%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  /* padding-top:27px; */
  /* padding-bottom: 50px; */
  text-align: center;
}
.PcPage>.content2>div{
  display: inline-block;
  vertical-align: top;
  margin:61px 30px 56px;
}
/* .PcPage>.content2>.content2_title{
  margin-left: 407px;
  margin-top:65px;
}
.PcPage>.content2>.input{
  margin-top:70px;
  margin-left: 65px;
}
.PcPage>.content2>.btn{
  margin-top:70px;
  margin-left: 65px;
} */
.footer{
  background-color: #fff;
  width:100%;
  padding: 34px 0 40px;
}
.footer>p{
  /* line-height: 82px; */
  font-size: 14px;
  color:#b5b5b5;
}
</style>
