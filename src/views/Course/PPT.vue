<template>
  <div class="course_ppt_wrapper" v-loading="loading">
    <div class="ai_talk">
      <p class="AI_avatar">
        <img src="@/assets/svg/chat.svg" alt="">
      </p>
      <span>根据课程内容生成PPT如下，如需调整，可直接点击内容直接调整</span>
    </div>
    <div class="content_wrapper">
      <div class="content_con">
        <h3 class="outline_head">内容</h3>
        <el-input v-model="textarea" type="textarea" autosize="true" placeholder="Please input content" />
        <button class="submit_btn" @click="next">PPT确认完毕 帮我生成配音讲稿</button>
      </div>
      <div class="outline_content">
        <h3 class="outline_head">PPT</h3>
        <article>
          <p class="content_tit">第一章：课题1</p>
          <p>第一节：节目1</p>
          <p>第二节：节目2</p>
          <p>第三节：节目3</p>
        </article>
        <article>
          <p class="content_tit">第二章：课题2</p>
          <p>第一节：节目1</p>
          <p>第二节：节目2</p>
          <p>第三节：节目3</p>
        </article>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import { store } from "@/store"
import router from "@/router";
const textarea = ref('第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3')

const loading = ref(false)
const next = () => {
  loading.value = true
  setTimeout(() => {
    store.activeIndex += 1
    router.push('/course/lecture')
  }, 2000)
}
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

.content_wrapper {
  display: flex;
  padding-left: 40px;
}
.outline_content {
  width: 40%;
}
.outline_head {
  display: inline-block;
  padding: 10px 30px;
  border-radius: 10px;
  background: #ccc;
  margin-bottom: 10px;
}
article {
  color: #000;
  background: #aaa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  line-height: 30px;
}
article>p:not(.content_tit) {
  margin-left: 10px;
}

.content_con {
    width: 30%;
    margin-right: 40px;
}
</style>