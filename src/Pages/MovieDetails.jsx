import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import { getMovie } from '../Movie/Movie';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovie(`3/movie/${moviesId}?`);
        // console.log(data);
        setMovie(data);
      } catch (error) {
        alert(' Movie not found');
        console.error(error);
      }
    };
    fetchData();
  }, [moviesId]);

  return (
    <>
      <div>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        {movie.poster_path !== null ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            width={350}
          />
        ) : (
          <p>Poster not found</p>
        )}
        <h2>
          {movie.title}{' '}
          {movie.release_date && `(${movie.release_date.slice(0, 4)})`}
        </h2>
        <p>User score: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {movie.genres &&
          movie.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Rewiews</Link>
          </li>
        </ul>
      </div>

      <>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};

export default MovieDetails;
