import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'
import Blog from './Blog.vue'
import PostDetail from './PostDetail.vue'

Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueRouter);

Vue.config.productionTip = false

// ENABLE SINGLE PAGE APP ROUTING
const routes = [
  { path: '/', component: Blog },
  { path: '/post/:id', component: PostDetail }
];

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
