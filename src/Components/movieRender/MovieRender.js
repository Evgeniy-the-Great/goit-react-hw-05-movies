import React from 'react';
import style from './MovieRender.module.css';

const MovieRender = ({ fullPath, movie, releaseDate }) => {
  return (
    <div className={style.box}>
      <img
        className={style.img}
        src={fullPath}
        alt={movie.title || movie.original_title}
        width="200"
      />
      <div className={style.movieDescription}>
        <h2 className={style.title}>
          {movie.title || movie.original_title} ({releaseDate})
        </h2>
        <p className={style.voteAverage}>
          <span className={style.voteAverageTitle}>Vote average: </span>
          <span className={style.voteAverageText}>{movie.vote_average} </span>/
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

export default MovieRender;
