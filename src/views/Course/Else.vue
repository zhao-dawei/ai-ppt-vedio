<template>
  <div class="course_else_wrapper">
    <div class="ai_talk">
      <p class="AI_avatar">
        <img src="@/assets/svg/chat.svg" alt="">
      </p>
      <span>您可选择您需要的其他内容：</span>
    </div>
    <div class="else_wrapper">
      <div class="btns">
        <p>生成测试题</p>
        <p>生成宣传图</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.ai_talk {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.AI_avatar {
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background: rgb(25, 195, 125);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}
.btns {
  display: flex;
  padding-left: 50px;
}
.btns p {
  width: 300px;
  height: 200px;
  background: #7ad380;
  border-radius: 50px;
  margin-right: 30px;
  font-size: 30px;
  text-align: center;
  line-height: 200px;
}
</style>