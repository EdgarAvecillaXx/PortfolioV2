import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

import s from './navbar.module.css';

const NavBar = () => {
  const path = useLocation().pathname;

  return (
    <nav className={s.navbar} style={path !== '/' ? { margin: 0 } : undefined}>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? s.active : null)}
        end>
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? s.active : null)}>
        About
      </NavLink>
      <NavLink
        to='/resume'
        className={({ isActive }) => (isActive ? s.active : null)}>
        Resume
      </NavLink>
      <NavLink
        to='/react'
        className={({ isActive }) => (isActive ? s.active : null)}>
        React
      </NavLink>
      <NavLink
        to='/node'
        className={({ isActive }) => (isActive ? s.active : null)}>
        Node
      </NavLink>
      <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? s.active : null)}>
        Contact
      </NavLink>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
