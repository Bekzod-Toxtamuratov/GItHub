<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Новости</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <NewsItem
        v-for="(item, index) in newsItems"
        :key="index"
        :item="item"
      />
    </div>

    <h1 class="text-2xl font-bold mb-4">Видео новости</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <VideoNewsItem
        v-for="(item, index) in videoNewsItems"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NewsItem from '../components/NewsItem.vue';
import VideoNewsItem from '../components/Videos.vue';

export default {
  name: 'Home',
  components: {
    NewsItem,
    VideoNewsItem
  },
  data() {
    return {
      newsItems: [],
      videoNewsItems: []
    }
  },
  mounted() {
    axios.get('https://api.example.com/news')  // Replace with your API endpoint
      .then(response => {
        this.newsItems = response.data.newsItems;
        this.videoNewsItems = response.data.videoNewsItems;
      })
      .catch(error => {
        console.error('There was an error fetching the news data:', error);
      });
  }
};
</script>
