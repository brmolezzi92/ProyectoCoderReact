import React from 'react'
import Cart from '../Cart/Cart'
import "./navbar.css"
const Navbar = () => {
  return (
    <nav>
        <span>PETSHOP MI MASCOTA</span>
        <ul>
            <li>Perros</li>
            <li>Gatos</li>
            <li>Accesorios</li>
        </ul>
        <Cart />
    </nav>
  )
}

export default Navbar
