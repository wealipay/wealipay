<template>
  <div id="body" style="overflow-x:hidden; overflow-y: scroll;outline: none;" class="Pagebg">
    <div class="Pagebg">
      <div class="container">
        <tpl-one></tpl-one>
        <tpl-two></tpl-two>
        <tpl-three></tpl-three>
        <tpl-four></tpl-four>
        <tpl-five></tpl-five>
        <tpl-seven></tpl-seven>
        <tpl-eight></tpl-eight>
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
import TplFive from "views/home/child/TplFive";
import TplSix from "views/home/child/TplSix";
import TplSeven from "views/home/child/TplSeven";
import TplEight from "views/home/child/TplEight";
import TplLine from "views/home/child/TplLine";

export default {
  name: "Home",
  components: {
    TplOne,
    TplTwo,
    TplThree,
    TplFour,
    TplFive,
    TplSix,
    TplSeven,
    TplEight,
    TplLine
  }
};
</script>
