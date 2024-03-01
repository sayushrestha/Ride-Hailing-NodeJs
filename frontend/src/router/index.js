import { createRouter, createWebHistory } from 'vue-router'
import Passengers from '../views/Passengers.vue'
import PassengerView from '../views/Passenger.vue'

const routes = [
  {
    path: '/',
    name: 'passengers',
    component: Passengers,
  },
  {
    path: '/passengers/:passengerId',
    name: 'PassengerView',
    component: PassengerView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
