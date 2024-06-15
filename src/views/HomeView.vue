<script setup>
import Banner from '../components/Banner.vue'
import Dostavka from '../components/Dostavka.vue'
import Intro from '../components/Intro.vue'
import Market from '../components/Market.vue'
import Navbar from '../components/Navbar.vue'
import PopularProducts from '../components/PopularProducts.vue'
import Products from '../components/Products.vue'
</script>

<template>
	<div>
		<Navbar />
		<Intro class="mb-3" />
		<Market />
		<PopularProducts />
		<Banner />
		<Products />
	</div>
</template>

<style lang="scss" scoped></style>
