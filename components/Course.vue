<template>
  <div>
    <!-- Header Start -->
    <header class="main-header">
      <div class="header-sticky">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="https://najottalim.uz/icons/logo.svg" alt="Logo">
            </a>
            <div class="collapse navbar-collapse main-menu">
              <ul class="navbar-nav mr-auto" id="menu">
                <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                <li class="nav-item"><a class="nav-link" href="https://t.me/Najottalim_jbot">About Us</a></li>
                <li class="nav-item"><router-link class="nav-link" to="/courses">Our Courses</router-link></li>
                <li class="nav-item"><a class="nav-link" href="https://najottalim.uz/graduates">Our Graduates</a></li>
              </ul>
              <div class="header-btn">
                <a href="tel:+998788889888" class="btn-default">+998-78-888-98-88</a>
              </div>
            </div>
            <div class="navbar-toggle"></div>
          </div>
        </nav>
      </div>
    </header>
    <!-- Header End -->

    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-header-box">
              <h1>{{ course.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <div class="page-service-single">
      <div class="container">
        <div class="row">
          <!-- Sidebar Start -->
          <div class="col-lg-4">
            <div class="page-single-sidebar">
              <div class="page-category-list">
                <h3>Other Courses</h3>
                <ul>
                  <li v-for="c in otherCourses" :key="c.id">
                    <router-link :to="`/course/${c.slug}`">{{ c.title }}</router-link>
                  </li>
                </ul>
              </div>

              <div class="sidebar-cta-box">
                <div class="satisfy-client-content">
                  <p><span>2000+</span> students have trusted us!</p>
                </div>
                <div class="sidebar-cta-contact">
                  <h3>Need more info?</h3>
                  <ul>
                    <li>
                      <img src="images/icon-phone.svg" alt="">
                      <a href="tel:+998-78-888-98-88">+998-78-888-98-88</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Sidebar End -->

          <!-- Course Content Start -->
          <div class="col-lg-8">
            <div class="service-single-content">
              <div class="page-single-image">
                <figure>
                  <img :src="course.image" :alt="course.title">
                </figure>
              </div>

              <div class="service-entry">
                <p>{{ course.description }}</p>

                <div class="service-solution-box">
                  <h2>Course Directions</h2>
                  <div v-for="direction in course.directions" :key="direction.name" class="solution-counter-box">
                    <h3>{{ direction.name }}</h3>
                    <ul>
                      <li>Duration: {{ direction.duration }}</li>
                      <li>Schedule: {{ direction.schedule }}</li>
                    </ul>
                  </div>

                  <h2>Course Prices</h2>
                  <div v-for="price in course.prices" :key="price.price" class="solution-counter-box">
                    <h3>${{ price.price }}</h3>
                    <p>{{ price.description }}</p>
                  </div>

                  <h2>Minimum Laptop Required</h2>
                  <div v-for="laptop in course.minLaptop" :key="laptop.name" class="service-result-item">
                    <h3>{{ laptop.name }}</h3>
                    <p>{{ laptop.type }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <!-- Course Content End -->
        </div>
      </div>
    </div>

    <!-- Footer Start -->
    <footer class="main-footer">
      <div class="container">
        <p>&copy; 2025 Najottalim. All rights reserved.</p>
      </div>
    </footer>
    <!-- Footer End -->
  </div>
</template>

<script>
import { courses } from "@/data/courses.js";

export default {
  data() {
    return {
      course: null,
    };
  },
  computed: {
    otherCourses() {
      return courses.filter(c => c.id !== this.course.id);
    }
  },
  created() {
    const slug = this.$route.params.slug;
    this.course = courses.find(c => c.slug === slug) || courses[0];
  }
};
</script>

<style scoped>
/* Shu yerga o‘z style larni qo‘shish mumkin */
</style>
