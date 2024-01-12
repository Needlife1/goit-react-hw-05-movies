import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../Movie/Movie';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getMovie(`3/movie/${moviesId}/reviews?`);

        return setReviews(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [moviesId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
