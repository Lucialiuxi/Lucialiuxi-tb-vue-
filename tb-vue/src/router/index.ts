import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/index.vue';
import File from '../views/project/index.vue';
import Demo from '../views/demo/index.vue';
import ProjectDetail from '../views/projectDetail/index.vue';
import { Session } from '@/utils/storage';

Vue.use(VueRouter);

type RouteConfig = {
  path: string;
  name: string;
  component: any;
  children?: any;
}

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/project',
    name: 'File',
    component: File,
  },
  {
    path: '/projectDetail/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    children: [
      {
        path: 'task',
        name: 'Task',
        component: ProjectDetail,
      }
    ]
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
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
  routes,
});

router.beforeEach((to, from, next) => {
  const userInfo = (Session as any).get('userInfo');
  const isAuthenticated = !!userInfo;
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  if (to.name === 'Login' && isAuthenticated) next({ name: 'File' });
  if (to.name === null && isAuthenticated && to.path === '/') next({ name: 'File' });
  next();
})
export default router;
