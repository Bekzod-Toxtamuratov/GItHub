<script setup>
import Banner from '../components/Banner.vue'
import Dostavka from '../components/Dostavka.vue'
import Footer from '../components/Footer.vue'
import Intro from '../components/Intro.vue'
import Market from '../components/Market.vue'
import Navbar from '../components/Navbar.vue'
import Novosti from '../components/Novosti.vue'
import PopularProducts from '../components/PopularProducts.vue'
import Products from '../components/Products.vue'
import skidkaTovar from '../components/skidkaTovar.vue'

import ToTop from '../components/ToTop.vue'
</script>
<template>
	<div>
		<Navbar />
		<Intro class="mb-3" id="topSite" />
		<Market />
		<PopularProducts />
		<Banner />
		<Products />
		<Dostavka />
		<skidkaTovar />
		<Novosti />
		<!-- novosti qoshilgan -->
		<Footer />
		<ToTop />
	</div>
</template>
<style lang="scss" scoped></style>
