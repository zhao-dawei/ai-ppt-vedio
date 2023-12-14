<template>
    <div class="course_content_wrapper">
      <div class="ai_talk">
          <p class="AI_avatar">
          <img src="@/assets/svg/chat.svg" alt="">
          </p>
          <span>根据课程大纲推荐课程内容如下，如需调整，可直接点击文稿调整</span>
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
</style>