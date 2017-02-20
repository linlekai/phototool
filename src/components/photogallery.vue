<template>
  <transition name="fade">
    <div class="box">
      <header class="photo-header">
        <span>图库</span>
       <p class="title">编辑图片，请先下载到本地</p>
      </header>
      <section>
        <ul class="photoul">
          <li v-for="photo in photobox">
            <img class="photo" :src='"https://xieranmaya.github.io/images/cats/"+photo.url' alt="">
          </li>
          <div class="buttonbox">
            <button class="more" @click="watchmore">加载更多</button>
          </div>
        </ul>
      </section>
    </div>
  </transition > 
</template>

<script>
  export default {
     data:function(){
        return {
          photobox:[],
        }
     },
     mounted:function(){
        var that = this
          $.get("https://xieranmaya.github.io/images/cats/cats.json",function(data){
            that.photobox = data
            // console.log(data)
        })
     },
     methods:{
       watchmore:function(){
        var that = this
          for(var i = 0;i<=8;i++){
            $.get("",function(data){
              that.photobox.push(data)
            })
          }
         console.log("oooooooooooooooookkkkkkk")
       }
     }
  } 
</script>

<style scoped>
  .box {
    height: 100%;
    overflow-y: scroll;
  }
  .photo-header {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 50px;
    height: 50px;
    padding: 0 10px;
    background-color: rgb(72,159,223);
    border-radius: 5px;
    color: #fff;
  }
  .title {
    padding-left: 10px;
  }
  .photoul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .photoul li {
    margin: 10px;
  }
  .photo {
    width: 400px;
    /*height: 300px;*/
  }
  .buttonbox {
    width: 100%;  
    display: flex;
    justify-content: center;
  }
  .more {
    background-color: rgb(72,159,223);
    width: 100px;
    height: 50px;
    border-radius: 5px;
    font-size: 18px;
    outline: none;
    border:none;
    cursor: pointer;
    color: #fff;
  }
  .more:hover {
    color: #f15;  
  }




   .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
