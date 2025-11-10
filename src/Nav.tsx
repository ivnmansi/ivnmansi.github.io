import { NavLink } from 'react-router-dom'
import './App.css'
import './Nav.css'

function Nav() {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li> |
        <li><NavLink to="/about">About</NavLink></li> |
        <li><NavLink to="/projects">Projects</NavLink></li> |
        <li><NavLink to="/skills">Skills</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav