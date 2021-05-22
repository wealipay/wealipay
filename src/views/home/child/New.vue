<template>
  <div class="row clearfix tpl_seven" id="md_tpl_seven">
    <div class="col-md-12">
      <div class="column column1">
        <div class="articleLabel" id="md_articleLabel" data-id="0">
          <div class="artLabel module-wid">
            <div class="homeTwo-tit Themefont">
              <i>
                <img src="/images/layout/new.png" style="width:10%;" />
              </i>
              <span class="Themeborder overflow" data-design-rel="articleLabel">最新活动</span>
            </div>
            <ul class="artLabelList clearfix">
              <li class="clearfix" v-for="item in news" :key="item.id">
                <a href="index.htmlArticle-detail-id-771844.html" class="clearfix Themefonthover">
                  <div class="arttxt fl">
                    <span>
                      07-10
                      <i>2017</i>
                    </span>
                    <h3 class="overflow">香港各界对主席重要讲话反向热烈</h3>
                    <p>习近平主席1日在出席庆祝香港回归祖国20周年大会暨香港特别行政区第五届政府...</p>
                  </div>
                  <div class="artimg fr">
                    <img
                      alt="香港各界对主席重要讲话反向热烈"
                      src="http://pic.files.mozhan.com/mozhan/20170710/92eba9314d42025b4240f8f9b0beaee7.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338"
                    />
                  </div>
                </a>
              </li>
            </ul>
            <div class="seeMoreBox">
              <a
                title="查看更多"
                href="Article-index.html"
                class="Themebghover Themeborderhover seeMore"
                role="button"
              >查看更多</a>
            </div>

            <!-- <div class="ImgBox">
						   <img data-original="http://pic.files.mozhan.com/mozhan/20170710/92eba9314d42025b4240f8f9b0beaee7.jpg?x-oss-process=image/resize,limit_0,m_fill,w_450,h_338" alt="香港各界对主席重要讲话反向热烈">
						   <a title="香港各界对主席重要讲话反向热烈" class="Themefont Themetxthover" href="index.htmlArticle-detail-id-771844.html">香港各界对主席重要讲话反向热烈</a>
						   <p >习近平主席1日在出席庆祝香港回归祖国20周年大会暨香港特别行政区第五届政府就职典礼时发表重要讲话，在香港社会引起强烈反响。香港各界人士认为，习主席的讲话为“一国两制”理论与实践的未来发展指明了方向、确认了准则，必将引领香港再创新的辉煌。</p>
						   </div>
						   <p class="p2">
						   <a title="查看详情" href="Article-index.html" class="Themebghover Themeborderhover seeMore" role="button">查看详情</a>
            </p>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "New",
  props: {
    news: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>