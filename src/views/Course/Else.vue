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
        <p @click="dialogVisible = true">生成测试题</p>
        <p @click="imgDialogVisible = true">生成宣传图</p>
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="测试题" width="30%" center>
      <h2>企业培训中课程制作的痛点和需求
        在企业培训中，我们经常面临着课程制作的各种痛点和需求。传统的课程制作方式缺乏创新和互动性，难以满足员工的学习需求和提高培训效果。另外，不同岗位的员工面临的挑战和需求各不相同，因此需要定制化设计培训内容。跨地域的企业培训也面临着课程覆盖面和灵活性的问题。此外，企业还需要控制培训成本和评估培训效果</h2>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="imgDialogVisible" title="图片" width="30%" center>
      <img class="dialog_img" src="@/assets/images/p1.jpeg" alt="">
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="imgDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="imgDialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue"
const dialogVisible = ref(false)
const imgDialogVisible = ref(false)
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
  cursor: pointer;
}

.dialog_img {
  width: 100%;
}
</style>