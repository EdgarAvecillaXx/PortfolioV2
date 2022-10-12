import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/react">React</NavLink>
      <NavLink to="/node">Node</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
