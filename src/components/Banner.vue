<template>
  <div class="container">
    <div class="md:grid grid-cols-2 gap-3">
   <swiper
        :slides-per-view="1"
        :space-between="3"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper w-full "
      >
        <swiper-slide>
          <img class="w-full" src="/public/banners/banner1.png" alt="Banner 1" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="/public/banners/banner1.png" alt="Banner 2" />
        </swiper-slide>
        <swiper-slide>
          <img class="w-full" src="/public/banners/banner1.png" alt="Banner 3" />
        </swiper-slide>
      </swiper>
      
     
      <div class="my-5">
      <img class="w-full" src="/public/banners/banner2.png" alt="">
      <div class="md:grid grid-cols-2 gap-3 my-3">

        <img class="w-full" src="/public/banners/banner3.png" alt="">
        <img class="w-full" src="/public/banners/banner4.png" alt="">
      </div>
      </div>
      
    </div>

  </div>
</template>

<script >
  
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, Navigation],
    };
  },
};
</script>

<style>
@import "swiper/swiper-bundle.css";

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>