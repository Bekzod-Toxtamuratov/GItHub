<template>
  <div class="container mt-20 md:mb-[120px]">
    <p class="text-k_asosiy font-medium text-4xl sm:text-3xl md:text-5xl leading-tight mb-10">
      Новости
      
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="item in products"
        :key="item.id"
        class="mb-8 bg-k_oq shadow-xl pb-5 relative space-x-5 transform transition-all duration-300 ease-in-out hover:translate-x-2 hover:translate-y-2 hover:bg-k_green cursor-pointer p-5"
      >
        <img :src="item.thumbnail" alt="" class="w-full h-48 object-cover" />
        <p class="font-medium text-lg mx-4 mt-2 absolute bottom-24">
          {{ item.title }}
        </p>
        <p class="font-normal text-sm opacity-70 mx-4 mt-2 mb-16">
          {{ item.description }}
        </p>
        <div class="flex justify-between items-center mx-4">
          <button
            @click="more()"
            class="text-sm bg-k_asosiy text-k_white font-normal h-10 px-4 rounded-md mt-5"
          >
            Подробно
          </button>
          <p class="font-bold text-xl mt-2 text-k_moviy">
            24.04.2021
          </p>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center mb-10">
    
      <button @click="allproducts" class="bg-k_asosiy px-[50px] py-[16px] text-k_oq rounded-[5px] font-medium text-[18px] leading-[18px]"> Все магазины</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "../api";

const products = ref([]);
const error = ref(null);
const loading = ref(true);
const limit = ref(3);
const skip = ref(0);
const bezlimit = ref();

const fetchProducts = () => {
  api
    .get(`/products?limit=${limit.value}&skip=${skip.value}`)
    .then((res) => {
      products.value = [...products.value, ...res.data.products];
      skip.value += limit.value;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });
};

const allproducts = () => {
  api
    .get(`/products?bezlimit=${bezlimit.value}&skip=${skip.value}`)
    .then((res) => {
      products.value = [...products.value, ...res.data.products];
      skip.value += bezlimit.value;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });
};

const more = () => {
  api
    .get(`/products/description?limit=${limit.value}&skip=${skip.value}`)
    .then((res) => {
      products.value = [...products.value, ...description];
      skip.value += limit.value;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });
};

onMounted(() => {
  fetchProducts();
});
</script>

<style lang="scss" scoped></style>