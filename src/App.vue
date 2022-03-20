<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <div class="route__container" v-show="isShowRouter">
      <router-link class="route__item button" tag="button" :to="'/sale'"
        >看板</router-link
      >
    </div>
  </div>
</template>
<script>
import { getQueryString, isEmpty } from "@/utils/utils.js";
import { mapActions } from "vuex";
export default {
  created() {
    let token = getQueryString("token");
    if (!isEmpty(token)) {
      console.log(token);
      this.setToken(token);
    }
  },
  data() {
    return {
      isShowRouter: true,
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "recommendGoodsScreen") {
        this.isShowRouter = false;
      } else {
        this.isShowRouter = true;
      }
    },
  },
  methods: {
    ...mapActions({
      setToken: "finance/setToken",
    }),
  },
};
</script>
<style lang="scss" scoped>
#app {
  // position: relative;
  .route__container {
    position: fixed;
    z-index: 99;
    top: 20px;
    right: 30px;

    .route__item {
      &.router-link-active {
        color: #fff;
        border-color: #177ddc;
        background: #177ddc;
      }
    }

    .button {
      color: #fff;
      border-color: #fff;
      background-color: transparent;
      text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
      height: 32px;
      padding: 4px 15px;
      line-height: 1.5715;
      position: relative;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      background-image: none;
      border: 1px solid transparent;
      box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

      height: 32px;
      padding: 4px 15px;
      font-size: 14px;
      border-radius: 2px;
      margin-left: 5px;
    }
  }
}
</style>