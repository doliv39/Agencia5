import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/">
          <a class="navbar-brand">Trip for fun!!!</a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/Cliente">
                <a class="nav-link " aria-current="page">
                  Cliente
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Destino">
                <a class="nav-link " aria-current="page">
                  Destino
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Promo">
                <a class="nav-link " aria-current="page">
                  Promoções
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Contato">
                <a class="nav-link " aria-current="page">
                  Contato
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
