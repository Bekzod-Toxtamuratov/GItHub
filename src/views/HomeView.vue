<script setup>

import Banner from '../components/Banner.vue'
import Intro from '../components/Intro.vue'
import Market from '../components/Market.vue'
import Navbar from '../components/Navbar.vue'
import Products from '../components/Products.vue'
import SkidkaTovar from '../components/skidkaTovar.vue'
</script>

<template>
	<div>
		<Navbar />
		<Intro class="mb-3" />
		<Banner />
		<Products />
		<Market />
	</div>

</template>

<style lang="scss" scoped></style>
