<template>
    <div class="container mt-[98px] mb-[80px]">
        <h1 class="font-bold text-[40px] w-[780px]">
            Российская компания Wildberries планирует выход на рынок Узбекистана
        </h1>
        <div class="flex">
            <div class="w-full">
                <img src="../../public/new_detail/first.jpg" alt="image" class="w-full">
                <p class="mt-[31px] text-[#666666] text-[16px]">
                    Стороны обсудили возможное сотрудничество в сфере экспортных интернет-продаж текстильной и
                    швейно-трикотажной промышленности с производителями Узбекистана. ТАШКЕНТ, 5 мар - Sputnik.
                    Российская компания Wildberries рассматривает рынок Узбекистана как очень перспективный,
                    сообщает Ассоциация "Узтекстиль".
                </p>
                <p class="py-5 text-[#666666] text-[16px]">
                    На днях в Ассоциации прошла встреча руководства с представителями российского онлайн-ритейлера
                    Wildberries, где узбекская компания была ознакомлена с действующей бизнес-моделью, со спецификой
                    интернет-торговли. В частности, стороны обсудили возможное сотрудничество в сфере экспортных
                    интернет-продаж текстильной и швейно-трикотажной промышленности с производителями Узбекистана.
                </p>
                <p class="mb-[21px] text-[#666666] text-[16px]">
                    Wildberries выразили повышенную заинтересованность входа на рынок электронной коммерции
                    Узбекистана, а также проработали вопрос входа на рынок с инвестированием своих средств в
                    экономику страны", - говорится в сообщении.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- First Image -->
                    <div class="flex justify-center items-center">
                        <img src="../../public/new_detail/second.jpg" alt="Wildberries Office"
                            class="w-full object-cover h-64 md:h-full shadow-md">
                    </div>
                    <!-- Second and Third Images -->
                    <div class="flex flex-col gap-8">
                        <!-- Second Image -->
                        <div class="flex justify-center items-center">
                            <img src="../../public/new_detail/thrid.jpg" alt="Wildberries Changing Room"
                                class="w-full object-cover h-64 md:h-full shadow-md">
                        </div>
                        <!-- Third Image -->
                        <div class="flex justify-center items-center">
                            <img src="../../public/new_detail/fourth.jpg" alt="Wildberries Meeting"
                                class="w-full object-cover h-64 md:h-full shadow-md">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/2 pl-8">
                <h2 class="text-[32px] font-bold text-[#F7931E]">Последние новости</h2>
                <div>
                    <div v-for="item in items" :key="item.id" class="grid grid-cols-1 gap-4 py-4">
                        <div class="flex justify-center items-center">
                            <img :src="item.image" :alt="item.imageAlt" class="w-full object-cover h-64 shadow-md">
                        </div>
                        <div class="flex justify-center items-center">
                            <p class="text-[20px] font-medium">{{ item.title }}</p>
                        </div>
                        <div class="flex justify-center items-center">
                            <p class="text-[#666666] text-[16px]">
                                {{ item.shortText }}
                                <span v-if="item.showFullText">{{ item.fullText }}</span>
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <button @click="toggleText(item)" class="bg-orange-500 text-white px-4 py-2 rounded">
                                {{ item.showFullText ? 'Скрыть' : 'Подробно' }}
                            </button>
                            <p class="text-[#219EBC]">{{ item.data }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    make it responsive
</template>
<script setup>
import { ref } from 'vue';

const items = ref([
  {
    id: 1,
    image: '../public/new_detail/fifth.jpg',
    title: 'Бренды отказываются от "черной пятницы" из-за изменения климата',
    shortText: 'По мнению активистов, день всемирных распродаж заставляет людей покупать ненужные вещи и тем самым вредить природе.....',
    fullText: 'По мнению активистов, день всемирных распродаж заставляет людей',
    data: '09.04.2021',
    showFullText: false,
  },
  {
    id: 2,
    image: '../public/new_detail/sixth.jpg',
    title: 'AliExpress запустил в России интернет-магазин "Лоукостер"',
    shortText: 'Новый интернет-магазин будет рассчитан на аудиторию до 25 лет, а также на тех, кто хочет купить известные бренды с доставкой из России....',
    fullText: 'Новый интернет-магазин будет рассчитан на аудиторию до 25 лет',
    data: '15.04.2021',
    showFullText: false,
  },
]);

const toggleText = (item) => {
  item.showFullText = !item.showFullText;
};
</script>


<style lang="scss" scoped>

</style>

