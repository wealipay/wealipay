<template>
  <div id="body" style="overflow-x:hidden; overflow-y: scroll;outline: none;" class="Pagebg">
    <div class="Pagebg">
      <div class="container">
        <tpl-one></tpl-one>
        <tpl-two></tpl-two>
        <tpl-three></tpl-three>
        <tpl-four></tpl-four>
        <tpl-eight></tpl-eight>
        <tpl-seven></tpl-seven>
        <tpl-six></tpl-six>
        <tpl-line></tpl-line>
      </div>
    </div>
  </div>
</template>
<script>
import TplOne from "views/home/child/TplOne";
import TplTwo from "views/home/child/TplTwo";
import TplThree from "views/home/child/TplThree";
import TplFour from "views/home/child/TplFour";
import TplSix from "views/home/child/TplSix";
import TplSeven from "views/home/child/TplSeven";
import TplEight from "views/home/child/TplEight";
import TplLine from "views/home/child/TplLine";
import { db } from "network/db";
import { onMounted, ref } from "vue";

export default {
  name: "Home",
  components: {
    TplOne,
    TplTwo,
    TplThree,
    TplFour,
    TplSix,
    TplSeven,
    TplEight,
    TplLine
  },
  setup() {
    const hot = ref([]);
    onMounted(() => {
      db()
        .then(res => {
          hot.value = res.hot;
          alert(hot);
        })
        .catch(err => {});
    });
    return {
      hot
    };
  }
};
</script>
