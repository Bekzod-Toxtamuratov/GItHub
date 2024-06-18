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
				<label for="">
					Password
					<input
						v-model="userData.password"
						class="w-full py-3 px-5 border rounded outline-none focus:border-primary"
						type="text"
					/>
				</label>
				<button class="py-3 px-5 text-xl bg-primary rounded text-white">
					Login
				</button>
			</form>
		</div>
	</div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import api from '@/api'
import { useRouter } from 'vue-router'
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
