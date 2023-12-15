<template>
  <div class="home_wrapper">
  <div class="ai_talk">
        <p class="AI_avatar">
          <img src="@/assets/svg/chat.svg" alt="">
        </p>
        <span>你好，欢迎来到“AI”做课平台，输入一些基本信息，开启你的AI做课之旅吧！</span>
      </div>
    <el-card class="box-card" v-loading="loading">
      
      <div class="ai_talk AI_content">
        <!-- <p class="AI_avatar">
          <img src="@/assets/svg/chat.svg" alt="">
        </p> -->
        <ul class="AI_content_ul">
          <li class="text_item">
            <p>您的课程主题是？</p> <el-input v-model="input1" placeholder="如：“AI”做课使用实操" />
          </li>
          <li class="text_item">
            <p>您的课程对象是？</p> <el-input v-model="input2" placeholder="建议描述方式：在什么水平/具备什么经验的，什么岗位/群体，示例：入司3年内的证券公司财富顾问" />
          </li>
          <li class="text_item">
            <p>您的课程目标是？</p> <el-input v-model="input3" placeholder="当学员学完课程后，能够发生哪些知识/态度/技能改变" />
          </li>
          <li class="text_item">
            <p>您预计的课程时长</p> <el-input v-model="input4" placeholder="建议1小时内，学员学习体验更好" />
          </li>
          <li class="text_item">
            <p>其他补充说明</p> <el-input v-model="input5" placeholder="比如您希望包含的主要内容、案例等，您补充的细节越多，AI输出的内容越精准" />
          </li>
          <li class="text_item">
            <p>附件上传</p> 
            <!-- <el-input v-model="input6" placeholder="上传课程相关文档内容，或附上内容网址链接" /> -->
            <el-upload
    v-model:file-list="fileList"
    class="el-input"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button size="large" style='background-color:#69c3df;color:#fff'>点击上传文件</el-button>
    <!-- <template #tip>
      <div class="el-upload__tip">
        files with a size less than 5MB.
      </div>
    </template> -->
  </el-upload>
          </li>
          <li class="text_item">
            <button class="submit_btn" @click="handleCreateOutline">生成课程大纲 →</button>
          </li>
          
        </ul>
      </div>
    </el-card>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const loading = ref(false)
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
sessionStorage.setItem('isCollapse', false)
const handleCreateOutline = () => {
  sessionStorage.setItem('isCollapse', true)
  loading.value = true
  // 模拟加载中的状态 2s
  setTimeout(() => {
    router.push('/course')
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
.AI_content {
  align-items: start;
}
.AI_content_ul {
  width: 100%;
  list-style: none;
}
.text_item {
  width: 100%;
  line-height: 40px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.text_item p {
  width: 25%;
  border-radius: 10px;
  text-align: center;
  margin-right: 30px;
  color: #000000;
  background: rgb(232,247,243);
  border: 1px solid #C6F3E6;
}

</style>