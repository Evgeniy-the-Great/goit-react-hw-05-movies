import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../routes/mainRoutes';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={style.navList}>
      {mainRoutes.map(route => (
        <li className={style.navItem} key={route.path}>
          <NavLink
            className={style.navLink}
            activeClassName={style.navLinkActive}
            to={route.path}
            exact={route.exact}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
