import './NavBar.css'
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'

const NavBar = () => {
  return (
    <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/productos/bazar'>Bazar</Link>
        <Link className='link' to='/productos/tecnologia'>Tecnologia</Link>
        <Link className='link' to='/productos/ropa'>Ropa</Link>
        <Link className='link' to='/productos/musica'>Musica</Link>

        <Link className='link' to='/check'>CheckOut</Link>
        <Link className='link' to='/cart'><Cart /></Link>
    </nav>
  )
}

export default NavBar