<template>
  <div class="py-10">
    <div class="container">
      <h2 class="text-[#F7931E] text-[48px] font-medium mb-5">Товары со скидкой</h2>
      <Loading v-if="loading" />
      <div class="grid grid-cols-5 gap-5">
        <div
          class="bg-white p-5 rounded-xl border hover:shadow-lg"
          v-for="item in products"
          :key="item.id"
        >
          <img :src="item.thumbnail" alt="" />

          <h1 class="text-2xl font-medium line-clamp-1 my-3">
            {{ item.title }}
          </h1>
          <p class="line-clamp-2 mb-3">{{ item.description }}</p>
          <p class="text-yellow-500"><del>Eski narx</del></p>
          <h1 class="text-2xl font-medium">{{ item.price }} $</h1>
        </div>
      </div>
      <div class="mx-auto w-60">
        <button
          v-if="!loading"
          class="px-10 my-5 w-full bg-[#c26527] hover:bg-yellow-700 rounded-xl text-white py-3"
          @click="fetchProducts2()"
        >
          Показать еще
        </button>
      </div>
    </div>

    <div ref="loadMore" id="loadMore">
      <!-- <Loading v-if="loading" /> -->
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  fetchProducts2();
});
import Navbar from "../components/Navbar.vue";
import Loading from "../components/Loading.vue";
import { useProducts } from "../composable/useProducts";
import { ref, onMounted } from "vue";

const loadMore = ref(null);

const { products, loading, error, fetchProducts2 } = useProducts();
</script>

<style lang="scss" scoped></style>
