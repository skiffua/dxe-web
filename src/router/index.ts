import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';

import { ROUTES } from '@/constants/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: ROUTES.PATIENTS,
    name: 'Patients',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Patients.vue')
  },
  {
    path: ROUTES.PATIENT_ID,
    name: 'Patient',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Patient.vue')
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
