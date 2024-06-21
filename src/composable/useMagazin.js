import { ref } from 'vue'
export const useMagazin = () => {
	const intro = ref([
		{
			logo: 'logo/table1.svg',
			rating: 5,
			title: 'Товары из категории Акции и скидки Товары из категории....',
			images: ['/img/table1.png', '/img/tables1.png', '/img/t1.png'],
		},
		{
			logo: 'logo/table2.svg',
			rating: 4,
			title: 'Лучшие техники для вас',
			images: ['/img/table2.png', '/img/tables2.png', '/img/t2.png'],
		},
		{
			logo: 'logo/table3.svg',
			rating: 4.4,
			title: 'Товары из категории Акции и скидки Товары из категории....',
			images: ['/img/table3.png', '/img/tables3.png', '/img/t3.png'],
		},
		{
			logo: 'logo/table4.svg',
			rating: 4.5,
			title: 'Отличная одежда на ваш вкуc',
			images: ['/img/table4.png', '/img/tables4.png', '/img/t4.png'],
		},
		{
			logo: 'logo/table5.svg',
			rating: 4.5,
			title:
				'Rачественная и доступная обувьвсе возможные товары только для вас',
			images: ['/img/table5.png', '/img/tables5.png', '/img/t5.png'],
		},
		{
			logo: 'logo/table6.svg',
			rating: 4.5,
			title: 'Товары из категории Акции и скидки Товары из категории....',
			images: ['/img/table6.png', '/img/tables6.png', '/img/t6.png'],
		},
		{
			logo: 'logo/table7.svg',
			rating: 4.5,
			title: 'Товары из категории Акции и скидки Товары из категории....',
			images: ['/img/table7.png', '/img/tables7.png', '/img/t7.png'],
		},

		{
			logo: 'logo/table8.svg',
			rating: 4.5,
			title: 'У нас самые дорогие и лучшие автомобили',
			images: ['/img/table8.png', '/img/tables8.png', '/img/t8.png'],
		},
		{
			logo: 'logo/table9.svg',
			rating: 4.5,
			title:
				'Если вас интересует одежда в классическом стиле, добро пожаловать в наш магазин.',
			images: ['/img/table9.png', '/img/tables9.png', '/img/t9.png'],
		},
	])
	const currentIndex = ref(0)
	const prevSlide = () => {
		currentIndex.value =
			(currentIndex.value - 1 + images.length) % images.length
	}

	const nextSlide = () => {
		currentIndex.value = (currentIndex.value + 1) % images.length
	}
	return {
		intro,
		currentIndex,
		prevSlide,
		nextSlide,
	}
}
