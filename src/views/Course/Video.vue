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
          <p class="content_tit">讲稿1</p>
          <p>&nbsp;&nbsp;第一节：节目1</p>
          <p>&nbsp;&nbsp;第二节：节目2</p>
          <p>&nbsp;&nbsp;第三节：节目3</p>
          <br>
          <p class="content_tit">讲稿2</p>
          <p>&nbsp;&nbsp;第一节：节目1</p>
          <p>&nbsp;&nbsp;第二节：节目2</p>
          <p>&nbsp;&nbsp;第三节：节目3</p>
          <button class="submit_btn" @click="next">课程制作完毕，点击下载</button>
        </div>
        <div class="edit_lecture_wrapper" v-show="isEdit">
          <el-input v-model="textarea" type="textarea" autosize="true" placeholder="Please input content" />
          <el-button type="success" @click="handleOver">完成</el-button>
        </div>
      </div>
      <div class="video_wrapper">
        <h3 class="outline_head">视频</h3>
        <div class="video_box">
          <video src="../"></video>
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
import {ref} from "vue"
import { store } from "@/store"
import router from "@/router";
const textarea = ref('第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3')
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
   margin-right: 20px;
}

.edit_lecture_wrapper button{
  margin-top: 20px;
}

.video_wrapper {
  flex: 1;
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

.tags>span {

}
</style>