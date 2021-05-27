<template>
  <div class="row clearfix tpl_six" id="md_tpl_six">
    <div class="module-wid clearfix">
      <div class="fl wid50">
        <div class="column column1">
          <div class="about" id="md_about">
            <div class="home-tit clearfix">
              <span
                class="Themefont Themeborder relative overflow fl"
                data-design-rel="new-product"
                >关于我们</span
              >
            </div>
            <div class="aboutbox clearfix">
              <div class="aboutimg fl">
                <img
                  src="/images/layout/about.jpg"
                  alt=""
                />
              </div>
              <div class="abouttxt fr">
                <p>
                  &emsp;&emsp;WeAlipay于2021-06-01正式上线，始终以视频演示的方式薅不同平台的羊毛，主要以支付宝为主，分享相关的经验和技巧，并不定期更新最新内容，有兴趣的朋友可以加入群聊一起讨论，互帮互助，互利共赢！<br />
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div class="frwid50">
        <div class="column clearfix column1">
          <div class="form" id="md_form">
            <div class="home-tit clearfix">
              <span
                class="Themefont Themeborder relative overflow fl"
                data-design-rel="form"
                >网上主留言</span
              >
            </div>
            <div class="con_right leftRi clearfix">
              <form
                id="target"
                class="form-horizontal"
                action="index.htmlModule-FormSaveContent.html"
                method="post"
              >
                <fieldset>
                  <div class=" ">
                    <h1 class="header">
                      在线表单
                    </h1>
                  </div>
                  <div class="form-group text_edit field-text-1482721042129">
                    <label for="text-1482721042129"
                      ><span class="required">*</span> 联系人</label
                    ><input
                      type="text"
                      class="form-control"
                      name="text-1482721042129"
                      id="text-1482721042129"
                    />
                  </div>
                  <div class="form-group text_edit field-text-1482721063547">
                    <label for="text-1482721063547"
                      ><span class="required">*</span> 联系电话</label
                    ><input
                      type="text"
                      class="form-control"
                      name="text-1482721063547"
                      id="text-1482721063547"
                    />
                  </div>
                  <div class="form-group text_edit field-text-1517653779344">
                    <label for="text-1517653779344">邮箱</label
                    ><input
                      type="text"
                      class="form-control"
                      name="text-1517653779344"
                      id="text-1517653779344"
                    />
                  </div>
                  <div
                    class="form-group undefined_edit field-textarea-1482721077181"
                  >
                    <label for="textarea-1482721077181">留言内容</label>
                    <textarea
                      class="form-control"
                      name="textarea-1482721077181"
                      id="textarea-1482721077181"
                    >
                    </textarea>
                  </div>
                  <input type="hidden" name="uid" value="501108893" />
                  <input
                    type="submit"
                    class="btn-primary Themebg seeDetail fr"
                    value="提交"
                  />
                </fieldset>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"Message"
}
</script>