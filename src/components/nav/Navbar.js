import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const Navbar = () => {
  const { keycloak } = useKeycloak();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('dafigureiweod');
    keycloak.login();
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    keycloak.logout();
  };

  return (
    <nav className="hero-navbar">
      <div className="nav__wrapper">
        <div className="nav__logo">
          <NavLink to="/workout-web-app/">
            <strong>Fit</strong>Fusion
          </NavLink>
        </div>
        <div className="links__container">
          <ul>
            <li className="nav-link active">
              <NavLink to="/workout-web-app/" className="">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/workout-web-app/about" className="">
                About Us
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/workout-web-app/contacts" className="">
                Contacts
              </NavLink>
            </li>

            {keycloak.authenticated === true ? (
              <li className="nav-link">
                <NavLink
                  className="start__button"
                  onClick={async (e) => await handleSignIn(e)}
                >
                  Sign In
                </NavLink>
              </li>
            ) : (
              <li className="nav-link">
                <NavLink
                  className="start__button"
                  onClick={() => handleSignOut()}
                >
                  Sign out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
