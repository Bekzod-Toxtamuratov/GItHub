<script setup>
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import Landing from '../components/Landing.vue'
import Navbar from '../components/Navbar.vue'
</script>
<template>
	<div>
		<Navbar />
		<Contact class="mt-20 mb-20"/>
		<Landing/>
		<Footer />
		<ToTop />
	</div>
</template>
<style lang="scss" scoped></style>
