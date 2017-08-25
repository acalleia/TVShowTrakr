import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {
  return(
    <header className="header">
      <div className="mobile-nav">
        <h1>TV Show Trackr</h1>
        <a onClick={props.handleNavClick} className="mobile-menu">&#9776;</a>
      </div>
      <div className={(props.mobileNavVisible ? '':'slide')}>
        <div className="slideBar">
          <nav className="navBar">
            <li className="wide-load">
              <NavLink
                exact
                to='/'
                activeClassName='active'>
                Home
              </NavLink>
            </li>
            {!props.auth
              ? <li className="wide-load"><NavLink
                exact
                to='/login'
                activeClassName='active'>Log In</NavLink></li>
              : ''}
            {!props.auth
              ? <li className="wide-load"><NavLink
                exact
                to='/register'
                activeClassName='active'>Register</NavLink></li>
              : ''}
            {props.auth

              ? <li className="wide-load"><NavLink
              exact
              to='/profile'
              activeClassName='active'>My Profile</NavLink></li>
              : ''}
            {props.auth
              ? <li className="wide-load" onClick={props.logOut}><NavLink
                  exact
                  to='/'
                  activeClassName='active'>Log Out</NavLink>
                </li>
              : ''}
            <li>
              <form className="search">
                <input onChange={props.inputSearch} type="text" className="search-bar" />
                <Link to='/results'>
                  <button onClick={() => props.handleSearch()} type="submit" className="search-submit">Search</button> 
                </Link>
              </form>
            </li>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;