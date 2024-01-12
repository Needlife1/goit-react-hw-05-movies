import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../Movie/Movie';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovie(`3/movie/${moviesId}/credits?`);
        console.log(data.cast);
        return setCast(data.cast);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [moviesId]);

  return (
    <ul>
      {cast.length === 0 ? (
        <p>We don`t have any cast for this movie</p>
      ) : (
        cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path !== null ? (
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt=""
                width={350}
              />
            ) : (
              <p>Foto not found</p>
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
