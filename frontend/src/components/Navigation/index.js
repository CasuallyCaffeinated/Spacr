// frontend/src/components/Navigation/index.js

//////////////////* NAVIGATION ////////////////

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

import { useLocation } from "react-router-dom";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const location = useLocation();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      {location.pathname !== "/signup" ?
        <NavLink to="/signup">
          <ul>
            <li>
          {<i class="fas fa-user-plus"></i>}
            </li>
            <li className="nav-btn text">
              Sign up!
            </li>
          </ul>
          </NavLink>
      :
      null
    }
    {location.pathname !== "/login"
    ?
        <NavLink to="/login">
          <ul>
          <li>
          {
          <i class="fas fa-sign-in-alt"></i>
          }
          </li>
          <li className="nav-btn text">
            Log in
          </li>
          </ul>
          </NavLink>
      :
      null
    }
        {/* <NavLink to="/demo">Demo Login</NavLink> */}
      </>
    );
  }

  return (
    <>

    <Navbar>
          <li className="navlink-item">
            {
            location.pathname === "/" ? null :
            <NavLink exact to="/">
            <ul>
              <li>
            {<i class="fas fa-home"></i>}
              </li>
              <li className="nav-btn text">
                  Home
              </li>
            </ul>
                  </NavLink>
            }
                {isLoaded && sessionLinks}
          </li>
        </Navbar>
        </>
  );
}


function Navbar(props) {
  return (
<nav className="navbar">
      <span className="logo-container">
        {/* <img>TO ADD: Site's main imgge Logo thing</img> */}
      <h1 id="logo-text">Spacr{<i class="fas fa-space-shuttle"></i>}</h1>
      <ul className="navbar-nav-links">
        {props.children}
      </ul>
      </span>
    </nav>
  )
}

export default Navigation;
