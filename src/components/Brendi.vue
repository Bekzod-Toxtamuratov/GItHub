<template>
	<section class="logo-section overflow-hidden w-full relative">
		<p
			class="text-[#F7931E] font-medium text-[25px] md:text-[48px] leading-[56.25px] mb-[20px] md:mb-[40px] container"
		>
			Бренды
		</p>
		<div class="logo-container flex w-[200%]">
			<div class="logos flex md:w-1/2 w-full">
				<div
					class="logo-item ml-[20px] md:ml-[40px] w-[calc(100%/14)] flex justify-center items-center"
					v-for="item in logos"
					:key="item.id"
				>
					<img :src="item" alt="logo img" class="max-w-full h-auto" />
				</div>
				W
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'

import logo1 from '/Group 353.png'
import logo2 from '/Group 354.png'
import logo3 from '/Group 355.png'
import logo4 from '/Group 357.png'
import logo5 from '/Group 358.png'
import logo6 from '/public/Group 359.png'
import logo7 from '/public/Group.png'

const logos = ref([
	logo4,
	logo2,
	logo3,
	logo1,
	logo5,
	logo6,
	logo7,
	logo4,
	logo2,
	logo3,
	logo1,
	logo5,
	logo6,
	logo7,
])
</script>

<style scoped>
.logo-container {
	animation: scroll 5s linear infinite;
}

.logo-item {
	flex: 0 0 auto;
}

@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-10%);
	}
}
</style>
