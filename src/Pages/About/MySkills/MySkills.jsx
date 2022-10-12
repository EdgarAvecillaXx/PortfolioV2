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
        {mySkills.map(skill => (
          <SkillElement
            name={skill}
            icon={`${skill}Icon`}
            key={skill + "Skill"}
          />
        ))}
      </div>
    </div>
  );
};

export default MySkills;
