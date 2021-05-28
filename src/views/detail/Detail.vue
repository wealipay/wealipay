<template>
  <div class="Pagebg TopologyLeft">
    <headers></headers>
    <banner></banner>
    <div class="content">
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
                  <em href="" title="{{details.author}}">{{details.author}}</em>
                </span>
              </h6>
              <p
                class="text"
                style="margin-top: 0px; margin-bottom: 28px; padding: 0px; word-wrap: break-word; font-family: &quot;Microsoft Yahei&quot;, Helvetica, sans-serif; white-space: normal; background-color: rgb(255, 255, 255); text-indent: 2em;"
              >习近平主席1日在出席庆祝香港回归祖国20周年大会暨香港特别行政区第五届政府就职典礼时发表重要讲话，在香港社会引起强烈反响。香港各界人士认为，习主席的讲话为“一国两制”理论与实践的未来发展指明了方向、确认了准则，必将引领香港再创新的辉煌。</p>
              
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
import { ref, onMounted, reactive, toRefs} from "vue";

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
        obj.details=res
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