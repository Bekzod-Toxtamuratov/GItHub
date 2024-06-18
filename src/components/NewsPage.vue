<template>
  <div class="container mx-auto px-4">
    <NewsSection
      sectionTitle="Новости"
      :newsList="newsData"
    />
    <NewsSection
      sectionTitle="Видео новости"
      :newsList="videoNewsData"
    />
  </div>
</template>

<script>
import NewsSection from '../components/NewsSection.vue'

export default {
  components: {
    NewsSection,
  },
  data() {
    return {
      newsData: [
        {
          image: '/img/wildberries.png',
          title: 'В AliExpress представили портрет типичного покупателя в регионах',
          description: 'Петербург занимает 4-е место среди российских городов...'
        },
        {
          image: '/img/biznes.jpg',
          title: 'В AliExpress представили портрет типичного покупателя в регионах',
          description: 'Петербург занимает 4-е место среди российских городов...'
        },
        // Add more news objects here
      ],
      videoNewsData: [
        {
          image: '/img/alibaba.png',
          title: 'Российская компания Wildberries планирует выход на рынок Узбекистана',
          description: 'Петербург занимает 4-е место среди российских городов...'
        },
        // {
        //   image: 'path/to/video2.jpg',
        //   title: 'Российская компания Wildberries планирует выход на рынок Узбекистана',
        //   description: 'Петербург занимает 4-е место среди российских городов...'
        // },
        // Add more video news objects here
      ],
    }
  },
}
</script>

<style>
</style>
