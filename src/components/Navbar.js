import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';

export default class Navbar extends Component {
  render() {
    const { title, subtitle, color, size } = this.props;
    const headClasses = classnames(['hero', color, size])
    return (
      <>
        <section className={headClasses}>
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <NavLink activeClassName="is-active" className="navbar-item" to="/">HOME</NavLink>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroB">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroB" className="navbar-menu">
                  <div className="navbar-end">
                    <NavLink to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                    <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">{title}</p>
              <p className="subtitle">{subtitle}</p>
            </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active">
                    <NavLink activeClassName="is-active" className="navbar-item" to="/999">Overview</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" className="navbar-item" to="/999">Grid</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" className="navbar-item" to="/999">Layout</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </>
    )
  }
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  color: propTypes.oneOf(['is-danger', 'is-info', 'is-success', 'is-primary', 'is-warning']),
  size: propTypes.oneOf(['is-small', 'is-medium', 'is-large'])
}
