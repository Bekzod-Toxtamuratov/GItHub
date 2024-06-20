<template>
	<button
		class="  flex items-center justify-center w-20 h-20 rounded-full bg-white  fixed bottom-6 right-10 z-20"
		@click="topFunction"
		id="myBtn"
		title="Go to top"
		v-show="showButton"
	>
		<img class="bg-white w-[40px] " src="/down.svg" />
	</button>
</template>

<script setup>
import { ref } from 'vue'

const showButton = ref(false)

function topFunction() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
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
