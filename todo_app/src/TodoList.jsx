import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const INITIAL_STATE = [
    {
      id: uuid(),
      task: "Water Plants",
      complete: false,
    },
    {
      id: uuid(),
      task: "Vacuum Apartment",
      complete: false,
    },
    {
      id: uuid(),
      task: "Make Bed",
      complete: false,
    },
  ];
  const [todos, setTodos] = useState(INITIAL_STATE);

  const addTodo = (todo) => {
    const newTodo = { ...todo };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markComplete = (id) => {
    setTodos(
      todos.map((task) => {
        if (task.id === id) {
          task.complete = true;
        }
        return task;
      })
    );
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          complete={todo.complete}
          markComplete={() => markComplete(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
