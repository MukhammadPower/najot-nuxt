import { createRouter, createWebHistory } from 'vue-router'

// Sahifalarni import qilish
import Home from '@/pages/index.vue'
import Course1 from '@/pages/course-1.vue'
import Course2 from '@/pages/course-2.vue'
import Course3 from '@/pages/course-3.vue'
import Course4 from '@/pages/course-4.vue'
import Course5 from '@/pages/course-5.vue'
import Course6 from '@/pages/course-6.vue'
import Course7 from '@/pages/course-7.vue'
import Course8 from '@/pages/course-8.vue'
import OurCourses from '@/pages/our_courses.vue'
import About from '@/pages/about.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/our_courses',
    name: 'OurCourses',
    component: OurCourses
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/course-1',
    name: 'Course-1',
    component: Course1
  },
  {
    path: '/course-2',
    name: 'Course-2',
    component: Course2
  },
  {
    path: '/course-3',
    name: 'Course-3',
    component: Course3
  },
  {
    path: '/course-4',
    name: 'Course-4',
    component: Course4
  },
  {
    path: '/course-5',
    name: 'Course-5',
    component: Course5
   
  },
  {
    path: '/course-6',
    name: 'Course-6',
    component: Course6
  },
  {
    path: '/course-7',
    name: 'Course-7',
    component: Course7
  },
  {
    path: '/course-8',
    name: 'Course-8',
    component: Course8
   
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})
export default router