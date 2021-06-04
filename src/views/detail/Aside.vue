<template>
  <div>
    <div class="body-left clearfix">
      
      <div class="p_info_x Cenl mb15 ThemeFborder">
        <div class="about_title Themebg overflow">邀请有奖</div>
        <ul class="left_news">
          <li v-for="item in invite" :key="item">
            <a
              title=""
              href=""
              @click.prevent="goDetail(item.id)"
              class="Themefonthover"
            >{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="clearfix"></div>
  </div>
</template>
<script>
import { getDetail } from "network/detail";
import { getType } from "network/db";
import { useRouter } from "vue-router";
import { ref, onMounted, reactive, toRefs } from "vue";

export default {
  name: "Aside",
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