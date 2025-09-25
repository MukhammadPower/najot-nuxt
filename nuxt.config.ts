export default defineNuxtConfig({
  css: [
    "@fortawesome/fontawesome-free/css/all.min.css"
  ]
  app: {
    head: {
      title: 'Najot Talim - Nuxt',
      
      meta: [
        {charset:"utf-8"},
        { name: 'viewport', 
          content: 'width=device-width, initial-scale=1' 
        }
      ]
    }
  }
  
})