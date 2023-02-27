import PropTypes from 'prop-types';
import scss from './section.module.scss';

function Section({ children }) {
  return <section className={scss.section}>{children}</section>;
}

export default Section;

Section.propTypes = {
  children: PropTypes.any,
};