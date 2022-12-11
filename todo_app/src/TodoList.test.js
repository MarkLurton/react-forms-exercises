import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function () {
  const { queryByText, queryByLabelText, container } = render(<TodoList />);
  const input = queryByLabelText("Task");
  const btn = queryByText("Add Todo");
  let boxes = container.getElementsByClassName("Todo");
  expect(boxes.length).toBe(3);
  fireEvent.change(input, { target: { value: "Do Dishes" } });
  fireEvent.click(btn);
  boxes = container.getElementsByClassName("Todo");
  let todo = queryByText("Do Dishes");
  expect(boxes.length).toBe(4);
  expect(todo).toBeInTheDocument();
});

it("should remove item", function () {
  const { queryAllByText, container } = render(<TodoList />);
  let todos = container.getElementsByClassName("Todo");
  expect(todos.length).toBe(3);
  const btn = queryAllByText("X");
  fireEvent.click(btn[0]);
  todos = container.getElementsByClassName("Todo");
  expect(todos.length).toBe(2);
});
