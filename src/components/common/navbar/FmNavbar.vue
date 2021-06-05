<template>
  <div class="phone-menu0">
    <!--phone-menu0为黑色版，phone-menu1为灰白色版-->
    <ul style="display: flex;">
      <li style="flex:1;" v-for="item in navbar" :key="item">
        <a title :href="item.link">
          <i class="icon1"></i>{{item.name}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { db } from "network/db";
import {ref} from 'vue';
export default {
  name: "FmNavbar",
  setup() {
    const navbar = ref([]);
    db().then(res => {
      navbar.value = res.navbar;
    });
    return {
      navbar
    };
  }
};
</script>