<template>
  <div class="course_video_wrapper" v-loading="loading">
    <div class="ai_talk">
      <p class="AI_avatar">
        <img src="@/assets/svg/chat.svg" alt="">
      </p>
      <span>根据内容和PPT，推荐讲稿如下，如需调整，可直接点击直接调整</span>
    </div>
    <div class="content_wrapper">
      <div class="content_con">
        <h3 class="outline_head">讲稿</h3>
        <div class="lecture_text" @click="handleClickLecture" v-show="!isEdit">
          <article>
            <ul class="outline_ul">
              <li v-for="item in lectureTxtArr" :class="isTit(item) ? 'content_tit' : ''">{{ item }}</li>
            </ul>
          </article>
          <button class="submit_btn" @click="next">课程制作完毕，点击下载</button>
        </div>
        <div class="edit_lecture_wrapper" v-show="isEdit">
          <el-input 
              v-model="textarea" 
              type="textarea" 
              autosize="true" 
              placeholder="Please input content" 
              @input="handleTextInp"/>
          <el-button type="success" @click="handleOver">完成</el-button>
        </div>
      </div>
      <div class="video_wrapper">
        <h3 class="outline_head">视频</h3>
        <div class="video_box">
          <video src="@/assets/images/v1.mp4" controls></video>
        </div>
      </div>
      <div class="tag_wrapper">
        <div class="tag_wrap">
          <div class="tag_tit"><p>PPT加配音</p></div>
          <div class="tags_box">
            <div class="tags">
              <p>配音风格</p>
              <el-button type="success" plain>女声</el-button>
              <el-button type="success" plain>男声</el-button>
              <el-button type="success" plain>童声</el-button>
            </div>
            <div class="tags">
              <p>配音风格</p>
              <el-button type="primary" plain>商务</el-button>
              <el-button type="primary" plain>卡通</el-button>
            </div>
          </div>
        </div>
        <div class="tag_wrap">
          <div class="tag_tit"><p>数字人讲解</p></div>
          <div class="tags_box">
            <div class="tags">
              <p>选择形象</p>
              <el-button type="info" plain>PS: 多个形象人物</el-button>
            </div>
            <div class="tags">
              <p>上传自定义形象</p>
              <el-button type="info" plain>PS: 支持自定义形象</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { store } from "@/store"
import router from "@/router";
// const textarea = ref('第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3')
const textarea = ref(store.lectureText)
const lectureTxtArr = computed(() => {
  return textarea.value.split(/\n\t|\n\n/)
})
const isTit = (v) => {
  // 检查是否是章节标题
  return v.indexOf("讲稿") >= 0
}
const handleTextInp = (e) => {
  store.lectureText = e
}
const isEdit = ref(false)

const handleClickLecture = () => {
  isEdit.value = true
}

const handleOver = () => {
  isEdit.value = false
}

const loading = ref(false)
const next = () => {
  loading.value = true
  setTimeout(() => {
    store.activeIndex += 1
    router.push('/course/else')
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
  background: rgb(111, 219, 175);
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
  height: 320px;
  box-sizing: border-box;
}
article>p:not(.content_tit) {
  margin-left: 10px;
}

.content_con {
   width: 30%;
   margin-right: 20px;
}

.edit_lecture_wrapper button{
  margin-top: 20px;
}

.video_wrapper {
  flex: 1;
}
.video_box video{
  /* width: 90%; */
  height: 320px;
  border-radius: 20px;
}

.tag_tit {
  text-align: center;
}
.tag_tit>p {
  display: inline-block;
  padding: 10px 20px;
  background: #8faadc;
  border-radius: 10px;
  margin-bottom: 20px;
}
.tags {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.tags>p {
  padding: 10px 20px;
  background: #f0bc5b;
  border-radius: 10px;
  margin-right: 10px;
  width: 70px;
  text-align: center;
}

.outline_ul {
  margin-bottom: 10px;
  padding: 0 10px;
}
.outline_ul>li:not(.content_tit) {
  margin-left: 20px;
  list-style-type:circle;
}
</style>