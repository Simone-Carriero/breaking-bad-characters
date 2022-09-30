import './Header.scss';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <img
        className='header-img'
        src={Logo}
        alt='breaking bad logo'
      />
    </header>
  );
};

export default Header;
