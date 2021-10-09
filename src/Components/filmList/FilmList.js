import React from 'react';
import { NavLink } from 'react-router-dom';

const FilmList = ({ films }) => {
  console.log(films);
  return (
    <ul>
      {films.map(({ id, title, original_title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`}>{title || original_title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FilmList;
