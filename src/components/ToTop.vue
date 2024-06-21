<template>
	<button
		class="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-primary fixed bottom-6 right-10 z-20"
		@click="topFunction"
		id="myBtn"
		title="Go to top"
		v-show="showButton"
	>
		<!-- <img class="bg-white w-[40px] " src="/down.svg" /> -->
		<i class="text-[60px] text-white bx bx-chevron-down rotate-180"></i>
	</button>
</template>

<script setup>
import { ref } from 'vue'

const showButton = ref(false)
// const rotate = ref(false)

function topFunction() {
	// rotate.value = !rotate.value
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
	// rotate.value = false
}

window.addEventListener('scroll', () => {
	scrollFunction()
})

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		showButton.value = true
	} else {
		showButton.value = false
	}
}
</script>

<style scoped></style>
