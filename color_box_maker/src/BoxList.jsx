import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    {
      id: uuid(),
      width: 100,
      height: 100,
      color: "red",
    },
    {
      id: uuid(),
      width: 100,
      height: 100,
      color: "cyan",
    },
    {
      id: uuid(),
      width: 100,
      height: 100,
      color: "goldenrod",
    },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (box) => {
    let newBox = {
      ...box,
      id: uuid(),
    };
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((b) => b.id !== id));
  };

  return (
    <div className="BoxList">
      {boxes.map((box) => (
        <Box
          id={box.id}
          key={box.id}
          width={box.width}
          height={box.height}
          color={box.color}
          removeBox={removeBox}
        />
      ))}
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;
