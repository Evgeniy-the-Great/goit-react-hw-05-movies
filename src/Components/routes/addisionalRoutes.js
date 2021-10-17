import { lazy } from 'react';

export const addisionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    component: lazy(() => import('../cast/Cast')),
    exact: true,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    component: lazy(() => import('../reviews/Reviews')),
    exact: true,
  },
];
