import { RotatingLines } from 'react-loader-spinner';
import scss from './loader.module.scss';

const Loader = () => {
  return (
    <div className={scss.box}>
      <RotatingLines
        strokeColor="#ff0000"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;