<template>
  <div id="body" style="overflow-x:hidden; overflow-y: scroll;outline: none;" class="Pagebg">
    <div class="Pagebg TopologyLeft">
      <headers></headers>
      <banner></banner>

      <div class="row clearfix tpl_six" id="md_tpl_six">
        <div class="module-wid clearfix">
          <div class="fl wid50">
            <div class="column column1">
              <div class="about" id="md_about">
                <div class="home-tit clearfix">
                  <span
                    class="Themefont Themeborder relative overflow fl"
                    data-design-rel="new-product"
                  >关于我们</span>
                </div>
                <div class="aboutbox clearfix">
                  <div class="aboutimg fl">
                    <img src="/images/layout/about.jpg" alt />
                  </div>
                  <div class="abouttxt fr" style="margin-bottom:70px;">
                    <p>
                      &emsp;&emsp;WeAlipay于2021-06-01正式上线，始终以视频演示的方式薅不同平台的羊毛，主要以支付宝为主，分享相关的经验和技巧，并不定期更新最新内容，有兴趣的朋友可以加入群聊一起讨论，互帮互助，互利共赢！
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  name: "About",
  components: {
    Asides,
    Headers,
    Banner
  }
};
</script>