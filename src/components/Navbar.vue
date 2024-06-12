<template>
	<header class="container">
		<div class="flex justify-between py-3 bg-[#F7931F]">
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
		<div class="py-3 flex justify-between items-center">
			<img src="/Logo.png" alt="Logo" />

			<div class="flex gap-x-6 items-center">
				<div class="border border-[#F7931E] py-2 px-6">
					<select class="px-5 text-[#F7931E]" id="categories">
						<option value="Категории">Категории</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</select>
				</div>
				<div class="relative border border-[#F7931E] flex items-center">
					<input
						class="placeholder-shown:border-gray-500 outline-0 py-2 pl-4 text-black w-[435px]"
						placeholder="Поиск..."
					/>
					<img
						src="/search.png"
						alt="Search icon"
						class="absolute top-[20px] right-3"
					/>
				</div>
				<img src="/start.png" />
				<img src="/bag.png" />
				<img src="/11.png" />
				<img src="/person.png" />
				<img src="/flag.png" />
			</div>
		</div>
		<div class="grid grid-cols-3 py-[10px] gap-x-11">
			<div class="col-span-2">
				<img class="h-full w-[1350px]" src="/main.png" />
			</div>
			<div class="">
				<img class="h-full w-[450px]" src="/girl.png" />
			</div>
			
		</div>
	</header>
</template>

<script setup>
// No additional script needed
</script>

<style scoped lang="scss"></style>
