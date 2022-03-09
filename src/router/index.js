import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Banglentės | Banglenčių mokykla ir nuoma.",
    },
    component: () => import('../views/HomeView.vue')

  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: "Banglentės | Apie mus.",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/straipsniai',
    name: 'straipsniai',
    meta: {
      title: "Banglentės | Surf straipsniai.",
    },
    component: () => import('../views/StraipsniaiView.vue'),
    children: [
      {
        path: '1',
        name: '1',
        component: () => import ('../views/straipsniai/PostOne.vue')
      },
      {
        path: '2',
        name: '2',
        component: () => import ('../views/straipsniai/PostTwo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
