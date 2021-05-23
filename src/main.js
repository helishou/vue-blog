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
//全局组件
Vue.component("counter",{    //1.组件名为"conter"; 2.data 写函数; 3.template 写组件的内容（元素和触发的事件）
	data:function(){
			return {count:0}
			},
 
//template 是模板的意思，在 html 里面是一个可以同时控制多个子元素的父元素。在这里定义了组件的内容
	template:'<button v-on:click="count++">点击计算点击次数：{{count}}次</button>'
})
Vue.directive("theme", {
  bind(el, binding) {
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
