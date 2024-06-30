<template>
  <div class="container">
    <h2 class="font-medium text-3xl sm:text-5xl text-k_yellow sm:py-7 py-5">
      Новости
    </h2>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 my-6">
      <NewsItem v-for="(item, i) in news" :key="i" :data="item" />
    </div>
  </div>
</template>

<script setup>

import { useNovost } from "../composable/useNovostifetch";
import NewsItem from "./NewsItem.vue"

const { news } = useNovost();
</script>

<style lang="scss" scoped></style>













