import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <header>
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/skills'>Skills</Link>
            </li>
        </ul>

    </nav>
</header>
  )
}