<template>
  <div class="course_outline_wrapper" v-loading="loading">
    <div class="ai_talk">
      <p class="AI_avatar">
        <img src="@/assets/svg/chat.svg" alt="">
      </p>
      <span>根据你提供的信息，我们推荐课程大纲如下，如需调整，可直接点击文稿调整</span>
    </div>
    <div class="outline_content">
      <h3 class="outline_head">大纲</h3>
      <article @click="handleClickEdit" v-show="!isEdit">
        <ul class="outline_ul">
          <li class="content_tit">第一章：课题1</li>
            <li>第一节：节目1</li>
            <li>第二节：节目2</li>
            <li>第三节：节目3</li>
        </ul>
        <ul class="outline_ul">
          <li class="content_tit">第二章：课题2</li>
            <li>第一节：节目1</li>
            <li>第二节：节目2</li>
            <li>第三节：节目3</li>
        </ul>
      </article>
      <div class="edit_wrapper" v-show="isEdit">
        <el-input type="textarea" v-model="textarea" autosize="true" />
        <el-button type="success" @click="handleOver">完成</el-button>
      </div>
      <button class="submit_btn" @click="next">生成对应内容</button>
    </div>
    <!-- <el-dialog v-model="dialogFormVisible" title="修改大纲">
      <el-form>
        <el-form-item>
          <el-input type="textarea" v-model="textarea" autosize="true" />
          
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog> -->
  </div>
</template>

<script setup>
import { ref } from "vue"
import router from "@/router";
import {store} from "@/store"
const dialogFormVisible = ref(false)
const textarea = ref("第一章：课题1\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3\n\n第二章：课题2\n\t第一节：节目1\n\t第二节：节目2\n\t第三节：节目3")
const isEdit = ref(false)

const loading = ref(false)

const handleClickEdit = () => {
  isEdit.value = true
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
}

.outline_ul {
  margin-bottom: 10px;
  padding: 0 10px;
}
.outline_ul>li:not(.content_tit) {
  margin-left: 20px;
  list-style-type:circle;
}

.edit_wrapper {
  width: 40%;
}
</style>