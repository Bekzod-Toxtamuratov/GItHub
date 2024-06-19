<template>
	<header class="container bg-[#F7931F]">
		<div class="flex justify-between py-3">
			<div class="flex items-center">
				<img src="/location.png" alt="Location icon" class="mr-2" />
				<p class="text-[#FFFFFF] max-w-[178px]">
					г Ташкент, р Чиланзар, Гавхар 52
				</p>
			</div>
			<div class="flex items-center px-8 gap-x-5">
				<div class="flex items-center">
					<img src="/email.png" alt="Email icon" class="mr-2" />
					<p class="text-white text-[18px]">info@tujjor.uz</p>
				</div>
				<div class="flex items-center">
					<img src="/call.png" alt="Call icon" class="mr-2" />
					<p class="max-w-[164px] text-[18px] font-medium text-white">
						+998 (90) 123 45 67
					</p>
				</div>
			</div>
		</div>
	</header>
	<div class="container sticky z-10 top-0 rigth-0 w-full bg-white shadow-lg">
		<div class="w-full">
			<div class="py-3 flex justify-between items-center z-10">
				<img src="/Logo.png" alt="Logo" />

				<div class="flex gap-x-6 items-center">
					<div class="flex gap-3 border border-[#F7931E] py-2 px-4">
						<img src="/image.svg" alt="image.svg" />
						<button
							@click="toggleDropdown"
							class="bg-primary text-white px-4 py-2 rounded"
						>
							Категории
						</button>
					</div>
					<div class="relative border border-[#F7931E] flex items-center">
						<input
							class="placeholder-shown:border-gray-500 outline-0 py-2 pl-4 text-black w-[435px]"
							placeholder="Поиск..."
						/>
						<span class="bg-primary py-3 px-4 absolute right-0">
							<img src="/search.png" alt="Search icon" class="" />
						</span>
						<span class="py-3 px-4 absolute right-12">
							<img src="/bek.svg" alt="Search icon" class="" />
						</span>
					</div>
					<img src="/start.png" />
					<img src="/bag.png" />
					<img src="/11.png" />
					<img src="/person.png" />
					<img src="/flag.png" />
					<img src="/flag.png" />
				</div>
			</div>
		</div>
		<CategoryDropdown v-if="showDropdown" @close="toggleDropdown" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryDropdown from './CategoryDropdown.vue'

const showDropdown = ref(false)

const toggleDropdown = () => {
	showDropdown.value = !showDropdown.value
}
</script>
