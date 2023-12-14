import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/course',
      name: 'course',
      redirect: '/course/outline',
      component: () => import('../views/Course/index.vue'),
      children: [
        {
          path: '/course/outline',
          name: 'outline',
          component: () => import('../views/Course/Outline.vue')
        },
        {
          path: '/course/content',
          component: () => import('../views/Course/Content.vue')
        },
        {
          path: '/course/ppt',
          name: 'PPT',
          component: () => import('../views/Course/PPT.vue')
        },
        {
          path: '/course/lecture',
          name: 'lecture',
          component: () => import('../views/Course/Lecture.vue')
        },
        {
          path: '/course/video',
          name: 'video',
          component: () => import('../views/Course/Video.vue')
        },
        {
          path: '/course/else',
          component: () => import('../views/Course/Else.vue')
        },
      ]
    }
  ]
})

export default router
