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
              <li v-for="item in money" :key="item">
                <a :title="item.title" :href="item.link" class="Themefonthover">
                  <span class="overflow fl">{{item.title}}</span>
                  <i class="fr">{{item.date}}</i>
                </a>
              </li>
            </ul>
            <ul class="tabList">
              <li v-for="item in invite" :key="item">
                <a :title="item.title" :href="item.link" class="Themefonthover">
                  <span class="overflow fl">{{item.title}}</span>
                  <i class="fr">{{item.date}}</i>
                </a>
              </li>
            </ul>
            <ul class="tabList">
              <li v-for="item in self" :key="item">
                <a :title="item.title" :href="item.link" class="Themefonthover">
                  <span class="overflow fl">{{item.title}}</span>
                  <i class="fr">{{item.date}}</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { getType } from "network/db";
export default {
  name: "Tab",
  setup() {
    const curIndex = ref(0);
    const money = ref([]);
    const invite = ref([]);
    const self = ref([]);

    const liClick = index => {
      curIndex.value = index;
    };
    getType("money").then(res => {
      money.value = res;
    });
    getType("invite").then(res => {
      invite.value = res;
    });
    getType("self").then(res => {
      self.value = res;
    });

    return {
      curIndex,
      liClick,
      money,
      invite,
      self
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