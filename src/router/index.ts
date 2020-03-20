import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patients',
    name: 'Patients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/Patients.vue')
  },
  {
    path: '/patient/:id',
    name: 'Patient',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Patient.vue'),
    children: [
      {
        path: 'procedure',
        name: 'Procedure',
        component: () => import(/* webpackChunkName: "about" */ '../components/TheProcedureTab.vue')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
