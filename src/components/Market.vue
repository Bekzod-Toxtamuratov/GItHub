<template>
	<div class="container">
		<h1 class="text-[#F7931E] text-[48px]">Ваши магазины</h1>
		<div class="md:grid grid-cols-3 gap-5">
			<div class="p-6 bg-[#F1EFED] rounded-md">
				<div class="flex justify-between items-center">
					<img
						class="w-[101px] h-[38px]"
						src="../assets/images/1db6df8444b06bd87a73051107157676 1.png"
						alt=""
					/>
					<div class="flex items-center text-[#565656]">
						<img
							class="w-[16px], h-[16px]"
							src="../assets/images/Star-4.png"
							alt=""
						/>
						<p class="font-[Roboto]">4.5</p>
					</div>
				</div>
				<div class="mt-[8px]">
					<p class="font-[Roboto] text-[16px]">
						Товары из категории Акции и скидки Товары из категории....
					</p>
				</div>
				<div class="flex">
					<div class="mr-[7px]">
						<img src="../assets/images/bfarsace_201106_4269_012 1.png" alt="" />
					</div>
					<div class="ml-[7px]">
						<img
							class="mb-[7.5px]"
							src="../assets/images/gh-best-tv-brands-1587581394 1.png"
							alt=""
						/>
						<img
							class="mt-[7.5px]"
							src="../assets/images/lg-lfcs25426d-refrigerator-product-photos-7 1.png"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="p-6 bg-[#F1EFED] rounded-md">
				<div class="flex justify-between items-center">
					<img
						class="w-[101px] h-[38px]"
						src="../assets/images/1db6df8444b06bd87a73051107157676 1.png"
						alt=""
					/>
					<div class="flex items-center text-[#565656]">
						<img
							class="w-[16px], h-[16px]"
							src="../assets/images/Star-4.png"
							alt=""
						/>
						<p class="font-[Roboto]">4.5</p>
					</div>
				</div>
				<div class="mt-[8px]">
					<p class="font-[Roboto] text-[16px]">
						Товары из категории Акции и скидки Товары из категории....
					</p>
				</div>
				<div class="flex">
					<div class="mr-[7px]">
						<img src="../assets/images/bfarsace_201106_4269_012 1.png" alt="" />
					</div>
					<div class="ml-[7px]">
						<img
							class="mb-[7.5px]"
							src="../assets/images/gh-best-tv-brands-1587581394 1.png"
							alt=""
						/>
						<img
							class="mt-[7.5px]"
							src="../assets/images/lg-lfcs25426d-refrigerator-product-photos-7 1.png"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div class="p-6 bg-[#F1EFED] rounded-md">
				<div class="flex justify-between items-center">
					<img
						class="w-[101px] h-[38px]"
						src="../assets/images/1db6df8444b06bd87a73051107157676 1.png"
						alt=""
					/>
					<div class="flex items-center text-[#565656]">
						<img
							class="w-[16px], h-[16px]"
							src="../assets/images/Star-4.png"
							alt=""
						/>
						<p class="font-[Roboto]">4.5</p>
					</div>
				</div>
				<div class="mt-[8px]">
					<p class="font-[Roboto] text-[16px]">
						Товары из категории Акции и скидки Товары из категории....
					</p>
				</div>
				<div class="flex">
					<div class="mr-[7px]">
						<img src="../assets/images/bfarsace_201106_4269_012 1.png" alt="" />
					</div>
					<div class="ml-[7px]">
						<img
							class="mb-[7.5px]"
							src="../assets/images/gh-best-tv-brands-1587581394 1.png"
							alt=""
						/>
						<img
							class="mt-[7.5px]"
							src="../assets/images/lg-lfcs25426d-refrigerator-product-photos-7 1.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="flex justify-center mt-[66px]">
			<router-link to="all-magazins">
				<base-button>Все магазины</base-button>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
</script>
