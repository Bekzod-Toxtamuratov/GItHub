<script setup>
import { UseNewsProduct } from "../composable/useNovostifetch.js";
const { news, error, fechData } = UseNewsProduct();

fechData();
const btn = () => {
  fechData();
};
</script>

<template>
  <div class="container">
    <div>
      <h2 class="text-5xl leading-[56px] font-medium text-primary mb-10">
        Новости
      </h2>
      <div class="grid grid-cols-3 gap-5">
        <router-link
          class="group"
          :to="{ name: 'news-details', params: { id: item.id } }"
          v-for="item in news"
          :key="item.id"
        >
          <div class="group-hover:shadow-md bg-white p-2 mb-5">
            <img :src="item.thumbnail" alt="" class="mb-2" />
            <h2 class="font-medium text-lg mb-5">{{ item.title }}</h2>
            <p class="text-[#666666] font-normal text-sm mb-4">
              {{ item.description }}
            </p>
            <div class="flex items-center justify-between">
              <button
                class="group-hover:bg-primary border border-primary text-primary group-hover:text-white w-[104px] h-10 rounded"
              >
                Подробно
              </button>
              <p class="text-moviy text-sm leading-6 font-normal">24.04.2021</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="flex justify-center">
        <button
          @click="btn"
          class="hover:bg-primary border border-primary text-primary hover:text-white w-[224px] h-12 rounded-md text-lg font-medium"
        >
          Все магазины
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>