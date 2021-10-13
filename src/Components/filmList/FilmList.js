import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './FilmList.module.css';

const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films &&
        films.map(({ id, title, original_title }) => (
          <li key={id}>
            <NavLink
              className={style.filmNavLink}
              to={{ pathname: `/movies/${id}`, state: { from: location } }}
            >
              {title || original_title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

export default FilmList;
