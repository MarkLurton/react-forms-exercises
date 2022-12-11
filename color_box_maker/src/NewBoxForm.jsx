import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    width: 0,
    height: 0,
    color: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
