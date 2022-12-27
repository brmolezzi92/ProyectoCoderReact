import React from 'react'
import Cart from '../Cart/Cart'
import "./navbar.css"
const Navbar = () => {
  return (
    <nav>
        <span>PETSHOP MI MASCOTA</span>
        <ul>
            <li><a href="#">Perros</a></li>
            <li><a href="#">Gatos</a></li>
            <li><a href="#">Accesorios</a></li>
        </ul>
        <Cart />
    </nav>
  )
}

export default Navbar
