<template>
	<div class="bg-[#FBFBFB]">
		<div class="container py-10">
			<h1 class="mt-[60px] mb-9 text-[48px] font-normal leading-6">
				Персональные данные
			</h1>
			<p class="text-[22px] font-normal leading-5 mb-[70px]">
				* — Поля, обязательные для заполнения.
			</p>
			<div class="grid grid-cols-3 mb-[60px]">
				<div>
					<div class="mb-10">
						<p class="text-[16px] font-medium leading-5 mb-1">
							* Загрузка изображения
						</p>
						<p />
						<input
							placeholder="загрузить"
							type="text"
							class="py-2 px-5 border-primary outline- border w-[80%]"
						/>
					</div>

					<div class="mb-10">
						<p class="text-[16px] font-medium leading-5 mb-1">Telfon raqam</p>
						<p />
						<input
							placeholder="93 089 41 82"
							type="text"
							class="py-2 px-5 border-primary border w-[80%]"
						/>
					</div>
					<div class="mb-10">
						<p class="text-[16px] font-medium leading-5 mb-1">Адрес</p>
						<p />
						<input
							placeholder="Введите адрес"
							type="text"
							class="py-2 px-5 border-primary border w-[80%]"
						/>
					</div>
				</div>
				<div>
					<div class="mb-10">
						<p class="text-[16px] font-medium leading-5 mb-1">Имя</p>
						<p />
						<input
							placeholder="Bekzod"
							type="text"
							class="py-2 px-5 border-primary border w-[80%]"
						/>
					</div>
					<div>
						<p class="text-[16px] font-medium leading-5 mb-1">Город</p>
						<div class="mb-10 border border-primary w-[80%]">
							<select
								class="py-3 border-primary top-0 outline-none w-full"
								name="cars"
								id="cars"
							>
								<option value="volvo">Ваш Город</option>
								<option value="saab">Toshkent</option>
								<option value="opel">Moskva</option>
								<option value="audi">Pekin</option>
							</select>
						</div>
						<p class="text-[16px] font-medium leading-5 mb-1">Добавить адрес</p>
						<div class="border border-primary w-[80%]">
							<select
								class="py-3 border-primary top-0 text-primary outline-none w-full"
								name="cars"
								id="cars"
							>
								<option class="text-black" value="volvo">Добавить адрес</option>
								<option value="saab">Toshkent</option>
								<option value="opel">Qashqadaryo</option>
								<option value="audi">Surxandaryo</option>
							</select>
						</div>
					</div>
				</div>
				<div>
					<div class="mb-[60px]">
						<p class="text-[16px] font-medium border-primary leading-5 mb-1">
							Фамиля
						</p>
						<p />
						<input
							placeholder="Toxtamuratov"
							type="text"
							class="py-2 px-5 border-primary border w-[80%]"
						/>
					</div>
					<div class="border border-primary w-[80%]">
						<select
							class="py-3 border-primary top-0 outline-none w-full"
							name="cars"
							id="cars"
						>
							<option value="volvo">Ваш Район</option>
							<option value="saab">Toshkent</option>
							<option value="opel">Yashnobod</option>
							<option value="audi">Murobod</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center pb-[150px]">
			<button class="py-2 px-10 text-white bg-primary rounded-md">
				Cохранить
			</button>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
