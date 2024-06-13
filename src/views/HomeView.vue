<script setup>
import Banner from '../components/Banner.vue'
import Dostavka from '../components/Dostavka.vue'
import Intro from '../components/Intro.vue'
import Market from '../components/Market.vue'
import Navbar from '../components/Navbar.vue'
import Products from '../components/Products.vue'
import skidkaTovar from "../components/skidkaTovar.vue"
</script>

<template>
	<div>
		<Navbar />
		<Intro class="mb-3" />
		<Banner />
		<Products />
		<Market />
		<Dostavka />
		<skidkaTovar/>
	</div>
</template>

<style lang="scss" scoped></style>
