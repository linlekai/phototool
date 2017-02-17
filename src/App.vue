<template>
  <div id="app">
    <div id="nav">
      <h2 class="logobox"><p><i class="fa fa-skyatlas" aria-hidden="true"></i></p><span>XX</span></h2>
      <ul class="userlist">
        <li class="compile">
          <router-link to="/core" >
            <i class="fa fa-gear" aria-hidden="true"></i>
            <span>编辑图片</span>
          </router-link>
        </li>
        <li class="myphoto">
          <router-link to="/myphoto">
            <i class="fa fa-list" aria-hidden="true"></i>
            <span>我的图片</span>
          </router-link>
        </li>
        <li class="photogallery">
          <router-link to="/photogallery">
            <i class="fa fa-500px" aria-hidden="true"></i>
            <span>图库</span>
          </router-link>
        </li>
        <li class="callme">
          <router-link to="/callme">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>联系我</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div id="content" > 
      <transition name="fade">
        <keep-alive>
          <router-view v-on:collect="collection" v-on:read="isRead" name="a">
            <!-- <core    ></core>   -->
          </router-view>
        <keep-alive>
      </transition>    

      <transition name="fade">
        <!-- <keep-alive> -->
          <router-view :AppImg="singe"> 
          </router-view>
        <!-- <keep-alive> -->
      </transition>


    </div>
    <div id="range">
      <transition name="fade">
        <router-view name="b">
          <ranges></ranges>
        </router-view>
      </transition>
    </div>
    <div id="photostyle"></div>
  </div>
</template>

<script>
import core from 'components/core.vue'
import ranges from 'components/ranges.vue'
import range from 'components/range.vue'
import callme from 'components/callme.vue'
import myphoto from 'components/myphoto.vue'
import Router from 'vue-router'

// const router = new Router({
//   routes: [
//     // 动态路径参数 以冒号开头
//     { path: '/core', component: core }
//   ]
// })

export default {
  components:{
    core,
    ranges,
    callme,
    myphoto
  },
  data:function(){
    return {
      isReadfile:false,
      collectionData:[],
      singe:[],
      showRanges:false
    }
  },
  methods:{
    isRead:function(newvalue,a){
      // console.log(a)
      this.isReadfile = newvalue
    },
    collection:function(data){
      this.collectionData.push(data)
    },
  },
  watch:{
    collectionData:function(){
      var result = new Set(this.collectionData)
      this.singe = Array.from(result) 
    },
    singe:function(){
      var img = this.singe
      if(img.length <=0){
        return
      }else{
        sessionStorage.setItem(img.length-1,img[img.length-1])
      }
    }
  },
  updated:function(){
    var box = []
    Object.keys(sessionStorage).map(a=>box.push(sessionStorage[a]))
    this.singe = box
  },
}
</script>

<style src="../static/font-awesome-4.7.0/css/font-awesome.min.css"></style> 
<style>

html, body {
  height: 100%;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  color: #34495e;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #34495e;
}
ul {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  background-color: rgb(234,234,234);
  display: flex;
}
#nav {
  width: 230px;
  min-width: 180px;
  height: 100%;
  background-color: rgb(234, 234, 234);
  display: flex;
  flex-direction: column;
  border-right: 4px solid rgb(209, 209, 209);
}
#content {
  flex-grow: 1;
  min-width: 600px;
  width: 100%;
  height: 100%;
  border-right: 4px solid rgb(209, 209, 209);
}
#range {
  width: 270px;
  background-color: rgb(234,234,234);
}
.logobox {
  font-size: 26px;
  display: flex;
  line-height: 30px;
  height: 50px;
  background-color: rgb(72, 159, 223);
  vertical-align: middle;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  border-radius: 5px;
}
.logobox i {
  font-size: 36px;
  color: rgb(234, 234, 234);
}
.logobox span {
  margin-left: 30px;
  color: #fff;
}
.userlist {
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.userlist li {
  margin: 10px 0;
}
.userlist li a {
  font-size: 20px;
}
.userlist li span {
  margin-left: 10px;
}
.userlist li:hover span {
  color: #ff6700;
}
</style>
