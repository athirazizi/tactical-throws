import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-5-strong">
        <div class="container">
          <Link to="/">
            <a class="navbar-brand me-2">
              <img
                src="https://i.imgur.com/RUyItpb.png"
                height="16"
                alt="tactical throws logo"
                loading="lazy"
                style={{ marginTop: '-1px' }}
              />
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <span class="nav-item nav-link">Home</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/mirage">
                  <span class="nav-item nav-link">Mirage</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/dust2">
                  <span class="nav-item nav-link">Dust II</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/inferno">
                  <span class="nav-item nav-link">Inferno</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/grenades">
                  <span class="nav-item nav-link">Grenades</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/about">
                  <span class="nav-item nav-link">About</span>
                </Link>
              </li>
            </ul>
            <div class="d-flex align-items-center px-0">
              <Link to="/submit">
                <button type="button" class="btn btn-primary rounded-0">
                  Submit Lineup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar