<template>
  <div class="XsPage">
    <header>
      <div class="title">
        <img src="../assets/title.png" alt="">
      </div>
      <div class="content">
        <div class="watch">
          <img src="../assets/header_watch.png" alt="">
        </div>

        <div class="diagnosticBox">
          <div class="text">
            <span>
              专业诊股 锁定买卖时机
            </span>
          </div>
          <div class="input">
            <input type="text" placeholder="请输入股票代码或名称...">
          </div>
          <div class="btn" @click="modalOn">
            <img src="../assets/button.png" alt="">
          </div>
        </div>
      </div>
    </header>
    <div class="classify">
        <img src="../assets/xs_content1.png" alt="">
    </div>
    <div class="content1">
      <img src="../assets/xs_content2.png" alt="">
    </div>
    <div class="content2">
      <img src="../assets/xs_content3.png" alt="">
    </div>
    <div class="content3">
      <div class="title">
        <img src="../assets/xs_content3_title.png" alt="">
      </div>
      <div class="input">
        <input type="text" placeholder="请输入股票代码或名称...">
      </div>
      <div class="btn">
        <img src="../assets/button.png" alt="">
      </div>
      <div class="text">
        <span>
          免费获取诊断报告 股票涨跌早知道
        </span>
      </div>
    </div>
    <div class="footer">
      <p>投资有风险，选择需谨慎</p>
      <p>从市证券投资或期货交易，请通过合法证券期货经营机构进行。</p>
      <p>合法机构名单可到中国证监会网站（www.csrc.gov.cn）查询。</p>
      <p>湖南巨景证券投资顾问有限公司安徽分公司 皖ICP备17010396号</p>
    </div>
    <div class="modal" v-if="form">
      <div class="modal" @click.stop="offModal" style="position:fixed;"></div>
      <div class="kuanng" v-if="form">
        <img src="../assets/xs_modal.png" alt="">
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'XsPage',
  data () {
    return {
      form: false,
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
    }
  }
}
</script>
<style scoped>
.modal>.kuanng>.form>.btn>button{
  background-color: #ffd323;
  color: #113d79;
  width: 15rem;
  border: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 3rem;
  font-weight: bold
}
.modal>.kuanng>.form>.btn>button:hover{
  background-color: #74977e;
  color: #1259a1;
}
.modal>.kuanng>.form>div{
  margin:1rem 0;
}
.modal>.kuanng>.form{
  margin-top: -15rem;
}
.modal>.kuanng>img{
  width: 20rem;
}
.modal{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  padding-top:250px;
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
.XsPage{
  background-color: #136dbd;
}
.XsPage>header{
  width: 100%;
  background: url('../assets/xs_header_bg.png') no-repeat;
  background-size:100% 100%;
  padding-bottom: 4rem;
}
/* .XsPage>header>.content{
  display: flex;

} */
.XsPage>header>.title>img{
  width:17rem;
  margin-left: -2rem;
}
.XsPage>header>.content>.watch img{
  margin-top: 1rem;
  width:10rem;
}
.XsPage>header>.content>.diagnosticBox>.input{
margin-top: 1rem;
}
input{
  width:15rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 0;
  padding-left: 1.7rem;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
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
.XsPage>header>.content>.diagnosticBox>.btn{
  margin-top:1rem;
}
.XsPage>header>.content>.diagnosticBox>.btn img{
  width: 14.5rem;
}
/* .clearfix:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
} */
.text{
  color: #fff;
  font-size: 1rem;
  margin-top:0.5rem;
  letter-spacing:0.3rem;
}
.XsPage>.classify{
  background-color: #136dbd;
  width:100%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  padding-top:0.2rem;
  padding-bottom:1rem;
  padding: 0.2rem 1rem 1rem;
}
.XsPage>.classify>img{
  width:100%;
}
.XsPage>.content1{
  background-color: #136dbd;
}
.XsPage>.content1 img{
  width:100%;
}
.XsPage>.content3{
  background-color: #136dbd;
  background-image: url('../assets/xs_content3_bg.png');
  background-size: 100% 100%;
  margin-top:-0.3rem;
  padding:2.5rem 0 1.5rem;
}
.XsPage>.content3>.title>img{
  width:14rem;
}
.XsPage>.content3>.input{
  margin-top: 1rem;
}
.XsPage>.content3>.btn{
  margin-top:1rem;
}
.XsPage>.content3>.btn img{
  width: 14.5rem;
}
.XsPage>.content3>.text{
  font-size: 0.6rem;
  margin-top:0.5rem;
  letter-spacing:0.05rem;
}
.XsPage>.content2{
  background-color: #136dbd;
  width:100%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  margin-top:-0.3rem;
}
.XsPage>.content2>img{
  width:100%;
}
.XsPage>.content2>.content2_title{
  margin-left: 407px;
  margin-top:65px;
}
.XsPage>.content2>.input{
  margin-top:70px;
  margin-left: 65px;
}
.XsPage>.content2>.btn{
  margin-top:70px;
  margin-left: 65px;
}
.footer{
  background-color: #fff;
  width:100%;
  padding: 1rem 0 1rem;
}
.footer>p{
  font-size: 0.25rem;
  color: #909090;
}
</style>
