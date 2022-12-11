import React from "react";

const Box = ({ id, width, height, color, removeBox }) => {
  return (
    <div className="Box">
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color,
        }}
      ></div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
};

export default Box;
