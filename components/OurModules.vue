<template>
  <div id="course" class="our-modules">
    <div class="container">
      <div class="row section-row">
        <div class="col-lg-12">
          <!-- Section Title Start -->
          <div class="section-title section-title-center">
            <h2 class="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
              Our <span>Courses</span>
            </h2>
          </div>
          <!-- Section Title End -->
        </div>
      </div>
    </div>

    <!-- Module Content Box Start -->
    <div class="module-content-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Module Item Box Start -->
            <div class="modules-item-box tab-content wow fadeInUp" data-wow-delay="0.25s" id="moduletab">
              
              <!-- Module Nav start -->
              <div class="module-nav">
                <ul class="nav nav-tabs" id="mvTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link btn-default btn-highlighted"
                      id="first-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#first"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      <img src="../public/images/icon-module-tab-1.svg" alt=""> Web Developer
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link btn-default btn-highlighted"
                      id="second-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#second"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="../public/images/icon-module-tab-2.svg" alt=""> Web Designer
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link btn-default btn-highlighted active"
                      id="thirds-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#thirds"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <img src="../public/images/icon-module-tab-3.svg" alt=""> Marketing
                    </button>
                  </li>
                </ul>
              </div>
              <!-- Module Nav End -->

              <!-- Module Items -->
              <ModuleTab
                id="first"
                title="Our courses for Developer"
                :courses="developerCourses"
                img="https://t4.ftcdn.net/jpg/13/68/71/29/360_F_1368712997_N0mEPURTTAuEBu7HGqPVDsAIav1Hj8dT.jpg"
              />
              <ModuleTab
                id="second"
                title="Our courses for Designer"
                :courses="designerCourses"
                img="https://www.ed2go.com/common/images/1/16890/learn-web-design.jpg"
              />
              <ModuleTab
                id="thirds"
                title="Our courses for Marketing"
                :courses="marketingCourses"
                img="https://staticlearn.shine.com/l/m/images/blog/mobile/stages_of_marketing.webp"
                active
              />
            </div>
            <!-- Module Item Box End -->
          </div>
        </div>
      </div>
    </div>
    <!-- Module Content Box End -->
  </div>
</template>

<script setup>

import { ref } from 'vue'
import ModuleTab from './ModuleTab.vue'

const developerCourses = ref([
  { name: 'Web Developer Foundation', duration: '4+ months', link: 'course_1.html' },
  { name: 'React JS', duration: '8+ months', link: 'course_2.html' },
  { name: 'Python', duration: '8+ months', link: 'course_3.html' },
  { name: 'QA (Quality Assurance)', duration: '5+ months', link: 'course_4.html' },
  { name: 'Data analitic', duration: '7+ months', link: 'course_5.html' },
])

const designerCourses = ref([
  { name: 'Graphic design (Bootcamp)', duration: '6+ months', link: 'course_6.html' },
])

const marketingCourses = ref([
  { name: 'AI (Artificial Intelligence)', duration: '2+ months', link: 'course_7.html' },
  { name: 'SMM', duration: '4+ months', link: 'course_8.html' },
  { name: 'No Code', duration: '3+ months', link: 'course_9.html' },
  { name: 'Mobilography', duration: '2+ months', link: 'course_10.html' },
])
</script>
