<template>
  <div class="row clearfix tpl_eight" id="md_tpl_eight">
    <div class="col-md-12">
      <div class="column column1">
        <div class="album" id="md_album">
          <!-- 图库组件 -->
          <div class="homeTwo-tit Themefont">
            <i>
              <img src="~assets/images/layout/hot.png" style="width:10%;margin-top:20px;" />
            </i>
            <span class="Themeborder overflow" data-design-rel="album">热门活动</span>
          </div>
          <div class="module-wid albumbox">
            <ul class="album clearfix">
              <li class="clearfix" v-for="item in hots" :key="item">
                <a title="淮北参观学习" :href="item.img" class="Themefonthover">
                  <div class="albumimg">
                    <img :title="item.title" :alt="item.title" src="item.img" />
                  </div>
                  <p class="overflow albumtxt">{{item.title}}</p>
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
export default {
  name: "TplEight",
  props: {
    hots: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>