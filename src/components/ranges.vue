<template>
  <div id="ranges">
    <h3>色彩控制栏</h3>
    <ul class="rangeslist">
      <range v-for="list in lists" :name="list.rangename" v-on:parent="rangeChildren"></range>
    </ul>
  </div>
</template>

<script>
 import range from 'components/range.vue'
 export default {
  components:{
    range
  },
  data:function(){
   return {
    lists:[{rangename:"brightness"},
          {rangename:"vibrance"},
          {rangename:"hue"},
          {rangename:"clip"},
          {rangename:"stackBlur"},
          {rangename:"contrast"},
          {rangename:"saturation"},
          {rangename:"exposure"},
          {rangename:"sepia"},
          {rangename:"noise"},
    ]
   } 
  },
  methods:{
    rangeChildren:function(name,value){
      if(name === "brightness"){
        Caman('#canvas', function () {         
          this.brightness(value)
          this.render()
        })
      }else if(name === "vibrance"){
        Caman('#canvas', function () {        
          this.vibrance(value)
          this.render()
        })
      }else if(name === "hue"){
        Caman('#canvas', function () {         
          this.hue(value)
          this.render()
        })
      }else if(name === "gamma"){
        Caman('#canvas', function () {         
          this.gamma(value)
          this.render()
        })
      }else if(name === "clip"){
        Caman('#canvas', function () {         
          this.clip(value)
          this.render()
        })
      }else if(name === "clip"){
        Caman('#canvas', function () {        
          this.clip(value)
          this.render()
        })
      }else if(name === "clip"){
        Caman('#canvas', function () {         
          this.stackBlur(value)
          this.render()
        })
      }else if(name === "contrast"){
        Caman('#canvas', function () {       
          this.contrast(value)
          this.render()
        })
      }else if(name === "saturation"){
        Caman('#canvas', function () {        
          this.saturation(value)
          this.render()
        })
      }else if(name === "exposure"){
        Caman('#canvas', function () {          
          this.exposure(value)
          this.render()
        })
      }else if(name === "clip"){
        Caman('#canvas', function () {        
          this.clip(value)
          this.render()
        })
      }else if(name === "sepia"){
        Caman('#canvas', function () {         
          this.sepia(value)
          this.render()
        })
      }else if(name === "noise"){
        Caman('#canvas', function () {         
          this.noise(value)
          this.render()
        })
      }
    },
  }
 }


</script>

<style scoped>
  #ranges {
    height: 100%;
    overflow-y: scroll;
  }
  h3 {
    width: 100%;
    background-color: rgb(72, 159, 223);
    text-align: center;
    color: #fff;
    border-radius: 5px;
  }
  .rangeslist {
    margin-top: 10px;
    width: 100%;
    /*background-color: red;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .rangeslist li {
    height: 70px;
    line-height: 40px;
    text-align: center;
    border-top: 2px solid rgb(211,211,211); 
  }
  .input {
    width: 30px;
  }
  
  /*vue过渡动画*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
