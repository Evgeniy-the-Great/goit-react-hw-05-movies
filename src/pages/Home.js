import React, { useEffect, useState } from 'react';
import { popularFilms } from '../Components/api-servise';
import FilmList from '../Components/filmList/FilmList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    popularFilms().then(film => setMovies(film));
  }, []);

  return <FilmList films={movies} />;
};

export default Home;
