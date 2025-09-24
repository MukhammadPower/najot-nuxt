<!-- pages/index.vue -->
 
<template>

  <div>
    <Header />
    
  </div>
  <div>
    <HeroSection />
  </div>
  <!-- About Us Section Start -->
    
    <div>
    <AboutUs />
    <WhatWeDo />
    
    <OurModules />
    <Bonuses />
    <Testimonials />
    <Footer />
    
    </div>
    
</template>

<script setup>
import Header from '@/components/Header.vue'
import HeroSection from '~/components/HeroSection.vue'
import AboutUs from '@/components/AboutUs.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'

import OurModules from '@/components/OurModules.vue'
import Bonuses from '@/components/Bonuses.vue'
import Testimonials from '@/components/Testimonials.vue'
import Footer from '@/components/Footer.vue'


</script>

<style>

main { font-family: system-ui, Arial, sans-serif; }
</style>
