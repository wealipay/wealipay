<template>
  <div class="NavBoxPublic" id="NavBoxPublic">
    <ul class="navPublic">
      <li v-for="item in navbar" :key="item">
        <a class="Themefont" :href="item.link">
          {{item.name}}
        </a>
      </li>
    </ul>

    <!-- 所有模板导航必须在这个文件里面 -->
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { db } from "network/db";
export default {
  name: "MNavbar",
  setup() {
    const navbar = ref([]);
    onMounted(() => {
      db().then(res=>{
        navbar.value=res;
      })
    });
  }
};
</script>
