import Home from '../../pages/Home';
import Movies from '../../pages/Movie';

export const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'Movies',
    path: '/movies',
    component: Movies,
    exact: true,
  },
];
