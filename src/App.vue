<template>
  <div id="app">
    <!-- <link rel="stylesheet" href="./assets/base.css"> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{color:#000;background:#FFF;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,
fieldset,input,textarea,p,blockquote,th,td {
margin:0;
padding:0;
}
table{
border-collapse:collapse;
border-spacing:0;
}
fieldset,img {
border:0;
}
address,caption,cite,code,dfn,em,strong,th,var {
font-style:normal;
font-weight:normal;
}
ol,ul {
list-style:none;
}
caption,th {
text-align:left;
}
h1,h2,h3,h4,h5,h6 {
font-size:100%;
font-weight:normal;
}
q:before,q:after {
content:'';
}
abbr,acronym { border:0;
}
*{
    margin: 0px;
    padding: 0px;

}
a{
    text-decoration: none;
    color: #000000;
    font-size:15px;
    /*字体*/
}
li{
    list-style: none;
}
input,img{
    border: none;
}
input{
  outline: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.clearfix:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
.clearfix {
zoom: 1;
}
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
</style>
