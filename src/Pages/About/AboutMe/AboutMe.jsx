import React from "react";
import InfoList from "./InfoList";
import s from './aboutme.module.css';


const AboutMe = () => {
  return (
    <div>
      <p>Learn more about me</p>
      <div>
        <div>
          <img src="" alt="profile img" />
        </div>
        <div>
          <h3>Full Stack Developer</h3>
          <p>
            Transforming your ideas and needs into amazing software, Computer
            systems Engineer & Full stack developer.
          </p>
          <p>MERN | MEAN | JAVA </p>
          <div>
            <InfoList />
          </div>
          <p>
            Software Developer talented at translating customer requirements
            into testable engineering plans. Maintains exceptional development
            quality from conception through distribution. Works alongside
            clients and colleagues through all stages of development to produce
            exceptional final products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
