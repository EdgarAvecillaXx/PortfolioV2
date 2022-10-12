import React from "react";

const Info = ({ name, value }) => {
  return (
    <li>
      <i /> <strong>{name}</strong> <span>{value}</span>
    </li>
  );
};

export default Info;
