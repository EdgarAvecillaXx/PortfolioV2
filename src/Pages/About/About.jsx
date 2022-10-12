import React from "react";
import AboutMe from "./AboutMe/AboutMe.jsx";
import MyStack from "./MyStack/MyStack.jsx";
import MySkills from "./MySkills/MySkills.jsx";

function About() {
  return (
    <section>
      <h2>About</h2>
      <AboutMe />
      <MyStack />
      <MySkills />
    </section>
  );
}

export default About;
