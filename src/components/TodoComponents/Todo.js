import React from "react";

const Todo = ({ item, strikeThroughHandler, completed }) => (
  <li
    style={
      completed
        ? { textDecoration: "line-through", color: "red" }
        : { color: "black" }
    }
    onClick={strikeThroughHandler}
  >
    {item.text}
  </li>
);
export default Todo;
