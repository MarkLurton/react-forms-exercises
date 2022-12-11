import React from "react";

const Todo = ({ id, task, complete, markComplete, removeTodo }) => {
  const style = complete ? { textDecoration: "line-through" } : {};
  return (
    <div className="Todo">
      <p style={style}>{task}</p>
      <button onClick={markComplete}>Mark as completed</button>
      <button onClick={removeTodo}>X</button>
    </div>
  );
};

export default Todo;
