import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Payment from '../views/Payment.vue'
import GroupPredictions from '../views/GroupPredictions.vue'
import GroupOutrights from '../views/GroupOutrights.vue'
import TournamentOutrights from '../views/TournamentOutrights.vue'
import Leaderboard from '../views/Leaderboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/group-predictions', component: GroupPredictions, meta: { requiresAuth: true } },
  { path: '/group-outrights', component: GroupOutrights, meta: { requiresAuth: true } },
  { path: '/tournament-outrights', component: TournamentOutrights, meta: { requiresAuth: true } },
  { path: '/leaderboard', component: Leaderboard, meta: { requiresAuth: true } },
  { path: '/checkout', component: Payment }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token');

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
})

export default router;
