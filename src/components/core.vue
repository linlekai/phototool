<template>
  <div id="core">
    <header>
      <a  class="file">上传图片
        <input type="file" id="file"  accept="image/png,image/jpeg"  @change="readFile($event)" >
      </a> 
      <transition name="fade">
        <input type="text" class="save" v-model="savename" placeholder="请输入保存的文件名" v-if="download">
      </transition>
      <transition name="fade">
        <a  @click="save" :href="saveDataURI" :download="savename" class="download" v-if="download" >下载</a>
      </transition>
      <transition name="fade">
        <a class="remove" v-if="download" @click="remove">删除图片</a>
      </transition>
      <transition name="fade">
        <a v-if="download" @click="reset" class="reset">重置</a>
      </transition>
      <transition name="fade">
        <a v-if="download" @click="Collection" class="collection" title="短暂性收藏，关闭浏览器将清空">收藏</a>
      </transition>
    </header>
    <div id="box">
      <img :src="dataURI" id="img" ref="a" >
    </div>
    <transition name="fade">
    <footer id="footer" v-if="download">
       <div class="swiper-container" v-if="download">
          <div class="swiper-wrapper" v-once>
            <div class="swiper-slide" style="background-image:url(../static/lome.png)" @click="lome">Lome</div>
            <div class="swiper-slide" style="background-image:url(../static/vintage.png)" @click="vintage">Vintage</div>
            <div class="swiper-slide" style="background-image:url(../static/clarity.png)" @click="clarity">Clarity</div>
            <div class="swiper-slide" style="background-image:url(../static/sincity.png)" @click="sinCity">SinCity</div>
            <div class="swiper-slide" style="background-image:url(../static/sunrise.png)" @click="sunrise">Sunrise</div>
            <div class="swiper-slide" style="background-image:url(../static/corssProcess.png)" @click="corssProcess">CorssProcess</div>
            <div class="swiper-slide" style="background-image:url(../static/orangePeel.png)" @click="orangePeel">OrangePeel</div>
            <div class="swiper-slide" style="background-image:url(../static/love.png)" @click="love">Love</div>
            <div class="swiper-slide" style="background-image:url(../static/grungy.png)" @click="grungy">Grungy</div>
            <div class="swiper-slide" style="background-image:url(../static/jarques.png)" @click="jarques">Jarques</div>
            <div class="swiper-slide" style="background-image:url(../static/pinhole.png)" @click="pinhole">Pinhole</div>
            <div class="swiper-slide" style="background-image:url(../static/oldBoot.png)" @click="oldBoot">OldBoot</div>
            <div class="swiper-slide" style="background-image:url(../static/glowingSun.png)" @click="glowingSun">GlowingSun</div>
            <div class="swiper-slide" style="background-image:url(../static/hazyDays.png)" @click="hazyDays">HazyDays</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    </footer>
   </transition> 
  </div>
</template>

<script>

