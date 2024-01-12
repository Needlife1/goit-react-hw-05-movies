import { getMovie } from 'Movie/Movie';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovie('3/trending/all/week?');
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            {movie.name ? (
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.name}
              </Link>
            ) : (
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
