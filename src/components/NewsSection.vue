<template>
  <div class="my-8">
    <h2 class="text-2xl font-bold mb-4">{{ sectionTitle }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <NewsCard
        v-for="(news, index) in newsList"
        :key="index"
        :image="news.image"
        :title="news.title"
        :description="news.description"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'

export default {
  components: {
    NewsCard,
  },
  props: {
    sectionTitle: String,
    newsList: Array,
  },
}
</script>

<style scoped>
</style>
