<template>
  <div class="row clearfix tpl_two" id="md_tpl_two">
    <div class="col-md-12 column column1">
      <div id="md_banner" class="banner">
        <div class="col-md-12">
          <div data-design-rel="banner" class="carousel slide" id="myCarousel">
            <div class="bannerBox">
              <div class="bannerEffect" id="pc_banner_content">
                <div class="fullwidthbanner-container">
                  <div class="fullwidthbanner">
                    <van-swipe :autoplay="3000" indicator-color="red">
                      <van-swipe-item>
                        <img src="/images/banner/banner1.jpg" />
                      </van-swipe-item>
                      <van-swipe-item>
                        <img src="/images/banner/banner2.jpg" />
                      </van-swipe-item>
                      <van-swipe-item>
                        <img src="/images/banner/banner3.jpg" />
                      </van-swipe-item>
                    </van-swipe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner"
};
</script>
<style>
.van-swipe {
  margin: 0;
}
</style>
