<template>
  <div class="our-testimonials parallaxie dark-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-6">
          <!-- Testimonials Content Box Start -->
          <div class="testimonials-content">
            <!-- Section Title Start -->
            <div class="section-title">
              <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Testimonials</h2>
            </div>
            <!-- Section Title End -->

            <!-- Testimonial Review Box Start -->
            <div class="testimonial-review-box wow fadeInUp" data-wow-delay="0.4s">
              <div class="testimonial-review-content">
                <h3>Our students's opinions</h3>
              </div>
            </div>
            <!-- Testimonial Review Box End -->
          </div>
          <!-- Testimonial Content Box End -->
        </div>

        <div class="col-lg-4 col-md-6">
          <!-- Testimonial Slider Start -->
          <div class="testimonial-slider">
            <div class="swiper">
              <div class="swiper-wrapper" data-cursor-text="Drag">
                <!-- Testimonial Slide Start -->
                <div class="swiper-slide" v-for="(testimonial, index) in testimonials" :key="index">
                  <div class="testimonial-item">
                    <div class="testimonial-quotes-img">
                      <img :src="testimonial.img" alt="">
                    </div>
                    <div class="testimonial-item-content">
                      <p>{{ testimonial.text }}</p>
                    </div>
                    <div class="author-content">
                      <h3>{{ testimonial.name }}</h3>
                      <p>{{ testimonial.role }}</p>
                    </div>
                  </div>
                </div>
                <!-- Testimonial Slide End -->
              </div>
            </div>
          </div>
          <!-- Testimonial Slider End -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    img: '/images/testimonial-quote-img.svg',
    text: 'I have observed many times: "Najot Ta\'lim" graduates have versatile skills. They try to perform the assigned tasks with sincerity and responsibility.',
    name: "Ulug'bek Raxmonov",
    role: 'Graphic Designer'
  },
  {
    img: '/images/testimonial-quote-img.svg',
    text: 'I have no regrets about choosing Najot Education, and I would like to thank all the experienced and expert teachers who taught me.',
    name: 'Akbar Ahmadjonov',
    role: 'Fullstack Developer'
  },
  {
    img: '/images/testimonial-quote-img.svg',
    text: 'I am taking the SMM Pro course. My opinion about the course is sincere. This course contains all the necessary knowledge for marketing, compiled by strong experts.',
    name: 'Jonibek Salomatov',
    role: 'SMM Specialist'
  }
]
</script>

<style scoped>
/* Siz xohlagan CSS lar shu yerga qo‘shiladi */
</style>
