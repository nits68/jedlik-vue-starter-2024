import { type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/IndexPage.vue') }],
  },
  {
    path: '/interpolation',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/TextInterpolationPage.vue') }],
  },
  {
    path: '/reactive',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ReactiveSystemPage.vue') }],
  },
  {
    path: '/computed',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComputedPropertiesPage.vue') }],
  },
  {
    path: '/bindings',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/BindingsPage.vue') }],
  },
  {
    path: '/conditional',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ConditionalRenderingPage.vue') }],
  },
  {
    path: '/list',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ListRenderingPage.vue') }],
  },
  {
    path: '/event',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/EventHandlingPage.vue') }],
  },
  {
    path: '/form',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/FormInputBindingPage.vue') }],
  },
  {
    path: '/lifecycle',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/LifecycleHooksPage.vue') }],
  },
  {
    path: '/watchers',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/WatchersPage.vue') }],
  },
  {
    path: '/flexbox',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/FlexboxPage.vue') }],
  },
  {
    path: '/qtable',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/QTablePage.vue') }],
  },
  {
    path: '/complex',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComplexPage.vue') }],
  },
  {
    path: '/templaterefs',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/TemplateRefsPage.vue') }],
  },
  {
    path: '/componentsbasics',
    component: () => import('../layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('../pages/ComponentsBasicsPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFoundPage.vue'),
  },
];

export default routes;
