<script setup lang='ts'>
</script>

<template>
  <div class="home-top">
    <div class="top">
      <img class="location-icon" src="@/assets/imgs/index_page/location.png" />
      <div class="location">幸福小区(北一区东南门)</div>
      <img class="shopcart-icon" src="@/assets/imgs/index_page/shopcart.png" />
      <img class="comments-icon" src="@/assets/imgs/index_page/comments.png" />
    </div>
    <VanSearch 
    shape="round"
    background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
    >
    <template #right-icon>
      <div>搜索</div>
    </template>
    </VanSearch>
  </div>
</template>


<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: white;
  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;
    .location-icon {
      width: 20px;
      height: 20px;
    }
    .location {
      flex: 1;
    }
    .shopcart-icon {
      width: 24px;
      height: 24px;
    }
    .comments-icon {
      width: 28px;
      height: 24px;
      margin-left: 10px;
    }
  }
}
</style>