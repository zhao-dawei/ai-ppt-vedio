<template>
  <div class="common-layout">
    <el-container>
      <el-header height="40px">
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav> -->
        <LayoutHeader />
      </el-header>
      <el-container>
        <el-aside :width="asideWidth" :isCollapse="isCollapse">
          <Menu />
        </el-aside>
        <el-container>
          <el-main>
            <RouterView />
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref, computed } from "vue"
import { RouterLink, RouterView } from 'vue-router'
import Menu from "@/components/aside/menu.vue"
import LayoutHeader from "@/components/header/index.vue"

const isCollapse = ref(false)
const wid = isCollapse.value ? "100px" : "200px"
const asideWidth = ref(wid)
</script>
<style>
.common-layout {
  width: 100%;
  height: 100%;
  padding: 30px;
  background: radial-gradient(circle,#EBF5F4,#C1F5E6);
  /* border-radius: 50px; */
  box-sizing: border-box;
}
.submit_btn {
  width: 220px;
  line-height: 40px;
  color: #fff;
  background: radial-gradient(circle,#80b892 0%,#13be7d 100%);
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  font-size: medium;
}

</style>