import React from "react";
import Todo from "./Todo";

const TodoList = ({ data, strikeThroughHandler }) =>
  data.map(item => {
    return (
      <Todo
        key={item.id}
        item={item}
        completed={item.completed}
        strikeThroughHandler={() => strikeThroughHandler(item.id)}
      />
    );
  });

export default TodoList;
