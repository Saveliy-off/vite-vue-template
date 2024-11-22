import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Импортируйте ваши компоненты
import Auth from '../views/Auth.vue'; // Если у вас есть другой компонент

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // Компонент домашней страницы
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth // Компонент о приложении
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
