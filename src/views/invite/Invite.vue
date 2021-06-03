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
              <a href class="Themefont">{{item.pid}}</a>
            </div>
          </div>
          <div class="row" v-for="item in invite" :key="item">
            <!-- 文章循环开始 -->
            <div class="group ThemeFborder clearfix" >
              <div class="frwid fl">
                <div class="text">
                  <div class="date">
                    <div class="mmdd">
                      <span class="mm">{{item.date}}</span>
                    </div>
                    <p class="yyyy">{{item.year}}</p>
                  </div>
                  <a class="Themefonthover" href="Article-detail-id-771844.html">
                    <h4 class="overflow">{{item.title}}</h4>
                  </a>
                  <div
                    class="about"
                  >{{item.des}}</div>
                </div>
              </div>
              <!--  -->
              <div class="picture fr" style="padding:5px;">
                <a class="Themefonthover" href="Article-detail-id-771844.html">
                  <img style="border-radius:5px;"
                    src="http://pic.files.mozhan.com/mozhan/20170710/92eba9314d42025b4240f8f9b0beaee7.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338"
                    alt
                    class="pic"
                  />
                </a>
              </div>
            </div>

            <div class="page">
              <div class="col-lg-3">共 5 条记录 1 页</div>
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
import { useRoute } from "vue-router";
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
    onMounted(() => {
      getType("invite").then(res => {
        invite.value = res;
      });
    });
    return {
      invite
    };
  }
};
</script>