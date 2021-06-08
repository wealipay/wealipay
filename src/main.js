import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/guidestyle.css";
import "./assets/css/pub.css";
import "./assets/css/public.css";
import "./assets/css/banner.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/layoutit.css";
import "./assets/css/p_mb.css";
import "./assets/css/photoswipe.css";
import "./assets/css/customer_index_501108893.css";
import "./assets/js/jquery.min";
import "./assets/js/jquery.banner.revolution.min";
import "./assets/js/slider";
import "./assets/js/banner";
import "./assets/js/slide";
import "./assets/js/bootstrap.min";
import "./assets/js/page";                 
import 'vant/lib/index.css';        
import "./assets/css/customer_inner_501108893.css";

import {Swipe,SwipeItem,Tab,Tabs,Tabbar,TabbarItem} from 'vant'

createApp(App)
  .use(store)
  .use(router).
  use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)
  .mount("#app");
