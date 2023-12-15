<template>
  <div class="course_outline_wrapper" v-loading="loading">
    <div class="ai_talk">
      <p class="AI_avatar">
        <img src="@/assets/svg/chat.svg" alt="">
      </p>
      <span>根据你提供的信息，我们推荐课程大纲如下，如需调整，可直接点击文稿调整</span>
    </div>
    <div class="outline_content">
      <!-- <h3 class="outline_head">大纲</h3> -->
      <article @click="handleClickEdit" v-show="!isEdit" id="show_outline" style="display:none">
        <ul class="outline_ul">
          <li v-for="item in outlineTxtArr" :class="isTit(item) ? 'content_tit' : ''">{{ item }}</li>
        </ul>
      </article>
      <div id="output"></div>
      <div class="edit_wrapper" v-show="isEdit">
        <!-- <el-input type="textarea" v-model="textarea" autosize="true" @input="handleTextInp" /> -->
        <textarea 
            v-model="textarea"
            placeholder="Please input content"
            @input="handleTextInp"
          ></textarea>
        <el-button type="success" @click="handleOver">完成</el-button>
      </div>
      <button v-show="!isEdit" class="submit_btn" @click="next" id="generateContent">生成对应内容</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue"
import router from "@/router";
import {store} from "@/store"

// 关联修改前和修改后
// const textarea = ref("第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3")
const textarea = ref(store.outlineText)
const outlineTxtArr = computed(() => {
  return textarea.value.split(/\n\t|\n\n/)
})
const isTit = (v) => {
  // 检查是否是章节标题
  return v.indexOf("章") >= 0
}


const isEdit = ref(false)

const loading = ref(false)

const handleClickEdit = () => {
  isEdit.value = true
}
const handleTextInp = (e) => {
  store.outlineText = e.target.value
}
const handleOver = () => {
  isEdit.value = false
}

const next = () => {
  loading.value = true
  setTimeout(() => {
    store.activeIndex += 1
    router.push('/course/content')
  }, 2000)
}

onMounted(() => {

  const outputElement = document.getElementById("output");
  const text = ref(store.streamOutline).value;
  let currentIndex = 0;

  function printText() {
    if (currentIndex < text.length) {
      const char = text.charAt(currentIndex);
      currentIndex++;

      if (char === "\r") {
        outputElement.appendChild(document.createElement("br"));
      } else {
        outputElement.appendChild(document.createTextNode(char));
      }
      setTimeout(printText, 50); // Change delay here (in milliseconds)
    }else{
      console.log('daozhelema1')
      document.getElementById("output").style.display = 'none';
      document.getElementById("show_outline").style.display = 'block';
      document.getElementById("generateContent").style.display = 'block';
    }
  }
  printText();
});

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

.outline_content {
  padding-left: 40px;
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
  width: 40%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  line-height: 30px;
  height: 400px;
  overflow: auto;
}

.outline_ul {
  margin-bottom: 10px;
  padding: 0 10px;
  cursor: pointer;
}
.outline_ul>.content_tit {
  margin-top: 10px;
}
.outline_ul>li:not(.content_tit) {
  margin-left: 20px;
  list-style-type:circle;
}

.edit_wrapper {
  width: 40%;
}
.edit_wrapper textarea {
  width: 100%;
  height: 400px;
  padding: 10px;
  color: #333;
  border: 1px solid #aaa;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
}
.edit_wrapper button{
  margin-top: 20px;
}
#show_outline {
  display: none;
}
#generateContent {
  display: none;
}
</style>