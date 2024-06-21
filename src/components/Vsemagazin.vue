<template>
  <div class="container mt-[40px]">
    <nav aria-label="breadcrumb">
      <ul class="md:flex space-x-2">
        <li v-for="(crumb, index) in breadcrumbs" :key="index">
          <span v-if="index !== 0" class="text-gray-500"
            >Главная страница /
          </span>
          <router-link
            v-if="index < breadcrumbs.length - 1"
            :to="crumb.path"
            class="text-blue-500 hover:underline"
          >
            {{ crumb.name }}
          </router-link>
          <span v-else class="text-gray-700">{{ crumb.name }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const breadcrumbs = computed(() => {
  return route.matched.map((route) => ({
    name: route.name,
    path: route.path,
  }));
});
</script>

<style lang="scss" scoped></style>