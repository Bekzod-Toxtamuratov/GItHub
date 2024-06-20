<template>
	<div class="">
		<div class="container">
			<Loading v-if="loading" />

			<div v-if="product">
				<div class="">
					<img class="h-[620px]" :src="product.thumbnail" alt="rasm" />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import api from '@/api'
import Loading from '@/components/Loading.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const product = ref(null)
const loading = ref(false)
const backPage = () => {
	router.go(-1)
}
const fetchProduct = () => {
	loading.value = true
	api
		.get(`/products/${route.params.id}`)
		.then(res => {
			product.value = res.data
		})
		.catch(err => console.log(err))
		.finally(() => {
			loading.value = false
		})
}

fetchProduct()
</script>

<style lang="scss" scoped></style>
