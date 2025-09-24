<template>
  <div>
    <Header/>

    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-header-box">
              <h1>{{ course.title }} <span>{{ course.subtitle }}</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Page Service Single Start -->
    <div class="page-service-single">
      <div class="container">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="page-single-sidebar">
              <div class="page-category-list">
                <h3>Other our courses</h3>
                <ul>
                  <li v-for="c in otherCourses" :key="c.id">
                    <router-link :to="{ name: 'Course', params: { id: c.id }}">{{ c.title }}</router-link>
                  </li>
                </ul>
              </div>

              <div class="sidebar-cta-box">
                <div class="satisfy-client-box">
                  <div class="satisfy-client-content">
                    <p><span>2000+</span> student have trusted us!</p>
                  </div>
                </div>

                <div class="sidebar-cta-contact">
                  <h3>Do you need additional information about the course?</h3>
                  <ul>
                    <li><img src="images/icon-phone.svg" alt=""><a href="tel:+998-78-888-98-88">+998-78-888-98-88</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="col-lg-8">
            <div class="service-single-content">
              <div class="page-single-image">
                <figure class="image-anime reveal">
                  <img :src="course.img" alt="">
                </figure>
              </div>

              <div class="service-entry">
                <p>{{ course.description }}</p>

                <div class="service-solution-box">
                  <h2>These are the directions <span>of our course</span></h2>

                  <div class="service-solution-counters">
                    <div v-for="track in course.tracks" :key="track.name" class="solution-counter-box">
                      <div class="solution-counter-header">
                        <div class="solution-counter-no">
                          <h3>{{ track.name }}</h3>
                        </div>
                      </div>
                      <div class="solution-counter-body">
                        <ul>
                          <li v-for="detail in track.details" :key="detail">{{ detail }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2>Our course <span>prices</span></h2>
                  <div class="service-solution-counters">
                    <div v-for="price in course.prices" :key="price.amount" class="solution-counter-box">
                      <div class="solution-counter-header">
                        <div class="solution-counter-no">
                          <h2>${{ price.amount }}</h2>
                        </div>
                      </div>
                      <div class="solution-counter-body">
                        <ul>
                          <li>{{ price.note }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2>Minimum laptop required <span>for the course</span></h2>
                  <div class="service-result-box">
                    <div v-for="req in course.requirements" :key="req.name" class="service-result-item">
                      <div class="icon-box">
                        <img :src="req.icon" alt="">
                      </div>
                      <div class="service-result-item-content">
                        <h3>{{ req.name }}</h3>
                        <p>{{ req.desc }}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Service Single End -->

  </div>
</template>

<script>
import { courses } from '../data/courses.js'
import { useRoute, useRouter } from 'vue-router'
import Header from './Header.vue'

export default {
  name: 'Course',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const courseId = parseInt(route.params.id)

    const course = courses.find(c => c.id === courseId) || courses[0]

    const otherCourses = courses.filter(c => c.id !== courseId)

    return { course, otherCourses, router }
  }
}
</script>

<style scoped>
/* Qo‘shimcha CSS kerak bo‘lsa shu yerga */
</style>
