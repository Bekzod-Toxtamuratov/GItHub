<template>
	<div class="container flex pt-20">
		<div class="grid grid-cols-3 py-[10px] gap-x-11">
			<div class="col-span-2">
				<Carousel />
			</div>
			<div class="">
				<img class="w-full h-[390px]" src="/girl.png" />
			</div>
		</div>
	</div>
</template>

<script setup>
import Carousel from '../components/Carousel.vue'
</script>

<style lang="scss" scoped></style>
