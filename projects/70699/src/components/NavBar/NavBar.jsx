import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/contador'>Contador</Link>
        <Link className='link' to='/pokedex'>Pokedex</Link>
    </nav>
  )
}

export default NavBar