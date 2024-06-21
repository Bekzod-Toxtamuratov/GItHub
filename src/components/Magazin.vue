<template>
	<Path />
	<div>
		<div class="container mt-[10px] mb-[80px]">
			<div class="md:flex justify-between items-center">
				<h1
					class="font-medium text-3xl sm:text-5xl text-[#F7931E] sm:py-7 py-5"
				>
					Все магазины
				</h1>
				<button
					class="flex justify-between gap-2 text-[#F7931E] border-[#F7931E] border px-4 py-2 text-center items-center"
				>
					Сортировка по

					<svg
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1L5 5L9 1"
							stroke="#F7931E"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>

			<!-- Intro Start >>>>>>>> -->
			<div class="mx-auto">
				<div
					class="md:flex md:flex-wrap md:justify-evenly md:flex-row md:items-normal flex-col sm:items-center gap-2"
				>
					<div
						class="w-full flex flex-col shadow-md gap-2 lg:w-[389px] lg:h-[333px] md:w-[300px] md:h-[220px] sm:w-full sm:h-full bg-k_gray lg:p-4 md:p-2 p-2 md:my-4 max-md:my-4 pb-4 justify-between"
						v-for="(item, i) in intro"
						:key="i"
					>
						<div class="flex justify-between">
							<img class="" :src="item.logo" alt="i" />
							<p class="flex items-center gap-1">
								<img src="/logo/star.svg" alt="" /> {{ item.rating }}
							</p>
						</div>
						<p class="lg:text-sm md:text-xs font-normal text-black">
							{{ item.title }}
						</p>

						<div class="grid grid-cols-2 md:gap-2.5 sm:gap-0 mr-[4%] gap-2">
							<div class="">
								<img
									class="md:h-full sm:h-[95%] h-full"
									:src="item.images[0]"
									alt="img"
								/>
							</div>
							<div class="flex flex-col md:gap-2 sm:gap-0 gap-2">
								<div class="w-full">
									<img :src="item.images[1]" alt="img" />
								</div>
								<div class="w-full">
									<img :src="item.images[2]" alt="img" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Path from '../components/Vsemagazin.vue'
import { useMagazin } from '../composable/useMagazin.js'

const { intro } = useMagazin()
</script>

<style lang="scss" scoped></style>
