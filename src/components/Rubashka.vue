<template>
	<div class="container mt-10 border border-red-500">
		<p>Главная страница / Рубашки / Базовая рубашка</p>
		<h2 class="text-primary text-[48px] font-medium">Базовая рубашка</h2>
		<div class="obshiy mt-10 mb-[119px] flex gap-2">
			<div class="box1 w-[10%] border flex flex-col gap-5">
				<img src="/2.png" />
				<img src="/3.png" />
				<img src="/4.png" />
				<img src="/5.png" />
			</div>
			<div class="box2 w-4/5 border flex gap-5">
				<img src="/blotnoy.png" />
				<div>
					<div class="flex gap-3 mb-8">
						<h2 class="text-[#023047] font-bold text-2xl">POLO</h2>
						<h2 class="text-[#023047] font-bold text-2xl">Рубашка</h2>
					</div>
					<div class="flex gap-2 items-center mb-5">
						<input
							v-model="bek"
							class="py-3 border border-primary px-3 w-[200px] text-xl font-bold text-primary"
							readonly
						/>
						<div class="flex gap-2 items-center">
							<p class="text-[16px] font-normal leading-5">Количество:</p>
							<div class="flex">
								<button
									@click="decreaseQuantity"
									class="text-3xl py-3 px-4 bg-kulrang font-bold"
								>
									-
								</button>
								<input
									class="py-3 border px-3 w-[70px] text-xl font-medium text-center"
									:value="`${quantity} шт`"
									readonly
								/>
								<button
									@click="increaseQuantity"
									class="bg-primary py-3 px-4 text-3xl font-bold text-white"
								>
									+
								</button>
							</div>
						</div>
					</div>
					<div class="w-[80%]">
						<p class="text-[black] font-bold text-xl mb-4">Цвет</p>
						<div class="grid grid-cols-4 gap-1 mb-4">
							<img class="border rounded-md" src="/t-shirt.png" />
							<div class="bg-[#C4C4C4] rounded-md"></div>
							<div class="bg-[#C4C4C4] rounded-md"></div>
							<div class="bg-[#C4C4C4] rounded-md"></div>
						</div>
					</div>
					<p class="text-[black] font-bold text-xl mb-4">Размер</p>
					<form class="w-full flex gap-3">
						<input
							class="text-[16px] font-normal"
							type="radio"
							id="age1"
							name="age"
							value="30"
						/>
						<label for="age1">XXL - 44</label>
						<input type="radio" id="age2" name="age" value="60" />
						<label for="age2">M - 38</label>
						<input type="radio" id="age3" name="age" value="100" />
						<label for="age3">XL - 42</label>
						<input type="radio" id="age3" name="age" value="100" />
						<label for="age3">S - 36</label>
						<input type="radio" id="age3" name="age" value="100" />
						<label for="age3">S - 36</label>
					</form>
					<div class="flex gap-20 w-full mt-5">
						<div>
							<div class="flex gap-2 mb-4">
								<h2 class="text-[16px] font-normal text-[#000000]">SKU:</h2>
								<p class="text-[#666666] text-[16px]">685813</p>
							</div>
							<div class="flex gap-2 mb-4">
								<h2 class="text-[16px] font-normal text-[#000000]">
									Посадка::
								</h2>
								<p class="text-[#666666] text-[16px]">высокая посадка</p>
							</div>
							<div class="flex gap-2 mb-4">
								<h2 class="text-[16px] font-normal text-[#000000]">Рейтинг:</h2>
								<div class="flex gap-2 items-center">
									<img class="w-[15px] h-[15px]" src="/start2.png" />
									<img src="/start2.png" />
									<img src="/start2.png" />
									<img src="/start2.png" />
									<img src="/start3.png" />
								</div>
							</div>
						</div>
						<div>
							<div class="flex gap-2 mb-4">
								<h2 class="text-[16px] font-normal text-[#000000]">Крой:</h2>
								<p class="text-[#666666] text-[16px]">средняя посадка</p>
							</div>
							<div class="flex gap-2 mb-4">
								<h2 class="text-[16px] font-normal text-[#000000]">Состав:</h2>
								<p class="text-[#666666] text-[16px]">100% хлопок</p>
							</div>
							<div class="flex gap-3 mb-4 items-center">
								<h2 class="text-[16px] font-normal text-[#000000]">Рейтинг:</h2>
								<div class="flex gap-2">
									<img class="w-[13.5px] h-[12px]" src="/yurak.png" />
								</div>
							</div>
						</div>
					</div>
					<hr class="bg-[#E5E5E5] mb-3" />
					<p
						class="text-[#666666] font-normal text-[14px] leading-[18px] max-w-[581px] mb-5"
					>
						Рубашка с контрастным дизайном Свитшот из мягкого футера. Довольно
						свободная модель с заниженной линией плеча. Рельефная трикотажная
						резинка по горловине, низу рукавов и нижнему краю.
					</p>
					<div class="flex gap-[100px]">
						<button
							class="py-4 px-8 rounded-md text-center leading-[18px] text-[18px] font-normal text-white bg-[#003466]"
						>
							Купить
						</button>
						<button
							class="py-4 px-8 rounded-md text-center leading-[18px] text-[18px] font-normal text-white bg-primary"
						>
							В корзину
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="px-[140px] mb-20">
			<img src="/222.png" />
			<img src="/23.png" />
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const quantity = ref(1)
const price = 100000
const bek = ref(`Цена: ${price * quantity.value} cум`)

watch(quantity, newQuantity => {
	bek.value = `Цена: ${price * newQuantity} cум`
})

const increaseQuantity = () => {
	quantity.value += 1
}

const decreaseQuantity = () => {
	if (quantity.value > 1) {
		quantity.value -= 1
	}
}
</script>
<style lang="scss" scoped></style>
