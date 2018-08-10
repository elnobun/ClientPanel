import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link exact to="/" className="navbar-brand">
            <i class="fas fa-database" />&nbsp; Client Panel Manager
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

AppNavbar.propTypes = {};

export default AppNavbar;
