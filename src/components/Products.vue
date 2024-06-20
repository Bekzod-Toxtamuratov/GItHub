<script setup>
import { useProducts } from '@/composable/useProducts.js'
import { ref } from 'vue'
import Loading from './Loading.vue'

const limit = ref(15)
const skip = ref(0)
const { products, error, loading, fetchProducts } = useProducts(limit, skip)

const loadMore = () => {
	skip.value += limit.value
	fetchProducts()
}

fetchProducts() // Initial fetch
</script>

<template>
	<div class="container">
		<div class="h-[80px]"></div>
		<div>
			<Loading v-if="loading" />
			<div v-else-if="error" class="text-center py-5 text-red-500">
				Error loading products
			</div>
			<div class="grid lg:grid-cols-5 gap-5 grid-cols-2">
				<!-- <div
					class="bg-white p-5 rounded shadow-md hover:shadow-lg transition-shadow duration-400"
					v-for="product in products"
					:key="product.id"
				>
					<img
						:src="product.thumbnail"
						alt=""
						class="w-full h-48 object-cover rounded mb-3"
					/>
					<h1 class="text-2xl font-medium line-clamp-1 my-3">
						{{ product.title }}
					</h1>
					<p class="line-clamp-2 mb-3">{{ product.description }}</p>
					<h1 class="text-xl font-semibold">${{ product.price }}</h1>
				</div> -->
				<router-link
					class="bg-white rounded p-5 shadow-md"
					:to="{ name: 'product-detail', params: { id: item.id } }"
					v-for="item in products"
					:key="item.id"
				>
					<img :src="item.thumbnail" alt="" />
					<h1 class="text-2xl font-medium line-clamp-1 my-3">
						{{ item.title }}
					</h1>
					<p class="line-clamp-2 mb-3">{{ item.description }}</p>
					<h1 class="text-2xl font-medium">{{ item.price }} $</h1>
				</router-link>
			</div>
			<div class="flex items-center justify-center py-4">
				<button
					@click="loadMore"
					class="mt-5 bg-[#F7931E] hover:bg-slate-400 text-white py-2 px-4 rounded transition-colors duration-300"
					:disabled="loading"
				>
					Показать еще
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.line-clamp-1 {
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

button:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}
</style>
