<!-- eslint-disable vue/valid-v-for -->

<template>
  <q-page class="bg-[#24292E] lg:pt-[90px] md:px-[16px] pb-[20px]">
    <div class="lg:columns-2 justify-center">
      <img class="md:!flex hidden w-full" src="../assets/chart1.png" alt="" />
      <img class="md:!flex hidden w-full" src="../assets/chart3.png" alt="" />
      <img class="md:!flex hidden w-full" src="../assets/chart2.png" alt="" />
      <img class="md:hidden flex w-full" src="../assets/chart1-r.png" alt="" />
      <img class="md:hidden flex w-full" src="../assets/chart2-r.png" alt="" />
      <img class="md:hidden flex w-full" src="../assets/chart3-r.png" alt="" />
      <img class="md:hidden flex w-full" src="../assets/chart4-r.png" alt="" />

      <div class="px-[20px] flex flex-col">
        <div class="flex md:justify-start justify-center">
          <p class="gallery-text text-[16px] md:text-[36px]">Event Galleries</p>
        </div>
        <swiper
          class="w-full"
          :modules="modules"
          :slides-per-view="1"
          :space-between="1"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="item in getDatos">
            <img :key="item.id" :src="item.download_url" alt=""
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    getDatos() {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      return this.$store.getters['rick_morty/getData'];
    },
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectFade],
    };
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/no-unsafe-member-access
    if (this.getDatos.length == 0) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.$store.dispatch('rick_morty/fetchData');
    }
  },
});
</script>
<style>
.gallery-text {
  font-style: normal;
  font-weight: 500;
  line-height: 55px;
  color: white;
}
</style>
