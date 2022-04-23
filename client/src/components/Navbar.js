import React, { useEffect, useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import Auth from '../utils/auth';

const AppNavbar = ({ location }) => {

  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    console.log("currentLocation", currentLocation);
  }, [currentLocation])

  return (
    <>
      <header className="App-header">
        <h1>
          <Link to='/' className="headerh1">.shop()</Link> 
        </h1>
        <div className="navparent">
        <NavLink to='/' className={`${currentLocation === "/" ? "activenav" : "navheader"}`}>SHOP</NavLink>
          {Auth.loggedIn() ? (
            <>
              <NavLink to='/user' className={`${currentLocation === "/user" ? "activenav" : "navheader"}`}>ACCOUNT</NavLink>
              <NavLink to='/cart' className={`${currentLocation === "/cart" ? "activenav" : "navheader"}`}>CART</NavLink>
              <NavLink to="#" onClick={Auth.logout} className="navheader">LOGOUT</NavLink>
            </>
          ) : (
            <>
              <NavLink to='/login' className={`${currentLocation === "/login" ? "activenav" : "navheader"}`}>LOGIN</NavLink>
              <NavLink to='/signup' className={`${currentLocation === "/signup" ? "activenav" : "navheader"}`}>SIGN-UP</NavLink>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default withRouter(AppNavbar);