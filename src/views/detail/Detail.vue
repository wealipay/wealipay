<template>
  <div>detail{{id}}</div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "Detail",
  setup() {
    let id = ref(0);
    const route = useRoute();
    id.value = route.query.id;
    return {
        id
    }
  }
};
</script>