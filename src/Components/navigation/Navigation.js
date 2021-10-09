import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainRoutes } from '../routes/mainRoutes';
const Navigation = () => {
  return (
    <>
      <ul>
        {mainRoutes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path}>{route.name}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
