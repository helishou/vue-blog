import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routers from "./routers";
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routers,
  mode: "history",
});
//全局api
// Vue.directive("rainbow", {
//   bind(el, _binding, _vnode) {
//     // console.log(el)
//     el.style.color =
//       "#" +
//       Math.random()
//         .toString(16)
//         .slice(2, 8);
//   },
// });
Vue.directive("theme", {
  bind(el, binding, _vnode) {
    if (binding.value == "wide") {
      el.style.maxWidth = "1260px";
    } else if (binding.value == "narrow") {
      el.style.maxWidth = "360px";
    }
    if (binding.arg == "column") {
      el.style.background = "#6677cc";
      el.style.padding = "20px";
    }
  },
});
//自定义过滤器
// Vue.filter("toUppercase",function(value){
//   return value.toUpperCase()
// })
Vue.filter("snippet", function(value) {
  let length = value.length;
  if (length > 100) {
    return value.slice(0, 100) + "...";
  } else {
    return value;
  }
});
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
