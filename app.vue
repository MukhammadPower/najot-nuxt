<template>

  <router-view></router-view>
</template>
<script setup>

import { onMounted } from 'vue'

onMounted(async () => {
  await import('~/assets/js/bootstrap.min.js')
  await import('~/assets/js/flowmap-effect.min.js')
  await import('~/assets/js/function.js')
  await import('~/assets/js/gsap.min.js')
  await import('~/assets/js/jquery-3.7.1.min.js')
  await import('~/assets/js/jquery.counterup.min.js')
  await import('~/assets/js/jquery.magnific-popup.min.js')
  await import('~/assets/js/SmoothScroll.js')
  await import('~/assets/js/SplitText.js')
  await import('~/assets/js/wow.min.js')
  await import('~/assets/js/validator.min.js')
  await import('~/assets/js/bootstrap.min.js')
  await import('~/assets/js/ScrollTrigger.min.js')
  await import('~/assets/js/swiper-bundle.min.js')
  
  
  
  
})


import '@/assets/css/main.css'

onMounted(async () => {
  // Bootstrap JS (only in browser)
  await import('bootstrap/dist/js/bootstrap.bundle.min.js')

  // Our toggler fallback (you can inline or import from file)
  document.querySelectorAll('.navbar-toggler').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-bs-target') || btn.getAttribute('data-target')
      const target = document.querySelector(targetSelector)
      if (!target) return
      target.classList.toggle('show')
      const expanded = btn.getAttribute('aria-expanded') === 'true'
      btn.setAttribute('aria-expanded', (!expanded).toString())
    })
  })
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
body, p, h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto', sans-serif;
}
body, p, h1, h2, h3, h4, h5, h6 {
  font-family: 'Sora', sans-serif;
}
</style>
