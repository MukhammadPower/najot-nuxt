<template>
  <div
    class="module-item tab-pane fade"
    :class="{ show: active, 'active': active }"
    :id="id"
    role="tabpanel"
  >
    <div class="row align-items-center">
      <div class="col-lg-6">
        <div class="module-item-content">
          <div class="section-title">
            <h2 data-cursor="-opaque">{{ title }}</h2>
          </div>
          <div class="module-counters-list">
            <div v-for="(course, index) in courses" :key="index" class="module-counter-item box-bg-shape">
              <div class="module-counter-body">
                <h3>{{ course.name }}</h3>
                <p>You will study this course in {{ course.duration }}.</p>
              </div>
              <div class="readmore-btn">
                <a :href="course.link"><img src="../public/images/arrow-white.svg" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="module-item-image">
          <figure class="image-anime">
            <img :src="img" alt="">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
  courses: Array,
  img: String,
  active: { type: Boolean, default: false }
})
</script>
