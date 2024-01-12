import React, { useState, useEffect, useCallback } from 'react';
import { getMovie } from '../Movie/Movie';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleChange = e => {
    const value = e.target.value;
    setInputValue(value);
  };

  const searchMovies = useCallback(async () => {
    if (inputValue === '') {
      return;
    }

    try {
      const { data } = await getMovie(`3/search/movie?query=${inputValue}`);
      setMovies(data.results || []);

      setSearchParams({ query: inputValue });
      setInputValue('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [inputValue, setSearchParams]);

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.name || movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
