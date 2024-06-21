<script setup>
import { ref } from 'vue'
const isOpen = ref(false)

function openAccordion() {
	isOpen.value = !isOpen.value
}
</script>
<template>
	<div class="accordion w-[650px]">
		<div
			class="header flex justify-between items-center py-4 px-4 rounded-md"
			@click="openAccordion"
		>
			<img :class="isOpen ? 'rotate-90' : ''" src="/acc.png" />
			<span
				:class="isOpen ? 'text-primary' : ''"
				class="text-[20px] font-bold text-black"
				>Название любого вопроса из этой сферы деятельности?
			</span>
			<!-- <span class="text-xl duration-200" :class="isOpen ? 'rotate-2' : ''">
				+
			</span> -->
		</div>

		<div
			class="body overflow-hidden duration-200 ml-[150px] w-[670px]"
			:class="isOpen ? 'max-h-[500px]' : 'max-h-0'"
		>
			<div class="px-4 py-4 bg-[#F1EFED]">
				<p class="mb-8">
					Лента LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по
					проекту установлена на поверхности стеклянного фасада, под
					козырьком-отливом, и подключена к блокам OSRAM Optotronic OTi DALI
					75/220-240/24, по 1-му на каждый комплект ленты(6м). Лента укреплена с
					помощью кабельных стяжек. Лента, установлена по периметру фасада на
					уровне 6-ти и 18м. Всего уложено 84м.
				</p>
				<p>
					После монтажных работ конструкция отработала в режиме технического
					прогона с сентября по 3-ю декаду ноября. В процессе монтажа выявлено,
					что некоторые отрезки 6-ти метровой ленты имеют мерцание. Лента
					LFD400S-G1-827-06 4052899953611 классом исполнения IP67 по проекту
					установлена на поверхности стеклянного фасада, под козырьком-отливом,
					и подключена к блокам OSRAM Optotronic OTi DALI 75/220-240/24, по 1-му
					на каждый комплект ленты(6м).
				</p>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped></style>
