import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/homePage/HomePage.vue';
import About_Us from '../components/About_Us/us.vue'; 
import Contact_Us from '../components/About_Us/contact.vue';
import Gallary from '../components/About_Us/gallary.vue';
import rooms from '../components/rooms/allrooms.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about_us',
    name: 'About_Us',
    component: About_Us,
  },
  {
    path: '/contact',
    name: 'Contact_Us',
    component: Contact_Us,
  },
  {
    path: '/gallary',
    name: 'Gallary',
    component: Gallary,
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: rooms,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
