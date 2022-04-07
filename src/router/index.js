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
    path: '/pamokos',
    name: 'pamokos',
    meta: {
      title: "Banglentės | Banglenčių pamokos ir camp'as.",
    },
    component: () => import('../views/PamokosView.vue')

  },
  {
    path: '/stovykla',
    name: 'stovykla',
    meta: {
      title: "Banglentės | Banglenčių  vasaros stovykla.",
    },
    component: () => import('../views/StovyklaView.vue')

  },
  {
    path: '/nuoma',
    name: 'nuoma',
    meta: {
      title: "Banglentės | Banglenčių - irklenčių - riedlenčių nuoma.",
    },
    component: () => import('../views/NuomaView.vue')

  },
  {
    path: '/keliones',
    name: 'keliones',
    meta: {
      title: "Banglentės | Keliones serfinti į kitus kraštus.",
    },
    component: () => import('../views/KelionesView.vue')

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
        path: '',
        name: 'straipsniaihome',
        component: () => import ('../views/straipsniai/StraipsniaiHome.vue')
      },
      {
        path: '1',
        name: '1',
        component: () => import ('../views/straipsniai/PostOne.vue')
      },
      {
        path: '2',
        name: '2',
        component: () => import ('../views/straipsniai/PostTwo.vue')
      },
      {
        path: '3',
        name: '3',
        component: () => import ('../views/straipsniai/PostThree.vue')
      },
      {
        path: '4',
        name: '4',
        component: () => import ('../views/straipsniai/PostFour.vue')
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
