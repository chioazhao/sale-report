
<template>
  <div class="swiper-container"
       v-if="reRender">
    <!-- <swiper class="swiper"
            :options="swiperOptions">
      <swiper-slide v-for="item of noticeList"
                    :key="item">
        <div class="slide-text">{{ item }}</div>
      </swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
export default {
  name: 'Banner',
  activated () {

    this.activateBanner()
  },
  computed: {
    ...mapGetters({
      noticeList: 'finance/noticeList',
    }),
    swiperOptions () {
      return {
        // effect: 'fade',
        // direction: 'vertical',
        // slidesPerView: 1,
        speed: 90000,
        autoplay: this.noticeList.length > 1 ? {
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        } : false,
        loop: true,
      }
    }
  },
  data () {
    return {
      reRender: true,
    }
  },
  methods: {
    activateBanner () {
      this.reRender = false;
      setTimeout(() => {
        this.reRender = true;
      }, 200);
    }
  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 36px;
  // background-color: #fff;
  .swiper-slide {
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    // font-weight: bold;
    cursor: pointer;
    .slide-text {
      position: relative;
      display: inline-block;
    }
  }
}
</style>