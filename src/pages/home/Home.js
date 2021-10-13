import React, { useEffect, useState } from 'react';
import { popularFilms } from '../../Components/api-servise';
import FilmList from '../../Components/filmList/FilmList';
import style from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularFilms().then(film => setMovies(film));
  }, []);

  return (
    <div className={style.secsionHome}>
      <h2 className={style.secsionHome}>Trending today</h2>
      <FilmList films={movies} />
    </div>
  );
};

export default Home;
