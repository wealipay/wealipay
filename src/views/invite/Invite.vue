<template>
  <div class="Pagebg TopologyLeft">
    <headers></headers>
    <banner></banner>
    <div class="clearfix"></div>
    <div class="content">
      <div class="content-box n-box">
        <div class="body-right" style="background:pink;border-radius:10px;">
          <div class="breadCrumb">
            <div class="Crumb" v-for="item in invite" :key="item">
              <b>您当前的位置：</b>
              <a href="/">首页</a>
              <em>&gt;</em>
              <a href class="Themefont">{{ item.pid }}</a>
            </div>
          </div>
          <div class="row" v-for="item in invite" :key="item">
            <!-- 文章循环开始 -->
            <div class="group ThemeFborder clearfix">
              <div class="frwid fl">
                <div class="text">
                  <div class="date">
                    <div class="mmdd">
                      <span class="mm">{{ item.date }}</span>
                    </div>
                    <p class="yyyy">{{ item.year }}</p>
                  </div>
                  <a
                    @click.prevent="goDetail(item.id)"
                    class="Themefonthover"
                    href="Article-detail-id-771844.html"
                  >
                    <h4 style="text-align:left;" class="overflow">{{ item.title }}</h4>
                  </a>
                  <div style="text-align:left;" class="about">{{ item.des }}</div>
                </div>
              </div>
              <!--  -->
              <div class="picture fr" style="padding:5px;">
                <a class="Themefonthover" href>
                  <img style="border-radius:5px;" :src="item.img" alt class="pic" />
                </a>
              </div>
            </div>

            <div class="page">
              <div class="col-lg-3">共 {{ invite.length }} 条记录 1 页</div>
              <div class="col-lg-9 pull-right">
                <ul class="pagination"></ul>
              </div>
            </div>
          </div>
        </div>
        <asides></asides>

        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Asides from "views/detail/Aside";
import Headers from "views/home/child/Header";
import Banner from "views/home/child/Banner";
import { getDetail } from "network/detail";
import { getType } from "network/db";
import { useRouter } from "vue-router";
import { ref, onMounted, reactive, toRefs } from "vue";

export default {
  name: "Category",
  components: {
    Asides,
    Headers,
    Banner
  },
  setup() {
    const pid = ref([]);
    const invite = ref([]);
    const router = useRouter();
    onMounted(() => {
      getType("invite").then(res => {
        invite.value = res;
      });
    });
    const goDetail = id => {
      router.push({ path: "/detail", query: { id } });
    };
    return {
      invite,
      goDetail
    };
  }                                                      
};
</script>
