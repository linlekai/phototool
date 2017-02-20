<template>
  <div>
    <div class="header">
      联系我
    </div>
    <div class="content">
      <h3>
        <span>如果你觉得这个工具好用的话，请在 </span>
        <a class="github" href="https://github.com/linlekai/phototool" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i> Github</a> 
          <span>
            上给我点赞 
          </span>
      </h3>
      <h3><span>发现Bug可以发邮件给我</span>
        <i class="fa fa-envelope-o" aria-hidden="true"></i> llklovecode@gmail.com</h3>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    display: flex;
    font-size: 20px;
    line-height: 50px;
    height: 50px;
    padding: 0 10px;
    background-color: rgb(72,159,223);
    border-radius: 5px;
    color: #fff;
  }
  .github {
    color:blue;
  }
  .content {
    text-align: center;
    margin-top: 50px;
  }
</style>
