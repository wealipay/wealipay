<template>
  <div
    id="body"
    style="overflow-x:hidden; overflow-y: scroll;outline: none;"
    class="Pagebg"
  >
    <div class="Pagebg">
      <div class="container">
        <header></header>
        <banner></banner>
        <tab :tabClick="tab" :titles="['薅羊毛', '邀请有奖', '全栈服务']"></tab>
        {{ imitid }}
        <hot :hots="hot"></hot>
        <new :news="news"></new>
        <message></message>
        <footer></footer>
        <span v-for="item in yellow" :key="item">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "views/home/child/Header";
import Banner from "views/home/child/Banner";
import Notice from "views/home/child/Notice";
import Tab from "views/home/child/Tab";
import Message from "views/home/child/Message";
import New from "views/home/child/New";
import Hot from "views/home/child/Hot";
import Footer from "views/home/child/Footer";

import { db, getType } from "network/db";
import { onMounted, ref, reactive } from "vue";

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Tab,
    Message,
    New,
    Hot,
    Footer,
  },
  setup() {
    const hot = ref([]);
    const news = ref([]);
    const imitid = ref(0);
    const yellow = ref([]);
    const tab = (index) => {
      imitid.value = index;
    };
    const goods = reactive({
      money: { page: 0, list: [] },
    });
    onMounted(() => {
      console.log(55);

      db()
        .then((res) => {
          hot.value = res.hot;
          news.value = res.new;
        })
        .catch((err) => {});
      getType("money").then((res) => {
        alert(res);
        goods.money.list = res;
      });
      yellow.value=goods.money;
    });
    return {
      hot,
      news,
      getType,
      yellow,
    };
  },
};
</script>
