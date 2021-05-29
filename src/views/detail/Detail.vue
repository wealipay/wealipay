<template>
  <div class="Pagebg TopologyLeft">
    <headers></headers>
    <banner></banner>
    <div class="content" style="margin-bottom:55px;">
      <div class="content-box n-box">
        <div class="body-right">
          <div class="breadCrumb ThemeFborder">
            <div class="Crumb">
              <b>您当前的位置：</b>
              <a href="/">首页</a>
              <em>&gt;</em>
              <a href="Article-index.html" class="Themefont">新闻动态</a>
              <em>&gt;</em>
              <a href="/Article-99955.html" class="Themefont">政务要闻</a>
              <em>&gt;</em>
              <a href="##" class="Themefont">香港各界对主席重要讲话反向热烈</a>
            </div>
          </div>
          <!--文章详情-->
          <div class="row">
            <div class="news-nr-box">
              <h3>{{details.title}}</h3>
              <h6>
                <span>{{details.year}}-{{details.date}}</span>
                <span>
                  &#12288;作者:
                  <em href title="{{details.author}}">{{details.author}}</em>
                </span>
              </h6>
              <h3 style="background:pink;border-radius:5px;">详细规则：</h3>
              <p
                style="border-radius:10px;padding:5px;background:pink;"
                class="detail"
                v-for="item in details.rule"
                :key="item"
              >{{item.des}}</p>
              <hr>
              <h3 style="background:skyblue; margin-top:8px;border-radius:5px;">操作步骤：</h3>
              <p
                style="background:skyblue;text-align:left;border-radius:10px;padding:5px;"
                class="detail"
                v-for="item in details.step"
                :key="item"
              >
              {{item.des}}
              </p>
            </div>

            <!--关键词-->
          </div>
          <!--</right>-->
        </div>
        <asides></asides>
        <!---->
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Asides from "views/detail/Aside";
import Headers from "views/home/child/Header";
import Banner from "views/home/child/Banner";
import { getDetail } from "network/detail";
import { useRoute } from "vue-router";
import { ref, onMounted, reactive, toRefs } from "vue";

export default {
  name: "Detail",
  components: {
    Asides,
    Headers,
    Banner
  },
  setup() {
    const id = ref(0);
    const route = useRoute();
    const obj = reactive({
      details: {}
    });
    onMounted(() => {
      id.value = route.query.id;
      getDetail(id.value).then(res => {
        obj.details = res;
      });
    });
    return {
      id,
      getDetail,
      ...toRefs(obj)
    };
  }
};
</script>