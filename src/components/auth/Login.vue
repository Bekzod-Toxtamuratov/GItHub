<template>
	<div class="bg-gray-300 h-screen flex justify-center items-center">
		<div class="bg-white w-[500px] p-10 rounded">
			<h1 class="text-center text-3xl mb-5">Login</h1>
			<form @submit.prevent="loginUser" class="flex flex-col gap-5">
				<label for="">
					Username
					<input
						v-model="userData.username"
						class="w-full py-3 px-5 border rounded outline-none focus:border-primary"
						type="text"
					/>
				</label>
				<label for="" class="relative">
					Password
					<input
						v-model="userData.password"
						class="w-full py-3 px-5 border rounded outline-none focus:border-primary"
						:type="check ? 'password' : 'text'"
					/>
					<button type="button" class="absolute right-3 bottom-2">
						<i @click="check = !check" class="text-2xl bx bxs-low-vision"></i>
					</button>
				</label>
				<button class="py-3 px-5 text-xl bg-primary rounded text-white">
					Login
				</button>
			</form>
		</div>
	</div>
</template>
<script setup>
import api from '@/api'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const check = ref(false)
const router = useRouter()
const userData = reactive({
	username: '',
	password: '',
})
const loginUser = () => {
	api
		.post('/auth/login', userData)
		.then(res => {
			localStorage.setItem('user', JSON.stringify(res.data))
			router.push('/home')
			console.log('res', res)
		})
		.catch(err => {
			console.log('err', err)
		})
}
</script>
<style scoped></style>
