<template>
  <div class="row clearfix tpl_one" id="md_tpl_one">
    <div class="col-md-12 column column1">
      <div class="menu" id="md_menu">
        <div id="css_style">
          <!-- 该div层是用来替换为内页的css的，必须放在这里 -->
        </div>
        <div class="headFixed">
          <div class="header-box clearfix ">
            <!-- pc端logo -->
            <h1 class="logo_name">
              <span>懒人模板</span>
              <a href="/" class="logo navbar-brand">
                <img
                  src="http://pic.files.mozhan.com/mozhan/20170710/0c3c637433959f5553cf3bf9d72ea5aa.png"
                  alt="懒人模板"
                />
              </a>
            </h1>
            <!-- 手机端logo -->
            <a class="logo navbar-brand-mobile" href="/">
              <img
                src="http://pic.files.mozhan.com/mozhan/20170710/0c3c637433959f5553cf3bf9d72ea5aa.png"
                alt="懒人模板"
              />
            </a>
            <div class="btn-t btn-navbar-t navBtn NavBtn" id="NavBtn">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </div>
            <div class="clearfix none"></div>
            <div class="header-nav">
              <c-navbar></c-navbar> 
              <m-navbar></m-navbar>
              <fm-navbar></fm-navbar>
              <div class="NavBoxBg" id="NavBoxBg">
                <div id="NavBoxBtn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import CNavbar from "components/common/navbar/CNavbar";
import MNavbar from "components/common/navbar/MNavbar";
import FmNavbar from "components/common/navbar/FmNavbar";
export default {
  name: "Header",
  components:{
    CNavbar,
    MNavbar,
    FmNavbar
  }
};
</script>
<style>
  
</style>
