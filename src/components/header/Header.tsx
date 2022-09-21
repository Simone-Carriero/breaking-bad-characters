import './Header.scss'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <img className='header-img' src={logo} alt="" />
    </header>
  )
}

export default Header