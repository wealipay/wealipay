<template>
  <div class="nav-box">
    <div data-design-rel="menu" class="NavBox" id="NavBox">
      <ul class="nav navbar-nav">
        <li v-for="item in navbar" :key="item">
          <span class="line Themebg"></span>
          <a class="overflow" :href="item.link">
            {{item.name}}
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { db } from "network/db";
import { ref } from "vue";
export default {
  name: "CNavbar",
  setup() {
    const navbar = ref([]);
    db().then(res => {
      navbar.value=res.navbar;
    });
    return {
      navbar
    }
  }
};
</script>