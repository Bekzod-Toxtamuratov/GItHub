<template>
  <Path />
  <div class="container py-10">
    <div class="flex items-center justify-end mb-10">
      <select
        name="sort-by"
        id="sort-by"
        class="border border-primary rounded-md text-primary p-1 w-[13%]"
      >
        <option value="" disabled selected>Сортировка по...</option>
        <option
          value="name"
          class="border outline-none border-primary text-primary"
        >
          Имя
        </option>
        <option
          value="date"
          class="border outline-none border-primary text-primary"
        >
          Дата
        </option>
        <option
          value="rating"
          class="border outline-none border-primary text-primary"
        >
          Рейтинг
        </option>
        <option
          value="price"
          class="border outline-none border-primary text-primary"
        >
          Цена
        </option>
      </select>
    </div>

    <div class="flex gap-[20px]">
      <div class="sticky z-10">
        <div class="relative">
          <div class="absolute top-0 left-0">
            <p
              class="font-normal text-[18px] leading-[18px] pb-[15px] border-b border-black w-[265px]"
            >
              Диапазон цена
            </p>
            <input type="range" class="my-[20px] w-[265px]" />
            <p
              class="font-normal text-[18px] leading-[18px] pb-[15px] border-b border-black w-[265px]"
            >
              Филтр по брендам.
            </p>
            <div
              v-for="(a, index) in arr"
              :key="index"
              class="flex gap-3 items-center mt-[15px]"
            >
              <label :for="a" class="cursor-pointer">
                <input
                  type="checkbox"
                  :id="a"
                  :name="a"
                  class="cursor-pointer mr-3"
                />
                <span>{{ a }}</span>
              </label>
            </div>

            <button
              class="mt-[30px] bg-[#003466] text-k_white font-medium text-[14px] leading-[17px] px-[30px] py-[10px] rounded hover:bg-k_asosiy"
            >
              Фильтр
            </button>
          </div>
        </div>
      </div>

      <div class="ml-[300px]">
        <div class="grid md:grid-cols-4 grid-cols-2 gap-[10px]">
          <router-link
            :to="{ name: 'product-details', params: { id: item.id } }"
            v-for="(item, i) in products"
            :key="i"
            class="mb-[30px] bg-k_oq shadow-xl pb-5 relative"
          >
            <img :src="item.thumbnail" alt="" />
            <p
              class="font-normal text-[14px] leading-[16.41px] opacity-[70%] mx-[16px] mt-[10px] mb-[70px]"
            >
              {{ item.brand }}
            </p>
            <p
              class="font-medium text-[16px] leading-[16px] mx-[16px] mt-[10px] absolute bottom-[75px] md:bottom-[90px]"
            >
              {{ item.title }}
            </p>
            <p
              class="font-bold text-[14px] leading-[14px] mx-[16px] mt-[40px] text-k_asosiy line-through"
            >
              ${{ item.discountPercentage }}
            </p>
            <p
              class="font-bold text-[20px] leading-[20px] mx-[16px] mt-[10px] text-k_moviy"
            >
              ${{ item.price }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Path from "../components/path.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

import { onMounted } from "vue";
import api from "../api";

const products = ref([]);
const error = ref(null);
const loading = ref(true);
const limit = ref(8);
const skip = ref(0);

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

onMounted(() => {
  fetchProducts();
});

const route = useRoute();

const arr = ref([
  "Zara",
  "Legendr",
  "ABB",
  "Navigator",
  "TELFOR",
  "Wago",
  "UniVersal",
]);

const intro = ref([
  {
    id: 1,
    logo: "/img/katalog1.png",
  },
  {
    id: 2,
    logo: "/img/katalog1.png",
  },
  {
    id: 3,
    logo: "/img/katalog1.png",
  },
  {
    id: 4,
    logo: "/img/katalog1.png",
  },
  {
    id: 5,
    logo: "/img/katalog1.png",
  },
  {
    id: 6,
    logo: "/img/katalog1.png",
  },
  {
    id: 7,
    logo: "/img/katalog1.png",
  },
  {
    id: 8,
    logo: "/img/katalog1.png",
  },
  {
    id: 9,
    logo: "/img/katalog1.png",
  },
]);

const getImageUrl = (itemId) => {
  return route.params.id == itemId
    ? intro.value.find((item) => item.id === itemId).logo
    : "";
};
</script>
