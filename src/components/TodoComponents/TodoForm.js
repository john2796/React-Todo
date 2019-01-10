import React from "react";

const TodoForm = ({
  inputText,
  submitHandler,
  onChangeHandler,
  deleteTodo
}) => (
  <React.Fragment>
    <div
      className="container"
      style={{
        display: "flex"
      }}
    >
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="inputText"
          value={inputText}
          onChange={onChangeHandler}
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={deleteTodo}>Clear Completed</button>
    </div>
  </React.Fragment>
);

export default TodoForm;
