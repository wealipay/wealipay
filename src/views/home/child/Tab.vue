<template>
  <div class="row clearfix tpl_four" id="md_tpl_four">
    <div class="column column1">
      <div class="article" id="md_article">
        <div class="articleBox module-wid clearfix">
          <div class="articleImgBor fl">
            <div class="articleImg">
              <a title="香港各界对主席重要讲话反向热烈" href="index.htmlArticle-detail-id-771844.html">
                <img
                  data-original="http://pic.files.mozhan.com/mozhan/20170710/92eba9314d42025b4240f8f9b0beaee7.jpg"
                  alt="香港各界对主席重要讲话反向热烈"
                />
              </a>
            </div>
          </div>
          <div class="articleTab fr">
            <ul class="tabTit clearfix">
              <li
                @click="liClick(index)"
                v-for="(item,index) in titles"
                :key="index"
                :class="{Themeborder:curIndex===index, Themefont:curIndex===index}"
                class="Themefonthover Themeborderhover"
              >
                <span class="overflow">{{item}}</span>
              </li>
              <!--<li class="Themefont Themeborder Themehover Themeborderhover">政务要闻</li> -->
              <!--<li class="Themehover Themeborderhover">部门动态</li>-->
              <!--<li class="Themehover Themeborderhover">乡镇动态</li> -->
              <!--<li class="Themehover Themeborderhover">媒体报道</li>-->
            </ul>
            <ul class="tabList" style="display:block;">
              <li class="first">
                <a
                  title="香港各界对主席重要讲话反向热烈"
                  href="index.htmlArticle-detail-id-771844.html"
                  class="Themefont"
                >
                  <h3 class="overflow">香港各界对主席重要讲话反向热烈</h3>
                  <p>习近平主席1日在出席庆祝香港回归祖国20周年大会暨香港特别行政区第五届政府就职典礼时发表重要讲话，在香港社会引起强烈反响。香港各界人士认为，习主席的讲话为“一国两制”理论与实践的未来发展指明了方向、确认了准则，必将引领香港再创新的辉煌。</p>
                </a>
              </li>
              <li>
                <a
                  title="深圳地铁回应女士车厢男多女少优先不等于专用"
                  href="index.htmlArticle-detail-id-771845.html"
                  class="Themefonthover"
                >
                  <span class="overflow fl">深圳地铁回应女士车厢男多女少优先不等于专用</span>
                  <i class="fr">[2017-07-10]</i>
                </a>
              </li>
            </ul>
            <ul class="tabList">
              <div class="not">亲，没有找到内容</div>
            </ul>
            <ul class="tabList">
              <div class="not">亲，没有找到内容</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Tab",
  setup(props, { emit }) {
    const curIndex = ref(0);
    const liClick = index => {
      curIndex.value = index;
      emit("tabClick", index);
    };
    return {
      curIndex,
      liClick
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