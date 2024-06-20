<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import PopularProducts from '../components/PopularProducts.vue'
import Rubashka from '../components/Rubashka.vue'
import ToTop from '../components/ToTop.vue'
</script>
<template>
	<div>
		<Navbar />
		<Rubashka />
		<PopularProducts class="mb-20" />
		<Footer />
		<ToTop />
	</div>
</template>
<style lang="scss" scoped></style>
