<template>
    <div class="course_wrapper">
        <div class="link_btns">
            <ul>
                <li v-for="(item, index) in tabs" 
                    :key="index" 
                    :class="store.activeIndex === index ? 'active_li' : ''"
                    @click="handleClickTab(item,index)"
                  >
                  <p :to="item.path">{{item.name}}</p>
                </li>
            </ul>
        </div>

        <el-card class="box-card">
            <RouterView />
        </el-card>
    </div>
</template>

<script setup>
import {ref} from "vue"
import router from "@/router";
import {store} from "@/store"
const tabs = [
  {
    path: "/course/outline",
    name: "课程大纲"
  },
  {
    path: "/course/content",
    name: "课程内容"
  },
  {
    path: "/course/ppt",
    name: "课程PPT"
  },
  {
    path: "/course/lecture",
    name: "课程讲稿"
  },
  {
    path: "/course/video",
    name: "课程视频"
  },
  {
    path: "/course/else",
    name: "其他"
  }
]
const handleClickTab = (item, ind) => {
    console.log(ind);
    store.activeIndex = ind
    router.push(item.path)
}
</script>

<style scoped>
.course_wrapper {
    display: flex;
}
.link_btns {
    margin-right: 20px;
}
.link_btns ul li {
  list-style: none;
  background: rgb(255, 242, 204);
  padding: 10px 30px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.link_btns ul .active_li {
  color: #fff;
  background: #efaf39;
}
.box-card {
    flex: 1;
}
</style>