<template>
  <div class="layout_header">
    <h2>“AI”做课</h2>
    <h3><span>用户中心</span><el-icon><Avatar /></el-icon></h3>
  </div>
</template>
<script setup>
import { Avatar, Setting, } from '@element-plus/icons-vue'
</script>

<style scoped>
.layout_header {
  display: flex;
  justify-content: space-between;
}
.layout_header h3 {
  display: flex;
  align-items: center;
}
.layout_header h3 span {
  margin-right: 5px;
}
</style>