import React from "react";

const StackElement = ({ name, value }) => {
  return (
    <div>
      <span>{name}</span>
      <div>
        <div aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}></div>
      </div>
    </div>
  );
};

export default StackElement;
