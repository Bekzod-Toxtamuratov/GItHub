<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden flex">
    <img :src="item.image" alt="video news image" class="w-1/3 h-auto object-cover">
    <div class="p-4 flex-1">
      <h2 class="text-lg font-semibold mb-2">{{ item.title }}</h2>
      <p class="text-sm text-gray-600 mb-4">{{ item.description }}</p>
      <a :href="item.link" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        {{ item.buttonText }}
      </a>
      <div v-if="item.date" class="text-right text-blue-500 mt-2">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoNewsItem',
  props: {
    item: Object
  }
};
</script>
