<!-- pages/index.vue -->
 
<template>

  <div>
    <Header />
    
  </div>
   <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <!-- Hero Content Start -->
          <div class="hero-content">
            <!-- Section Title Start -->
            
            <!-- Section Title End -->
          </div>
          <!-- Hero Content End -->
        </div>
      </div>
    </div>
  </section>
  <!-- About Us Section Start -->
    
    <div>
   
    <OurModules />
  
    <Footer />
    
    </div>
    
</template>

<script setup>
import Header from '@/components/Header.vue'

import OurModules from '@/components/OurModules.vue'

import Footer from '@/components/Footer.vue'


</script>

<style>

main { font-family: system-ui, Arial, sans-serif; }
</style>
