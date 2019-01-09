import React from "react";

const TodoForm = ({ inputText, submitHandler, onChangeHandler }) => (
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
      <button>Clear Completed</button>
    </div>
  </React.Fragment>
);

export default TodoForm;
