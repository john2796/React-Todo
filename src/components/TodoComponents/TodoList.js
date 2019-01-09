import React from "react";
import Todo from "./Todo";

const TodoList = ({ data }) =>
  data.map((item, index) => <Todo key={index} item={item} />);

export default TodoList;
