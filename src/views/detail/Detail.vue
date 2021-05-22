<template>
  <div>detail{{id}}{{pid}}</div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  name: "Detail",
  setup() {
    let id = ref(0);
    let pid=ref(0);
    const route = useRoute();
    id.value = route.query.id;
    pid.value = route.query.pid;

    return {
        id,
        pid
    }
  }
};
</script>