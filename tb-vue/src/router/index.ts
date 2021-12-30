import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/index.vue';
import File from '../views/file/index.vue';

Vue.use(VueRouter);

type RouteConfig = {
  path: string;
  name: string;
  component: Vue;
}

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/file',
    name: 'File',
    component: File,
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
