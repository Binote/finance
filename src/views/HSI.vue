<template>
  <div class="HSI">
    <div class="header">
      <div class="pc">
        <img src="../assets/HSI_header_pc.png" alt="">
      </div>
      <div class="writer">
        <div class="copy">
          <img src="../assets/HSI_header_writer.png" alt="">
        </div>
        <div class="btn" style="text-align:left;" @click="modalOn">
          <img src="../assets/HSI_down_btn.png" alt="">
        </div>
      </div>
    </div>
    <div class="content1">
      <div class="banner">
        <img src="../assets/HSI_content1_banner.png" alt="">
      </div>
      <div class="write">
        <img src="../assets/HSI_content1_write.png" alt="">
        <div class="btn" @click="modalOn">
          <img src="../assets/HSI_content1_btn.png" alt="">
        </div>
      </div>
    </div>
    <div class="content2">
      <img src="../assets/HSI_content2.png" alt="">
    </div>
    <div class="content3">
      <div>
        <img src="../assets/HSI_content3.png" alt="">
        <div>
          <img src="../assets/HSI_content3_title.png" alt="">
          <div class="btn" @click="modalOn">
            <img src="../assets/HSI_content3_btn.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="content4">
      <img src="../assets/HSI_content4.png" alt="">
    </div>
    <div class="content5">
      <img src="../assets/HSI_content5.png" alt="">
    </div>
    <div class="content6">
      <img src="../assets/HSI_content6.png" alt="">
    </div>
    <div class="content7">
      <img src="../assets/HSI_content7.png" alt="">
    </div>
    <div class="content8">
      <img src="../assets/HSI_content8.png" alt="">
    </div>
    <div class="footer">
      <span>投资有风险，入市需谨慎</span>
    </div>
    <div class="modal" v-if="modal">
      <div class="modal" @click.stop="offModal" style="position:fixed;"></div>
      <div>
        <img src="../assets/modal2.png" alt="">
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
          <div>
            <button @click="post">立即下载</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HSI',
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
  left:162px;
}
.modal>div>.form>div{
    margin-bottom: 20px;
}
.modal>div>.form>div>div{
  font-size: 18px;
  color: #fef455;
  text-align: left;
  padding-left: 20px;
}
.modal>div>.form>div>input::-webkit-input-placeholder {
    font-size: 22px;
    color: #c0c0c0;
}
.modal>div>.form>div>input:-moz-placeholder {
    font-size: 22px;
    color: #c0c0c0;
}
.modal>div>.form>div>input:-ms-input-placeholder {
    font-size: 22px;
    color: #c0c0c0;
}
.modal>div>.form>div>input{
  width: 350px;
  line-height: 65px;
  padding-left: 30px;
  font-size: 22px;
  border-radius: 7px;
   box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
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
img{
  /* width: 100%; */
}
.header{
  width:100%;
  padding: 120px 0;
  background: url('../assets/HSI_header_bg.png') no-repeat;
  background-size: 100% 100%;
}
.header>div,.content1>div,.content3>div{
  display: inline-block;
}
.content1{
  padding: 70px 0;
}
.content1>.banner{
  margin-right: 10px;
}
.content1>.write{
  text-align: left;
}
.content3{
  width:100%;
  padding: 120px 0;
  background: url('../assets/HSI_content3_bg.png') no-repeat;
  background-size: 100% 100%;
  height:700px;
  position: relative;
}
.content3>div{
  position: relative;
  display: inline-block;
}
.content3>div>div{
    position: absolute;
    top: 100px;
    left: 50px;
}
.content4,.content5,.content6{
  padding: 70px 0;
  display: inline-block;
}
.content8{
  margin-top:-4px;
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
