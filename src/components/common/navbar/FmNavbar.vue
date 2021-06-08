<template>
  <div class="phone-menu0">
    <!--phone-menu0为黑色版，phone-menu1为灰白色版-->
    <van-tabbar v-model="active">
      <van-tabbar-item :badge="item.badge" v-for="item in icon" :key="item" :to="item.to">
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { db } from "network/db";
import { ref, onMounted } from "vue";
import { getType } from "network/db";
export default {
  name: "FmNavbar",
  setup() {
    const active = ref(0);
    const money = ref([]);
    const invite = ref([]);

    onMounted(() => {
      getType("money").then(res => {
        money.value = res;
      });
      getType("invite").then(res => {
        invite.value = res;
      });
    });
    const icon = [
      {
        active: "/icon/we.png",
        inactive: "/icon/we1.png",
        text: "首页",
        to: "/"
      },
      {
        active: "/icon/A.png",
        inactive: "/icon/A1.png",
        text: "支付宝",
        to: "/alipay",
        badge: 0
      },
      {
        active: "/icon/li.png",
        inactive: "/icon/li1.png",
        text: "邀请有奖",
        to: "/invite",
        badge: 1
      },
      {
        active: "/icon/pay.png",
        inactive: "/icon/pay1.png",
        text: "关于",
        to: "/about"
      }
    ];
    return {
      icon,
      active,
      money,
      invite
    };
  }
};
</script>
