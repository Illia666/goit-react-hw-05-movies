import PropTypes from 'prop-types';
import { baseImgUrl } from 'shared/services/film-app';
import scss from './MovieData.module.scss';

const MovieData = ({ url, tag, title, score, overview, genres, date }) => {
  return (
    <>
      <div className={scss.line}></div>
      <div className={scss.imgBox}>
        <img src={baseImgUrl + url} alt={tag} width="250px" />
        <div className={scss.descriptionBox}>
          <h2 className={scss.title}>
            {title} ({date.slice(0, 4)})
          </h2>
          <p className={scss.text}>User Score: {Math.round(score * 10)}%</p>
          <h3 className={scss.secondTitle}>Overview</h3>
          <p className={scss.text}>{overview}</p>
          <h3 className={scss.secondTitle}>Genres</h3>
          <ul className={scss.list}>
            {genres.map(genre => (
              <li className={scss.text} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MovieData;

MovieData.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
};