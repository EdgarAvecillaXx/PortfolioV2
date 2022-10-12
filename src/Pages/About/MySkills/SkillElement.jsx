import React from "react";

const SkillElement = ({ icon, name }) => {
  return (
    <div>
      <div>
        <i>{icon}</i>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default SkillElement;
