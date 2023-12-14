<template>
  <div class="course_lecture_wrapper" v-loading="loading">
    <div class="ai_talk">
      <p class="AI_avatar">
        <img src="@/assets/svg/chat.svg" alt="">
      </p>
      <span>根据内容和PPT，推荐讲稿如下，如需调整，可直接点击直接调整</span>
    </div>
    <div class="content_wrapper">
      <div class="outline_content">
        <h3 class="outline_head">PPT</h3>
        <div class="ppt_wrap">
          <div class="demo-image__lazy">
            <el-image 
                v-for="url in urls" 
                :key="url" 
                :src="url" 
                :preview-src-list="urls"
                lazy />
          </div>
        </div>
        <button class="submit_btn" @click="next">讲稿确认完毕 请生成视频</button>
      </div>
      <div class="content_con">
        <h3 class="outline_head">讲稿</h3>
        <div class="lecture_text" @click="handleClickLecture" v-show="!isEdit">
          <article>
            <ul class="outline_ul">
              <li v-for="item in lectureTxtArr" :class="isTit(item) ? 'content_tit' : ''">{{ item }}</li>
            </ul>
          </article>
        </div>
        <div class="edit_lecture_wrapper" v-show="isEdit">
          <!-- <el-input 
            v-model="textarea" 
            type="textarea" 
            autosize="true" 
            placeholder="Please input content" 
            @input="handleTextInp"
            /> -->
          <textarea 
            v-model="textarea"
            placeholder="Please input content"
            @input="handleTextInp"
          ></textarea>
          <el-button type="success" @click="handleOver">完成</el-button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { store } from "@/store"
import router from "@/router";
import p1 from "@/assets/images/p1.jpeg"//引入本地图片
// const textarea = ref('第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3')
const textarea = ref(store.lectureText)
const lectureTxtArr = computed(() => {
  return textarea.value.split(/\n\t|\n\n/)
})
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
  p1
]
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
    router.push('/course/video')
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
    flex: 1;
    margin-left: 40px;
}

.edit_lecture_wrapper button{
  margin-top: 20px;
}

.edit_lecture_wrapper textarea {
  width: 100%;
  height: 400px;
  padding: 10px;
  color: #333;
  border: 1px solid #aaa;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
}

.outline_ul {
  margin-bottom: 10px;
  padding: 0 10px;
}
.outline_ul>li:not(.content_tit) {
  margin-left: 20px;
  list-style-type:circle;
}

.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>