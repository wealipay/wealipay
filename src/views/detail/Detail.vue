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
              <a href="#" class="Themefont">{{details.pid}}</a>
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
              <div class="lihadran">
                <a href="#red">
                  <span style="background:#3dc5aa;">红包金额</span>
                </a>

                <a href="#limegreen">
                  <span style="background:limegreen;">视频演示</span>
                </a>
                <a href="#skyblue">
                  <span style="background:skyblue;">操作步骤</span>
                </a>

                <a href="#pink">
                  <span style="background:pink;">详细规则</span>
                </a>
              </div>
              <h3 style="background:#3dc5aa;border-radius:5px;">
                <a name="pink"></a>红包金额：
              </h3>
              <p
                style="border-radius:10px;padding:5px;background:#3dc5aa;"
                class="detail"
                v-for="item in details.amount"
                :key="item"
              >
                <a :href="item.image">
                  <img :src="item.image" style="display:block;border-radius:5px;" />
                </a>
                &emsp;&emsp;{{item.des}}
              </p>                                                                    

              <h3 style="background:limegreen;border-radius:5px;">
                <a name="limegreen"></a>视频演示：
              </h3>
              <div v-for="item in details.video" :key="item" style="border-radius:10px;margin-bottom:20px;background:limegreen;">
                <video
                  style="width:65%;margin:0 auto;border-radius:5px;margin-top:20px;"
                  :poster="item.cover"
                  controls
                  :src="item.src"
                ></video>
              </div>
              <h3 style="background:skyblue; margin-top:8px;border-radius:5px;">
                <a name="skyblue"></a>操作步骤：
              </h3>
              <p
                style="background:skyblue;text-align:left;border-radius:10px;padding:5px;"
                class="detail"
                v-for="item in details.step"
                :key="item"
              >
                <a :href="item.image">
                  <img :src="item.image" style="display:block;border-radius:5px;" />
                </a>
                &emsp;&emsp;{{item.des}}
              </p>

              <h3 style="background:pink;border-radius:5px;">
                <a name="pink"></a>详细规则：
              </h3>
              <p
                style="border-radius:10px;padding:5px;background:pink;"
                class="detail"
                v-for="item in details.rule"
                :key="item"
              >
                <a :href="item.image">
                  <img :src="item.image" style="display:block;border-radius:5px;" />
                </a>
                &emsp;&emsp;{{item.des}}
              </p>
              <hr />
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
<style scoped>
.lihadran {
  text-align: left;
  font-weight: bold;
  line-height: 50px;
  background: #ccc;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  border-radius: 5px;
}
.lihadran a span {
  width: 20%;
  text-align: center;
  border-radius: 5px;
  padding: 8px;
}
a {
  color: black;
}
</style>