<!-- components/OurGallery.vue -->
<template>
  <section class="our-gallery">
    <div class="container">
      <div class="row section-row align-items-center">
        <div class="col-lg-12">
          <!-- Section Title Start -->
          <div class="section-title section-title-center">
            <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">Gallery</h2>
          </div>
          <!-- Section Title End -->
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="projects-slider">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(img, index) in galleryImages"
                  :key="index"
                >
                  <div class="project-item box-bg-shape">
                    <div class="project-image">
                      <figure class="image-anime">
                        <img :src="img" alt="" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-btn">
                <div class="project-button-prev"></div>
                <div class="project-button-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryImages = [
  "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F010_f5ca60f7-0a10-4500-a9a2-e10fd57a5aac.jpg&w=1200&q=75",
  "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F007_57e07a37-00de-43b8-ac6a-e0fd5afadd6c.jpg&w=1200&q=75",
  "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F009_1ecf43b6-ae68-44b0-a262-92e5d5a202de.jpg&w=1200&q=75",
  "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F003_41e04877-978c-4da3-b7b8-15903d15cfd7.jpg&w=1200&q=75",
  "https://najottalim.uz/_next/image?url=https%3A%2F%2Fnws.cdn.najottalim.uz%2Fmain-server%2Fuser%2Fprofile%2F011_7adddb00-ec83-4100-b1c9-237678002751.jpg&w=1200&q=75"
];
</script>

<style scoped>
.our-gallery {
  padding: 80px 0;
}


</style>
