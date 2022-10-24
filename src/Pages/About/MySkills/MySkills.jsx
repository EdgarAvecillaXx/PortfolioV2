import React from "react";
import SkillElement from "./SkillElement.jsx";
import mySkills from "../../../models/mySkills.js";

const MySkills = () => {
  return (
    <div>
      <div>
        <h2>Tech Skills</h2>
      </div>

      <div>
        {mySkills.map(({ name, logo }) => (
          <SkillElement name={name} icon={logo} key={name + 'Skill'} />
        ))}
      </div>
    </div>
  );
};

export default MySkills;
