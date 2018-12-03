<template>
  <div class="StockMarket">
    <div class="header">
      <div class="pc" @click="modalOn">
        <img src="./HKSPIC/HKS_header_pc.png" alt="">
      </div>
      <div class="ios" @click="modalOn">
        <img src="./HKSPIC/HKS_header_ios.png" alt="">
      </div>
      <div class="and" @click="modalOn">
        <img src="./HKSPIC/HKS_header_and.png" alt="">
      </div>
    </div>
    <div class="content">
      <img src="./HKSPIC/SM_content.png" alt="">
    </div>
    <div class="footer" @click="modalOn">
      <div class="pc">
        <img src="./HKSPIC/HKS_header_pc.png" alt="">
      </div>
      <div class="ios" @click="modalOn">
        <img src="./HKSPIC/HKS_header_ios.png" alt="">
      </div>
      <div class="and" @click="modalOn">
        <img src="./HKSPIC/HKS_header_and.png" alt="">
      </div>
    </div>
    <div class="footer_modal">
      <img src="./HKSPIC/footer_modal.png" alt="">
      <div class="btn" @click="modalOn">
        <img src="./HKSPIC/down_btn.png" alt="">
      </div>
    </div>
    <div class="modal" v-if="modal">
      <div class="modal" @click.stop="offModal" style="position:fixed;"></div>
      <div>
        <img src="./HKSPIC/modal.png" alt="">
        <div class="form">
          <div>
            <input type="text" placeholder="请输入您的姓名" v-model="postData.NAME">
            <div v-if="!postData.NAME">
              <span>
                请输入您的姓名
              </span>
            </div>
          </div>
          <div>
            <input type="text" placeholder="请输入您的电话号码" v-model="postData.PHONE">
            <div v-if="!postData.PHONE">
              <span>
                请输入您的姓名
              </span>
            </div>
          </div>
          <div class="btn">
            <button @click="post">立即下载</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StockMarket',
  data () {
    return {
      modal: false,
      postData: {}
    }
  },
  methods: {
    post () {
      if (!this.postData.NAME || !this.postData.PHONE) {
        return
      }
      this.$post(Object.assign({}, this.postData, {
        TERMINALSOURCE: 1,
        SOURCE: window.location.href.indexOf('vip.sxzctec095.cn') !== -1 ? 1 : 0,
        KEYWORD: window.location.search.replace(/(^\?)/, '') // window.location.href.split('?').pop()
      })).then(res => {
        console.log(res)
        this.postData = {}
        this.modal = false
      }).catch(err => {
        console.err(err)
        this.modal = false
      })
    },
    modalOn () {
      this.modal = true
    },
    offModal () {
      this.modal = false
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
  padding-top:150px;
}
.modal>div{
  display: inline-block;
  position: relative;
}
.modal>div>.form{
  position: absolute;
  top:120px;
  left:61px;
  text-align: center;
}
.modal>div>.form>div{
    margin-bottom: 29px;
}
.modal>div>.form>div>div>span{
  font-size: 16px;
  color: #d11818;
  text-align: left;
  margin-left: 30px;
  float: left;
}
.modal>div>.form>div>input::-webkit-input-placeholder {
    font-size: 18px;
    color: #bebebe;
}
.modal>div>.form>div>input:-moz-placeholder {
    font-size: 18px;
    color: #bebebe;
}
.modal>div>.form>div>input:-ms-input-placeholder {
    font-size: 18px;
    color: #bebebe;
}
.modal>div>.form>div>input{
  width: 420px;
  line-height: 46px;
  padding-left: 30px;
  font-size: 18px;
  border-radius: 10px;
   box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  border: 1px solid #cecfcf;
}
.modal>div>.form>.btn{
  display: inline-block;
}
.modal>div>.form>div>button{
  width: 350px;
  line-height: 65px;
  text-align: center;
  background-color: #f7f568;
  color: #5594fe;
  border: 0;
  border-radius: 10px;
  font-size: 30px;
  /* font-weight: bold; */
  margin-top:10px;
}
.footer_modal{
  position: fixed;
  bottom:0;
}
.footer_modal>.btn{
  position: absolute;
  display: inline-block;
  top:32px;
  left:1000px;
}

img{
  width: 100%;
}
.header{
  width:100%;
  padding: 328px 0 180px;
  background: url('./HKSPIC/SM_header_bg.png') no-repeat;
  background-size: 100% 100%;
}
.header>div{
  display: inline-block;
  margin:0 20px;
}
.content{
  padding-top: 65px;
}
.footer{
  width:100%;
  padding: 75px 0 216px;
  background: url('./HKSPIC/SM_footer.png') no-repeat;
  background-size: 100% 100%;
  margin-bottom: 45px;
}
.footer>div{
  display: inline-block;
  margin:0 20px;
}
</style>
