<script setup lang='ts'>
import TheTop from "./components/TheTop.vue";

const recomments=[
    {
        label:'orange',
        value:1
    },
    {
        label:'banana',
        value:2
    }
]
</script>

<template>
<TheTop :recomments="recomments" />
</template>