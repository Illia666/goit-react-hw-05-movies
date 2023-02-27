import { useCallback } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AiOutlineBackward } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import scss from './MovieDetailsPage.module.scss';
import Section from 'shared/components/Section/Section';
import MovieData from 'modules/components/MovieData/MovieData.jsx';
import Loader from 'shared/components/Loader/Loader.jsx';
import useFetchMovieDetails from 'hooks/useFetchMovieDetails';

const MoviesDetailsPage = () => {
  const location = useLocation();
  const from = location.state?.from || '/';
  const navigate = useNavigate();
  const movieDetails = useFetchMovieDetails();

  const goBack = useCallback(() => navigate(from), [from, navigate]);

  return (
    <Section>
      {!movieDetails && <Loader />}
      <button type="button" className={scss.btn} onClick={goBack}>
        <IconContext.Provider
          value={{
            style: { width: '24px', height: '30px', fill: '#ff0000' },
          }}
        >
          <AiOutlineBackward />
        </IconContext.Provider>
        GO BACK
      </button>
      {movieDetails && (
        <MovieData
          url={movieDetails.poster_path}
          tag={movieDetails.title}
          title={movieDetails.title}
          score={movieDetails.vote_average}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
          date={movieDetails.release_date}
        />
      )}
      <div className={scss.line}></div>
      <h3 className={scss.secondTitle}>Additional information</h3>
      <ul className={scss.listLink}>
        <li className={scss.item}>
          <Link className={scss.itemLink} to="cast" state={{ from }}>
            Cast
          </Link>
        </li>
        <li className={scss.item}>
          <Link className={scss.itemLink} to="reviews" state={{ from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <div className={scss.line}></div>
      <Outlet />
    </Section>
  );
};

export default MoviesDetailsPage;