import React from 'react';
import cranfruitImage from '../source/cranfruit.png';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mx-2">
      <section className="container-fluid">
        <div className="col-md-5 nav-space">
          <a className="navbar-brand logo" href="#">
            <img src={cranfruitImage} alt="Cran-Juice Logo" className="nav-logo" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
          <ul className="navbar-nav nav-links nav-ul">
            <li className="nav-item nav-li">
              <a className="nav-link nav-a" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item nav-li">
              <a className="nav-link nav-a" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item nav-li">
              <a className="nav-link nav-a" href="#review">
                Review
              </a>
            </li>
            <li className="nav-item nav-li">
              <a className="nav-link nav-a" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item nav-li">
              <a className="nav-link nav-a" href="#footer">
                Footer
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
