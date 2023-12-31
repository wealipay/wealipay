import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/home/Home");
const Alipay = () => import("../views/alipay/Alipay");
const Invite = () => import("../views/invite/Invite");
const Chat = () => import("../views/chat/Chat");
const About = () => import("../views/about/About");
const Detail = () => import("../views/detail/Detail");
const Category = () => import("../views/category/Category");

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
    meta: {
      title: "WeAlipay"
    }
  },
  {
    path: "/alipay",
    name: "Alipay",
    component: Alipay,
    meta: {
      title: "支付宝活动"
    }
  },                     
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: {
      title: "文章分类"
    }
  },                     
  {
    path: "/invite",
    name: "Invite",
    component: Invite,
    meta: {
      title: "邀请有奖"
    }
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    meta: {
      title: "聊天群"
    }
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
    meta: {
      title: "活动详情"
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "关于我们"
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  next();
  document.title = to.meta.title;
})

export default router;
