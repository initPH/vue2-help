<template>
  <swiper :options="swiperOptions">
    <swiper-slide>
      <img src="@/assets/logo.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/logo1.png" alt="" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        autoPlay: true,
        // autoplay: {
        //   delay: 100,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
      },
    };
  },
};
</script>

<style></style>
