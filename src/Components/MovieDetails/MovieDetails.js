import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { getMovieByID } from '../api-servise';
import { addisionalRoutes } from '../routes/addisionalRoutes';
import style from './MovieDetailsPage.module.css';

const MovieDetailsPage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [from, setFrom] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const movieId = match.params.movieId;

  useEffect(() => {
    location.state && setFrom(location.state.from);
  }, [location.state]);

  useEffect(() => {
    getMovieByID(movieId).then(film => setMovie(film));
  }, [movieId]);
  const releaseDate = new Date(movie.release_date).getFullYear();
  const fullPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const onBtnClick = () => {
    history.push(from);
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={onBtnClick}
          className={style.goBackBtn}
          disabled={from ? false : true}
        >
          &#8592; Go Back
        </button>
      </div>
      <div className={style.box}>
        <img
          className={style.img}
          src={fullPath}
          alt={movie.title || movie.original_title}
          width="200"
        />
        <div className={style.motieDescription}>
          <h2 className={style.title}>
            {movie.title || movie.original_title} ({releaseDate})
          </h2>
          <p className={style.voteAverage}>
            <span className={style.voteAverageTitle}>Vote average: </span>
            <span className={style.voteAverageText}>{movie.vote_average} </span>
            / 10
          </p>
          <p className={style.overviewTitle}>Overview</p>
          <p className={style.overviewText}>{movie.overview}</p>
          <p className={style.genresTitle}>Genres</p>
          <ul className={style.genresList}>
            {movie.genres &&
              movie.genres.map(genr => (
                <li key={genr.name} className={style.genrItem}>
                  {genr.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={style.additionalTitle}>Additional information</h3>
        <ul className={style.additionalList}>
          {addisionalRoutes.map(route => (
            <li key={route.path} className={style.additionaItem}>
              <NavLink
                to={{
                  pathname: `${match.url}${route.path}`,
                }}
                exact={route.exact}
                className={style.additionaText}
                activeClassName={style.additionaTextActive}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Suspense fallback={<h2>...Loading</h2>}>
          <Switch>
            {addisionalRoutes.map(({ path, component, exact }) => (
              <Route
                key={path}
                path={match.path + path}
                component={component}
                exact={exact}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
