<template>
  <div id="myphotobox">
    <p class="title">照片<span>(关闭浏览器将清空)</span></p>
    <ul class="imgbox">
      <li class="imglist" v-for="img in render"><img :src="img"  alt=""></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
         imgdata :this.AppImg,
         render:[]
      }
    },
    props:["AppImg"],
    mounted:function(){
     Object.keys(sessionStorage).map(a=>this.render.push(sessionStorage[a]))  
    },
    watch:{
      imgdata:function(){
        var ss = Object.keys(sessionStorage)
        if(ss.length>8){
          ss.removeItem(0)
          ss.removeItem(1)
        }
        Object.keys(sessionStorage).map(a=>this.render.push(sessionStorage[a]))  
      }
    },
  }
</script>

<style scoped>
  #myphotobox {
    height: 100%;
    overflow-y: scroll;
  }
  .title {
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
  .title span {
    font-size: 16px;
    color:red;
  }
  .imgbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .imglist {
    margin: 10px ;
  }
  .imglist img {
    width: 400px;
  }
</style>
