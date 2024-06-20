<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import PopularProducts from '../components/PopularProducts.vue'
import Rubashka from '../components/Rubashka.vue'
</script>
<template>
	<div>
		<Navbar />
		<Rubashka />
		<PopularProducts :title="Похожи"  />
		<Footer />
	</div>
</template>
<style lang="scss" scoped>
</style>
