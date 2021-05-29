<template>
  <div class="row clearfix tpl_four" id="md_tpl_four">
    <div class="column column1">
      <div class="article" id="md_article">
        <div class="articleBox module-wid clearfix">
          <div class="articleImgBor fl">
              <van-swipe autoplay="3000"  indicator-color="red" style="height:348px;">
                <van-swipe-item><a href="/images/layout/alipay.jpg"><img style="width:100%;border-radius:5px;" src="/images/layout/alipay.jpg"></a></van-swipe-item>
                <van-swipe-item><a href="/images/layout/wechat.jpg"><img style="width:100%;border-radius:5px;" src="/images/layout/wechat.jpg"></a></van-swipe-item>

              </van-swipe>
          </div>
          <div class="articleTab fr">
            <van-tabs border="true" title-active-color="red" v-model:active="active">
              <van-tab title="薅羊毛">
                <ul class="tabList" style="display:block;">
                  <li v-for="item in money" :key="item">
                    <a :title="item.title" :href="item.link" class="Themefonthover">
                      <span class="overflow fl">{{item.title}}</span>
                      <i class="fr">{{item.year}}-{{item.date}}</i>
                    </a>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="邀请有奖">
                <ul class="tabList" style="display:block;">
                  <li v-for="item in invite" :key="item">
                    <a :title="item.title" :href="item.link" class="Themefonthover">
                      <span class="overflow fl">{{item.title}}</span>
                      <i class="fr">{{item.year}}-{{item.date}}</i>
                    </a>
                  </li>
                </ul>
              </van-tab>
              <van-tab title="自助服务">
                <ul class="tabList" style="display:block;">
                  <li v-for="item in self" :key="item">
                    <a :title="item.title" :href="item.link" class="Themefonthover">
                      <span class="overflow fl">{{item.title}}</span>
                      <i class="fr">{{item.year}}-{{item.date}}</i>
                    </a>
                  </li>
                </ul>
              </van-tab>
            </van-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { getType } from "network/db";
export default {
  name: "Tab",
  setup() {
    const curIndex = ref(0);
    const money = ref([]);
    const invite = ref([]);
    const self = ref([]);
    const active = ref(0);
    onMounted(() => {
      getType("money").then(res => {
        money.value = res;
      });
      getType("invite").then(res => {
        invite.value = res;
      });
      getType("self").then(res => {
        self.value = res;
      });
    });
    const liClick = index => {
      curIndex.value = index;
    };
    return {
      curIndex,
      liClick,
      money,
      invite,
      self,
      active
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
</style>