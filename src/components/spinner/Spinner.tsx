import SpinnerGif from '../../assets/spinner.gif';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='spinner'>
      <img
        className='spinner-image'
        src={SpinnerGif}
        alt='spinner'
      />
    </div>
  );
};

export default Spinner;
