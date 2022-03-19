import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CharactersId from '../components/CharactersId.vue';
Vue.use (VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/charactersId/:id',
    name: 'charactersId',
    component: CharactersId,
  },
];

const router = new VueRouter ({
  routes,
});

export default router;
