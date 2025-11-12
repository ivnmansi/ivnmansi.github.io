import { NavLink } from 'react-router-dom'
import './App.css'
import './Nav.css'

function Nav() {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/">Inicio</NavLink></li> |
        <li><NavLink to="/about">Acerca de</NavLink></li> |
        <li><NavLink to="/projects">Proyectos</NavLink></li> |
        <li><NavLink to="/skills">Habilidades</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav