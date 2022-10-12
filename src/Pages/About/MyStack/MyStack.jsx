import React from "react";
import StackElement from "./StackElement.jsx";
import myStack from "../../../models/myStack.js";

const MyStack = () => {
  return (
    <div>
      <div>
        <h2>Stack</h2>
      </div>
      <div>
        {myStack.map(stack => (
          <StackElement
            name={stack.name}
            value={stack.val}
            key={stack.name + "Stack"}
          />
        ))}
      </div>
    </div>
  );
};

export default MyStack;
