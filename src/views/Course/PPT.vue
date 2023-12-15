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
        <!-- <el-input 
              v-model="textarea" 
              type="textarea" 
              placeholder="Please input content" /> -->
        <textarea 
          v-model="textarea"
          placeholder="Please input content"
        ></textarea>
        <button class="submit_btn" @click="next">PPT确认完毕 帮我生成配音讲稿</button>
      </div>
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
        
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import { store } from "@/store"
import router from "@/router";
import p1 from "@/assets/images/p1.jpeg"//引入本地图片
// const textarea = ref('第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3')
const textarea = ref(store.outlineText)

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
}
article>p:not(.content_tit) {
  margin-left: 10px;
}

.content_con {
    width: 30%;
    margin-right: 40px;
}
.content_con textarea {
  width: 100%;
  height: 400px;
  padding: 10px;
  color: #333;
  border: 1px solid #aaa;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
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