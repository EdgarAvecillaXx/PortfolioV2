import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./Navbar/NavBar";
import SocialLinks from "./Social/SocialLinks.jsx";

import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <h1>
          <a href="index.html">Edgar Avecilla</a>
        </h1>
        <h2>
          I'm a passionate <span>Web Developer</span> from Mexico
        </h2>
        <NavBar />
        <SocialLinks />
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
