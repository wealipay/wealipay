<template>
  <div class="Pagebg TopologyLeft">
    <headers></headers>
    <banner></banner>
    <div class="clearfix"></div>
    <div class="content">
      <div class="content-box n-box">
        <div class="body-right">
          <div class="breadCrumb">
            <div class="Crumb" v-for="item in invite" :key="item">
              <b>您当前的位置：</b>
              <a href="/">首页</a>
              <em>&gt;</em>
              <a href="" class="Themefont">{{item.pid}}</a>
            </div>
          </div>
          <div class="row">
            <!-- 文章循环开始 -->
            <div class="group ThemeFborder clearfix">
              <div class="frwid fl">
                <div class="text">
                  <div class="date">
                    <div class="mmdd">
                      <span class="mm">07</span>/
                      <span class="dd">10</span>
                    </div>
                    <p class="yyyy">2017</p>
                  </div>
                  <a class="Themefonthover" href="Article-detail-id-771844.html">
                    <h4 class="overflow">香港各界对主席重要讲话反向热烈</h4>
                  </a>
                  <div
                    class="about"
                  >习近平主席1日在出席庆祝香港回归祖国20周年大会暨香港特别行政区第五届政府就职典礼时发表重要讲话，在香港社会引起强烈反响。香港各界人士认为，习主席的讲话为...</div>
                </div>
              </div>
              <!--  -->
              <div class="picture fr">
                <a class="Themefonthover" href="Article-detail-id-771844.html">
                  <img
                    src="http://pic.files.mozhan.com/mozhan/20170710/92eba9314d42025b4240f8f9b0beaee7.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338"
                    alt
                    class="pic"
                  />
                </a>
              </div>
            </div>
            <div class="group ThemeFborder clearfix">
              <div class="frwid fl">
                <div class="text">
                  <div class="date">
                    <div class="mmdd">
                      <span class="mm">07</span>/
                      <span class="dd">10</span>
                    </div>
                    <p class="yyyy">2017</p>
                  </div>
                  <a class="Themefonthover" href="/Article-detail-id-771845.html">
                    <h4 class="overflow">深圳地铁回应女士车厢男多女少优先不等于专用</h4>
                  </a>
                  <div class="about"></div>
                </div>
              </div>
              <!--  -->
              <div class="picture fr">
                <a class="Themefonthover" href="/Article-detail-id-771845.html">
                  <img
                    src="http://pic.files.mozhan.com/mozhan/20170710/f52be2c542e1af5545d9de1520308da5.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338"
                    alt
                    class="pic"
                  />
                </a>
              </div>
            </div>
            <div class="group ThemeFborder clearfix">
              <div class="frwid fl">
                <div class="text">
                  <div class="date">
                    <div class="mmdd">
                      <span class="mm">07</span>/
                      <span class="dd">10</span>
                    </div>
                    <p class="yyyy">2017</p>
                  </div>
                  <a class="Themefonthover" href="/Article-detail-id-771846.html">
                    <h4 class="overflow">美军驱逐舰进中国西沙群岛 中方：严重军事挑衅</h4>
                  </a>
                  <div class="about"></div>
                </div>
              </div>
              <!--  -->
              <div class="picture fr">
                <a class="Themefonthover" href="/Article-detail-id-771846.html">
                  <img
                    src="http://pic.files.mozhan.com/mozhan/20170710/e628db8934a3bc67b3d447ca26366e99.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338"
                    alt
                    class="pic"
                  />
                </a>
              </div>
            </div>
            <div class="group ThemeFborder clearfix">
              <div class="frwid fl">
                <div class="text">
                  <div class="date">
                    <div class="mmdd">
                      <span class="mm">07</span>/
                      <span class="dd">10</span>
                    </div>
                    <p class="yyyy">2017</p>
                  </div>
                  <a class="Themefonthover" href="/Article-detail-id-771847.html">
                    <h4 class="overflow">柬埔寨三省打击跨国网络 37名中国人被捕</h4>
                  </a>
                  <div class="about"></div>
                </div>
              </div>
              <!--  -->
              <div class="picture fr">
                <a class="Themefonthover" href="/Article-detail-id-771847.html">
                  <img
                    src="http://pic.files.mozhan.com/mozhan/20170710/ff9cfd2873030ad4e335e5d11c4e18a5.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338"
                    alt
                    class="pic"
                  />
                </a>
              </div>
            </div>
            <div class="group ThemeFborder clearfix">
              <div class="frwid fl">
                <div class="text">
                  <div class="date">
                    <div class="mmdd">
                      <span class="mm">07</span>/
                      <span class="dd">10</span>
                    </div>
                    <p class="yyyy">2017</p>
                  </div>
                  <a class="Themefonthover" href="/Article-detail-id-771848.html">
                    <h4 class="overflow">学习贯彻书记对北京城市总体规划重要讲话</h4>
                  </a>
                  <div class="about"></div>
                </div>
              </div>
              <!--  -->
              <div class="picture fr">
                <a class="Themefonthover" href="/Article-detail-id-771848.html">
                  <img
                    src="http://pic.files.mozhan.com/mozhan/20170710/61b985c4892df4965dd2e786fa8a3bae.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338"
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
    return{
      invite
    }
  }
};
</script>