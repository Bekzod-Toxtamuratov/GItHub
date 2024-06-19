<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
const modules = ref([Pagination, Autoplay])
</script>

<template>
	<swiper
		:slidesPerView="1"
		:spaceBetween="30"
		:autoplay="{
			delay: 5000,
			disableOnInteraction: false,
		}"
		:loop="true"
		:pagination="{
			clickable: true,
		}"
		:modules="modules"
		class="mySwiper"
	>
		<swiper-slide
			><img class="w-[1350px] h-[390px]" src="/main.png"
		/></swiper-slide>
		<swiper-slide
			><img class="w-[1350px] h-[390px]" src="/main.png" />
		</swiper-slide>
		<swiper-slide
			><img class="w-[1350px] h-[390px]" src="/main.png" />
		</swiper-slide>
	</swiper>
</template>

<style></style>
