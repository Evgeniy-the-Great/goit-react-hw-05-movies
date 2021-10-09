import React, { useEffect, useState } from 'react';
import { getMovieByID } from '../../Components/api-servise';
import style from './MovieDetailsPage.module.css';

const MovieDetailsPage = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieByID(match.params.movieId).then(film => setMovie(film));
  }, [match.params.movieId]);
  console.log(movie);
  const releaseDate = new Date(movie.release_date).getFullYear();
  const fullPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
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
          <span className={style.voteAverageTitle}>Vote average:</span> Vote
          average:{' '}
          <span className={style.voteAverageText}>{movie.vote_average}</span> /
          10
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
  );
};

export default MovieDetailsPage;
