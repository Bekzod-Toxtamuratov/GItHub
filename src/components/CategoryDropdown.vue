<template>
	<div class="absolute top-16 left-0 bg-white shadow-lg p-4 w-80">
		<div class="grid grid-cols-2 gap-4">
			<div>
				<h3 class="font-bold">Женщинам</h3>
				<ul>
					<li>Одежда</li>
					<li>Обувь</li>
					<li>Аксессуары</li>
					<li>Нижнее белье</li>
					<li>Чулки, носки, колготки</li>
					<li>Домашняя одежда</li>
					<li>Одежда для беременных</li>
					<li>Купальники и пляжная одежда</li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold">Мужчинам</h3>
				<ul>
					<li>Одежда</li>
					<li>Обувь</li>
					<li>Нижнее белье</li>
					<li>Носки</li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold">Детям</h3>
				<ul>
					<li>Одежда</li>
					<li>Обувь</li>
					<li>Школьная форма</li>
					<li>Аксессуары детские</li>
					<li>Спорт и развлечения</li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold">Спецодежда</h3>
				<ul>
					<li>Спецодежда рабочая</li>
					<li>Обувь рабочая</li>
					<li>Медицинская одежда</li>
					<li>Сигнальная одежда</li>
					<li>Влагозащитная одежда</li>
					<li>Парам и официантам</li>
					<li>Для пищевой промышленности</li>
					<li>Одежда для погребения</li>
					<li>Форменная одежда</li>
					<li>Форма для охранников</li>
					<li>Аксессуары</li>
					<li>Обувь медицинская</li>
					<li>Академическая одежда</li>
				</ul>
			</div>
			<div>
				<h3 class="font-bold">Путешествия</h3>
				<ul>
					<li>Багаж</li>
					<li>Аксессуары для путешествий</li>
				</ul>
			</div>
		</div>
		<button
			@click="$emit('close')"
			class="bg-red-500 text-white px-4 py-2 rounded mt-4"
		>
			Close
		</button>
	</div>
</template>

<script>
export default {
	name: 'CategoryDropdown',
}
</script>

<style scoped>
ul {
	list-style: none;
	padding: 0;
}
</style>
