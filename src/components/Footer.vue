<template>
	<div class="w-full bg-[#023047]">
		<div class="container">
			<div
				class="py-[50px] flex flex-col gap-5 items-start md:grid grid-cols-5"
			>
				<div>
					<router-link to="home">
						<img src="/Logo.png" />
					</router-link>
				</div>
				<div>
					<h2 class="text-[22px] font-bold leading-6 text-[#FFFFFF] mb-[22px]">
						Карта сайта
					</h2>
					<router-link to="home">
						<p class="text-base font-normal leading-5 text-[#FFFFFF] mb-5">
							Главная страница
						</p>
					</router-link>

					<router-link to="about">
						<p class="text-base font-normal leading-5 text-[#FFFFFF] mb-5">
							О нас
						</p>
					</router-link>

					<p class="text-base font-normal leading-5 text-[#FFFFFF] mb-5">
						Категории товара
					</p>
					<p class="text-base font-normal leading-5 text-[#FFFFFF] mb-5">
						Акции
					</p>
					<p class="text-base font-normal leading-5 text-[#FFFFFF] mb-5">
						Новости
					</p>
					<router-link to="faq">
						<p class="text-base font-normal leading-5 text-[#FFFFFF] mb-5">
							FAQ
						</p>
					</router-link>
					<router-link to="personal"
						><p class="text-base font-normal leading-5 text-[#FFFFFF] mb-5">
							Личный кабинет
						</p>
					</router-link>
				</div>
				<div>
					<h2 class="text-[22px] font-bold leading-6 text-[#FFFFFF] mb-[46px]">
						Принимаем оплату через
					</h2>
					<img class="cursor-pointer" src="/payme.png" />
				</div>
				<div>
					<h2 class="text-[22px] font-bold leading-6 text-[#FFFFFF] mb-[46px]">
						Cоциальные сети
					</h2>
					<div class="flex gap-5">
						<img class="cursor-pointer" src="/telegram.png" />
						<img class="cursor-pointer" src="/instagram.png" />
						<img class="cursor-pointer" src="/facebook.png" />
					</div>
				</div>
				<div>
					<h2 class="text-[22px] font-bold leading-6 text-[#FFFFFF] mb-[22px]">
						Адрес
					</h2>
					<div class="flex gap-4 items-center mb-5">
						<img class="cursor-pointer w-[19px] h-[28px]" src="/location.png" />
						<p
							class="cursor-pointer font-normal text-[18px leading-5] text-[white] max-w-[178px]"
						>
							г Ташкент, р Чиланзар, Гавхар 52
						</p>
					</div>
					<div class="flex gap-4 items-center mb-4">
						<img class="cursor-pointer w-[18px] h-[14px]" src="/email.png" />
						<p
							class="cursor-pointer font-normal text-[18px leading-5] text-[white]"
						>
							info@tujjor.uz
						</p>
					</div>
					<div class="flex gap-4 items-center">
						<img class="cursor-pointer w-[18px] h-[18px]" src="/call.png" />
						<p
							class="cursor-pointer font-normal text-[18px leading-5] text-[white]"
						>
							+998 (90) 123 45 67
						</p>
					</div>
				</div>
			</div>
			<hr class="mb-4" />
			<p class="text-[white] text-[16px] leading-[16px] pb-5">
				Copyright tujjor 2021 Все прави зашишено.
			</p>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
