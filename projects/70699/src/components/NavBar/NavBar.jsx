import './NavBar.css'
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart'

const NavBar = () => {
  return (
    <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/contador'>Contador</Link>
        <Link className='link' to='/pokedex'>Pokedex</Link>
        <Link className='link' to='/check'>CheckOut</Link>
        <Link className='link' to='/cart'><Cart /></Link>
    </nav>
  )
}

export default NavBar