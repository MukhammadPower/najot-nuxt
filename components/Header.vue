<template>
  
  <header class="main-header">
    <div class="header-sticky">
			<nav class="navbar navbar-expand-lg">
				<div class="container-fluid">
					<!-- Logo Start -->
					<a class="navbar-brand" href="/">
						<img src="https://najottalim.uz/icons/logo.svg" alt="Logo">
					</a>
					<!-- Logo End -->
                     <!-- toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

					<!-- Main Menu Start -->
					<div class="collapse navbar-collapse main-menu">
                        <div class="nav-menu-wrapper">
                            <ul class="navbar-nav mr-auto" id="menu">
            <li class="nav-item"><NuxtLink style="font-family: 'Poppins',;     font-weight: var(--bs-nav-link-font-weight);padding: 13px 10px !important;"  class="nav-link" to="/">Home</NuxtLink></li>
            <li class="nav-item"><a class="nav-link" href="/about" >About us</a></li>
            <li class="nav-item"><a class="nav-link" href="/our_courses" >Our Courses</a></li>
            <li class="nav-item"><a class="nav-link" href="https://najottalim.uz/graduates" target="_blank">Our Graduates</a></li>
          </ul>
                        </div>
                        
                        <!-- Header Btn Start -->
                        <div class="header-btn">
                            <a href="tel:+998788889888" class="btn-default">+998-78-888-98-88</a>
                        </div>
                        <!-- Header Btn End -->
					</div>
					<!-- Main Menu End -->
					<div class="navbar-toggle"></div>
				</div>
			</nav>
			<div class="responsive-menu"></div>
		</div>
  </header>
</template>

<script setup>
// hech narsa
</script>

<style scoped>
/* agar sizning style.css Bootstrap ustiga yozsa, bu scope yordam beradi */
</style>
