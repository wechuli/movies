import React from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <span
              className="navbar-burger burger"
              data-target="navbarMenuHeroA"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end has-text-light">
              <a className="navbar-item has-text-weight-bold is-active ">Home</a>
              <a className="navbar-item has-text-weight-bold">Movies</a>
              <a className="navbar-item has-text-weight-bold">Tv Shows</a>
             
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
