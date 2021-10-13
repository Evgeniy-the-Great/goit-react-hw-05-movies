import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('../../pages/home/Home')),
    exact: true,
  },
  {
    name: 'Movies',
    path: '/movies',
    component: lazy(() => import('../../pages/Movie')),
    exact: false,
  },
];
