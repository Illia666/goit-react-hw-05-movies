import useFetchMovieDetails from 'hooks/useFetchMovieDetails';
import { baseImgUrl } from '../../../shared/services/film-app.js';
import scss from './Cast.module.scss';

const Cast = () => {
  const movieDetails = useFetchMovieDetails('/credits');

  return (
    <>
      {movieDetails && (
        <ul className={scss.list}>
          {movieDetails.cast.map(
            ({ credit_id, name, character, profile_path }) => (
              <li key={credit_id} className={scss.item}>
                <div className={scss.imgBox}>
                  <img
                    className={scss.img}
                    src={
                      profile_path
                        ? baseImgUrl + profile_path
                        : 'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg'
                    }
                    alt={name}
                  ></img>
                </div>
                <h3 className={scss.title}>{name}</h3>
                <p className={scss.text}>{`Character: ${character}`}</p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;