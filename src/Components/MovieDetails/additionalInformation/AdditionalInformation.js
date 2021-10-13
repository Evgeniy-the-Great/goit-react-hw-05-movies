import React from 'react';
import { NavLink } from 'react-router-dom';
import { addisionalRoutes } from '../../routes/addisionalRoutes';

const AdditionalInformation = () => {
  return (
    <ul>
      {addisionalRoutes.map(route => (
        <li key={route.path}>
          <NavLink to={route.path} exact={route.exact}>
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AdditionalInformation;
