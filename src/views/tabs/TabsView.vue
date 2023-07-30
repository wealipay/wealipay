<script setup lang='ts'>
import { RouterView,useRoute,useRouter } from "vue-router";
import {Tabbar,TabbarItem} from 'vant'
import { ref,watch } from "vue";


</script>

<template>
    <Tabbar v-model="active">
        <TabbarItem name='home' icon='home-o'>首页</TabbarItem>
        <TabbarItem name='oder' icon='bars'>订单</TabbarItem>
        <TabbarItem name="me" icon="contact">我的</TabbarItem>
    </Tabbar>
</template>