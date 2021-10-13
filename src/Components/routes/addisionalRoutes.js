import { lazy } from 'react';

export const addisionalRoutes = [
  {
    name: 'Cast',
    path: '/cast',
    component: lazy(() => import('../MovieDetails/cast/Cast')),
    exact: true,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    component: lazy(() => import('../MovieDetails/reviews/Reviews')),
    exact: true,
  },
];
