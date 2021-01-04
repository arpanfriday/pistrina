import Vue from 'vue'
import Vuetify from "vuetify";
import VueRouter from "vue-router"
import Home from "@/components/Home";
import TrendingItems from "@/components/Home/TrendingItems";
import Founders from "@/components/Home/Founders";
import FooterInfo from "@/components/FooterInfo";
import App from './App.vue'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/trendingItems', component: TrendingItems},
  {path: '/founders', component: Founders},
  {path: '/contact', component: FooterInfo}
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
