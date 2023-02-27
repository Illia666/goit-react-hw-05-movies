import useFetchMovieDetails from 'hooks/useFetchMovieDetails';
import scss from './Reviews.module.scss';

const Reviews = () => {
  const movieDetails = useFetchMovieDetails('/reviews');

  return (
    <>
      {movieDetails &&
        (movieDetails.results.length > 0 ? (
          <ul>
            {movieDetails.results.map(({ id, author, content }) => (
              <li key={id} className={scss.item}>
                <h3 className={scss.title}>{`Author: ${author}`}</h3>
                <p className={scss.text}>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={scss.text}>We don't have any reviews for this movie</p>
        ))}
    </>
  );
};

export default Reviews;