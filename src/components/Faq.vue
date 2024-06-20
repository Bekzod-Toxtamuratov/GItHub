<template>
	<div class="container">
		<p class="my-10 text-[15px] font-normal leading-5">
			Главная страница / FAQ
		</p>
		<h1 class="mb-10 text-5xl font-mediumx text-primary roboto">
			Часто задаемевый вопросы
		</h1>
		<div class="flex justify-between gap-5">
			<div>
				<Accordion2 class="mb-8" />
				<Accordion2 class="mb-8" />
				<Accordion2 class="mb-8" />
				<Accordion2 class="mb-8" />
				<Accordion2 class="mb-8" />
				<Accordion2 class="mb-8" />
			</div>
			<div class="bg-[#FCE3A4] h-[409px] w-[379px]">
				<div class="px-4">
					<h2 class="font-bold text-[24px] leading-[31px] pt-5 mb-4">
						Оставьте ваш отзыв
					</h2>
					<input
						class="bg-[#FAF4F4] py-3 px-5 w-full mb-5 text-[#C4C4C4]"
						placeholder="Ваше имя"
					/>
					<input
						class="bg-[#FAF4F4] py-3 px-5 w-full text-[#C4C4C4] mb-4"
						placeholder="Ваш  e-mail"
					/>
					<textarea
						class="bg-[#FAF4F4] outline-none resize-none py-10 px-5 mb-4 w-full text-[#C4C4C4] h-[110px]"
						placeholder="Ваш отзыв"
					>
					</textarea>
					<div class="flex justify-center">
						<button class="bg-[#FE9E0D] text-[white] py-3 px-10">
							Отправить отзыв
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import Accordion2 from './Accordion2.vue'
</script>
<style lang="scss" scoped></style>
