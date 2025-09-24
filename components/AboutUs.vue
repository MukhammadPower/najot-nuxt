<template>
  <section class="about-us">
    <div class="container">
      <div class="row">
        <!-- Left Column: Info -->
        <div class="col-lg-4">
          <div class="about-us-info">
            <h2 class="text-effect wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
              "Najot Ta'lim" is
            </h2>
            <p class="wow fadeInUp">
              A center for training in modern professions such as programming, design, and marketing.
            </p>
            <p class="wow fadeInUp">
              A place that improves people's lives and strengthens confidence in the future through modern professions.
            </p>
            <p class="wow fadeInUp">
              An education and innovation center that has brought together more than 2,500 students and a large team of more than 350 people in one place in just one year.
            </p>
          </div>
        </div>

        <!-- Right Column: Stats -->
        <div class="col-lg-8">
          <div class="about-us-content">
            <div class="section-title">
              <h2 class="text-effect wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Results in numbers
              </h2>
              <p class="wow fadeInUp" data-wow-delay="0.4s">
                Statistics from October 2018 to June 2025
              </p>
            </div>

            <div class="about-counter-list">
              <div class="about-counter-item box-bg-shape" v-for="(item, i) in counters" :key="i">
                <div class="about-counter-body">
                  <h2>
                    <span class="counter">{{ item.value }}</span>{{ item.suffix || '' }}
                  </h2>
                  <p style="font-family: 'Open Sans', sans-serif;">{{ item.label }}</p>
                </div>
                <div class="readmore-btn">
                  <NuxtLink :to="item.link">
                    <img src="../public/images/arrow-white.svg" alt="arrow" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </section>
</template>

<script setup>
const counters = [
  { value: 2500, suffix: '+', label: 'Students who have graduated so far', link: '/about' },
  { value: '35', suffix: '-40%', label: 'Student employment to date (approximate)', link: '/about' },
  { value: 6, label: 'Total number of our training centers', link: '/about' }
]

const brandImgs = [
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FEurosoft.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FDAVR-BANK.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Funicon-soft.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FPayMe.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FFido-biznes.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FUzinfocom.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fudevs.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fasakabank.png&w=640&q=75',
  'https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FBILLZ.png&w=640&q=75'
]
</script>

<style scoped>

</style>
