<template>
  <div class="how-it-work">
    <div class="container">
      <div class="row section-row align-items-center">
        <div class="col-lg-12">
          <!-- Section Title Start -->
          <div class="section-title section-title-center">
            <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
              Bonuses and rewards for students
            </h2>
          </div>
          <!-- Section Title End -->
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="(bonus, index) in bonuses" :key="index">
          <!-- Work Step Item Start -->
          <div
            class="work-step-item box-bg-shape wow fadeInUp"
            :data-wow-delay="bonus.delay"
          >
            <div class="work-step-item-body">
              <div class="work-step-content">
                <h3>{{ bonus.title }}</h3>
                <p>{{ bonus.description }}</p>
              </div>
            </div>
            <div class="work-step-no">
              <h3>{{ bonus.number }}</h3>
            </div>
          </div>
          <!-- Work Step Item End -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bonuses = [
  {
    number: "01",
    title: "Cash prize of up to 5,000,000 soums",
    description:
      "Graduates who have worked for more than 6 months in IT park resident export companies will receive a cash award of up to 5,000,000 soums.",
    delay: ""
  },
  {
    number: "02",
    title: "Voucher up to 5,000,000 soums for an English course.",
    description:
      "We are offering vouchers worth 4,000,000 soums to study English at 'Najot Ta'lim' or 1,000,000 soums to study at the Cambridge training center.",
    delay: "0.2s"
  },
  {
    number: "03",
    title: "Get the online course for free",
    description:
      "For those who intend to study in a professional education program and have paid in full for the course in advance, a Programming Foundation course worth 2,500,000 soums will be provided free of charge from the najottalim.uz online platform.",
    delay: "0.4s"
  },
  {
    number: "04",
    title: "Opportunity to travel abroad",
    description:
      "We offer the opportunity to travel abroad for free at least once a year during competitions.",
    delay: "0.6s"
  }
];
</script>

<style scoped>
/* Siz original CSS ni shu yerga qo‘shishingiz mumkin */
</style>
