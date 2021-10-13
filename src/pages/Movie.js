import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getMovieByQuery } from '../Components/api-servise';
import queryString from 'query-string';
import FilmList from '../Components/filmList/FilmList';

const Movie = () => {
  const [form, setForm] = useState('');
  const [movie, setMovie] = useState([]);
  const { push, location } = useHistory();

  const search = new URLSearchParams(location.search).get('q');
  console.log(search);

  useEffect(() => {
    search &&
      getMovieByQuery(search)
        .then(setMovie)
        .catch(err => console.log(err));
  }, [search]);

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    setForm(parsed.q);
  }, [location.search]);

  const handleChange = e => {
    setForm(e.target.value);
  };

  const handleClick = () => {
    push({ ...location, search: `?q=${form}` });
    getMovieByQuery(form)
      .then(setMovie)
      .catch(err => console.log(err));
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search movie"
        onChange={handleChange}
        value={form}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      <FilmList films={movie} />
    </>
  );
};

export default Movie;
