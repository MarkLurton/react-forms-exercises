import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function () {
  const { queryByText, getByLabelText, container } = render(<BoxList />);
  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");
  const colorInput = getByLabelText("Color");
  const btn = queryByText("Add Box");
  let boxes = container.getElementsByClassName("Box");
  expect(boxes.length).toBe(3);
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.click(btn);
  boxes = container.getElementsByClassName("Box");
  expect(boxes.length).toBe(4);
});

it("should remove item", function () {
  const { queryAllByText, container } = render(<BoxList />);
  let boxes = container.getElementsByClassName("Box");
  expect(boxes.length).toBe(3);
  const btn = queryAllByText("X");
  fireEvent.click(btn[0]);
  boxes = container.getElementsByClassName("Box");
  expect(boxes.length).toBe(2);
});
