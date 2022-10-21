import React from "react";
import { Outlet, Link, useLocation } from 'react-router-dom';

import NavBar from './Navbar/NavBar';
import SocialLinks from './Social/SocialLinks.jsx';

import s from './header.module.css';

const Header = () => {
  const path = useLocation().pathname;
  return (
    <>
      <header id={s.header} className={path !== '/' ? s.headerTop : null}>
        <div className={` container ${s.container}`}>
          <h1>
            <Link to='/'>Edgar Avecilla</Link>
          </h1>
          {path === '/' && (
            <h2>
              I'm a passionate <span>Web Developer</span> from Mexico
            </h2>
          )}
          <NavBar />
          {path === '/' && <SocialLinks />}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