export default {
  data:function(){
    return {
      download: false,
      dataURI:'',
      hadDataURI:false,
      saveDataURI:'',
      savename:"",
    }
  },
  methods:{
    readFile:function(event){
         var file = event.target
         var fileData = file.files[0]
         if($("#canvas")){$("#canvas").remove()}
         return new Promise(function(resolve,reject){
           var reader = new FileReader()
           reader.readAsDataURL(fileData,"UTF8")
           reader.addEventListener("load",function(){
             console.log("ok")
             resolve(reader.result)
           })
         }).then(dataURI=>{
              this.dataURI = dataURI
              this.hadDataURI = true
            },rej=>{
             console.log("error")
             alert("加载失败,请重试") 
            }).then(res=>{           
            //将图片转换为canvas
            var canvas = document.createElement("canvas")
            $(canvas).attr({id:"canvas",width:$("#content").width(),height:$("#content").height()})
              $("#box").append($(canvas))
              var cx = $("#canvas")[0].getContext("2d")
              var img = $("#img")[0]
              cx.drawImage(img,10,10,$("#img")[0].width>800?800:$("#img")[0].width,$("#img")[0].height>600?600:$("#img")[0].height)
            this.download = true
            }).then(resolve=>{
              // 初始化Swiper
              new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                effect: 'coverflow',
                grabCursor: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                centeredSlides: true,
                slidesPerView: 'auto',
                loop:true,
                keyboardControl:true,
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true,
                }
              })
            this.$emit("read",this.download)
            }) //异步结束
      },
      save:function(){
        this.saveDataURI = $("#canvas")[0].toDataURL("image/png")
      },
      remove:function(){
        this.download = false
        this.dataURI = ''
        this.hadDataURI = false
        this.$emit("read",this.download)
        $("#canvas").remove()
        $("#file")[0].value = ""
      },
      reset:function(){
        if($("#canvas")){$("#canvas").remove()}
        var img = $("#img")[0]
        var canvas = document.createElement("canvas")
        $(canvas).attr({id:"canvas",width:$("#content").width(),height:$("#content").height()})
        $("#box").append($(canvas))
        var cx = $("#canvas")[0].getContext("2d")
        cx.drawImage(img,10,10,$("#img")[0].width>800?800:$("#img")[0].width,$("#img")[0].height>600?600:$("#img")[0].height) 
      },
      Collection:function(){
        this.$emit("collect",$("#canvas")[0].toDataURL("image/png"))
      },
      lome:function(){
        Caman('#canvas', function () {
          this.brightness(15);
          this.exposure(15);
          this.curves("rgb", [0, 0], [200, 0], [155, 255], [255, 255]);
          this.saturation(-20);
          this.gamma(1.8);
          this.render()
        })
      },
      vintage:function(){
        Caman('#canvas', function () {
          this.greyscale();
          this.contrast(5);
          this.noise(3);
          this.sepia(100);
          this.channels({
            red: 8,
            blue: 2,
            green: 4
          });
          this.gamma(0.87);
          this.render()
        })
      },
      clarity:function(){
        Caman('#canvas', function () {
          this.vibrance(20);
          this.curves("rgb", [5, 0], [130, 150], [190, 220], [250, 255]);
          // this.sharpen(15);
          // this.vignette("45%", 20);
          this.greyscale();
          this.contrast(4)
          this.render()
        })
      },
      sinCity:function(){
        Caman('#canvas', function () {
          this.contrast(30);
          this.brightness(15);
          this.exposure(10);
          // this.posterize(80);
          this.clip(30);
          this.render()
        })
      },
      sunrise:function(){
        Caman('#canvas', function () {
          this.exposure(3.5);
          this.saturation(-5);
          this.vibrance(50);
          this.sepia(60);
          this.colorize("#e87b22", 10);
          this.channels({
            red: 8,
            blue: 8
          });
          this.contrast(5);
          this.gamma(1.2);
          this.render()
        })
      },
      corssProcess:function(){
        Caman('#canvas', function () {
          this.exposure(5);
          this.colorize("#e87b22", 4);
          this.sepia(20);
          this.channels({
            blue: 8,
            red: 3
          });
          this.curves("b", [0, 0], [100, 150], [180, 180], [255, 255]);
          this.contrast(15);
          this.vibrance(75);
          this.render()
        })
      },
      orangePeel:function(){
        Caman('#canvas', function () {
          this.curves("rgb", [0, 0], [100, 50], [140, 200], [255, 255]);
          this.vibrance(-30);
          this.saturation(-30);
          this.colorize("#ff9000", 30);
          this.contrast(-5);
          this.render()
        })
      },
      love:function(){
        Caman('#canvas', function () {
          this.brightness(5);
          this.exposure(8);
          this.contrast(4);
          this.colorize("#c42007", 30);
          this.vibrance(50);
          this.render()
        })
      },
      grungy:function(){
        Caman('#canvas', function () {
          this.gamma(1.5);
          this.clip(25);
          this.saturation(-60);
          this.contrast(5);
          this.noise(5);
          this.render()
        })
      },
      jarques:function(){
        Caman('#canvas', function () {
          this.saturation(-35);
          this.curves("b", [20, 0], [90, 120], [186, 144], [255, 230]);
          this.curves("r", [0, 0], [144, 90], [138, 120], [255, 255]);
          this.curves("g", [10, 0], [115, 105], [148, 100], [255, 248]);
          this.curves("rgb", [0, 0], [120, 100], [128, 140], [255, 255])
          this.render()
        })
      },
      pinhole:function(){
        Caman('#canvas', function () {
          this.greyscale()
          this.sepia(10)
          this.exposure(10)
          this.contrast(15)
          this.render()
        })
      },
      oldBoot:function(){
        Caman('#canvas', function () {
          this.saturation(-20)
          this.vibrance(-50)
          this.gamma(1.1)
          this.sepia(30)
          this.channels({
              red: -10,
              blue: 5
          })
          this.curves("rgb", [0, 0], [80, 50], [128, 230], [255, 255])
          this.render()
        })
      },
      glowingSun:function(){
        Caman('#canvas', function () {
          this.brightness(10);
          this.gamma(0.8);
          this.contrast(50);
          this.render()
        })
      },
      hazyDays:function(){
        Caman('#canvas', function () {
          this.gamma(1.2)
          this.render()
        })
      },

  }
}








</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #core {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    #box {
      width: 100%;
      height: 74%;
      display: flex;
    }
    #img {
      width: 400px;
      display: none;
    }
    header {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      height: 30px;
      border-bottom: 2px solid rgb(209,209,209);
      padding: 10px;
      border-radius: 5px;
    }
    .file {
      position: relative;
      display: inline-block;
      background: rgb(72, 159, 223);
      border: 1px solid #99D3F5;
      border-radius: 4px;
      padding: 4px 12px;
      overflow: hidden;
      color: #FFF;
      text-decoration: none;
      text-indent: 0;
      line-height: 20px;
  }
  .file input {
      position: absolute;
      font-size: 100px;
      right: 0;
      top: 0;
      opacity: 0;
      cursor: pointer;
  }
  .file:hover,.download:hover,.remove:hover,.reset:hover,.collection:hover {
      border-color: #78C3F3;
      color: #ff6700;
      text-decoration: none;
      cursor: pointer;
  }
  .download,.remove,.reset,.save,.collection{
      display: inline-block;
      background: rgb(72, 159, 223);
      border: 1px solid #99D3F5;
      border-radius: 4px;
      padding: 4px 12px;
      overflow: hidden;
      color: #FFF;
      text-decoration: none;
      text-indent: 0;
      line-height: 20px;
      margin-left: 10px;
  }
  .save {
    outline: none;
  }
  #footer {
    /*background-color: green;*/
    width: 100%;
    height: 20%;
    border-top: 5px solid rgb(222,222,222);
  }


  /*swiper样式*/
    .swiper-container {
        width: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 200px;
        height: 130px;
        color:#fff;
        text-indent: 5px;
    }

  /*vue过渡效果*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
