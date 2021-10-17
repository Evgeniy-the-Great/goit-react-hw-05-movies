import React, { useEffect, useState } from 'react';
import { getMovieCast } from '../api-servise';
import style from './Cast.module.css';
import plug from '../../image/photo-not-available.jpg';

const Cast = ({ match }) => {
  const [cast, setCast] = useState([]);
  const movieId = match.params.movieId;

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(cast);
  return (
    <div className={style.castContaiver}>
      <ul className={style.castList}>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={style.castItem}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : plug
                }
                alt={name}
                width="100px"
                className={style.castImg}
              />
              <p className={style.castName}>{name}</p>
              <p className={style.castCharacte}>
                Character:{' '}
                <span className={style.castCharacter}>{character}</span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
