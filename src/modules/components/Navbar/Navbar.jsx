import { NavLink } from 'react-router-dom';
import scss from './navbar.module.scss';

const Navbar = () => {
  return (
    <ul className={scss.menu}>
      <li>
        <NavLink className={scss.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={scss.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;