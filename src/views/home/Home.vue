<template>
  <div id="body" style="overflow-x:hidden; overflow-y: scroll;outline: none;" class="Pagebg">
    <div class="Pagebg">
      <div class="container">
        <headers></headers>
        <banner></banner>  
        <tab :tabClick="tab" :titles="['薅羊毛', '邀请有奖', '自助服务']"></tab>
        <hot :hots="hot"></hot>
        <new :news="news"></new>
        <footer></footer>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from "views/home/child/Header";
import Banner from "views/home/child/Banner";   
import Notice from "views/home/child/Notice";
import Tab from "views/home/child/Tab";
import Message from "views/home/child/Message";
import New from "views/home/child/New";
import Hot from "views/home/child/Hot";
import Footer from "views/home/child/Footer";
import { getType } from "network/db";
import { onMounted, ref, toRefs, reactive, computed } from "vue";
export default {
  name: "Home",
  components: {
    Headers,
    Banner,  
    Tab,
    Message,
    New,
    Hot,
    Footer
  },
  setup() {
    const hot = ref([]);
    const news = ref([]);
    const tab = index => {
      imitid.value = index;
    };
    onMounted(() => {
      getType('hot').then(res => {
        hot.value = res;
      });
      getType('news').then(res=>{
        news.value=res;
      })
    });
    return {
      hot,
      news
    };
  }
};
</script>