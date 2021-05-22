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
                  src="http://pic.files.mozhan.com/mozhan/20170710/423780aab36f2e92550c39f29f281a90.jpg"
                  alt=""
                />
              </div>
              <div class="abouttxt fr">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;政府，即国家权力机关的执行机关，是国家行政机关。政府是维护国家安全，消除社会隐患、促进科学技术进步、提高国民生产能力、优化社会结构、研究社会现象的特殊机构。国家公共行政权力的象征、承载体和实际行为体。政府发布的行政命令、行政决策、行政法规、行政司法、行政裁决、行政惩处、行政监督等等，都应符合宪法和有关法律的原则和精神。<br />
                </p>
              </div>
            </div>
            <p class="p2 fr clearfix">
              <a
                title="查看详情"
                href="/About.html"
                class="seeDetail overflow Themebg"
                role="button"
                >查看详情</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="fr wid50">
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