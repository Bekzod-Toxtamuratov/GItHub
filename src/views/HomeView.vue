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
import Brendi from '../components/Brendi.vue'
import ToTop from '../components/ToTop.vue'
import New_detail from '../components/New_detail.vue'
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
		<Brendi />
		<Novosti />
		<New_detail />
		<Footer />
		<ToTop />
	</div>
</template>
<style lang="scss" scoped></style>
