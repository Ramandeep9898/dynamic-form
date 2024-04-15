import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Checkbox } from "../Checkbox/Checkbox";
import { Dropdown } from "../Dropdown/Dropdown";

export const Form = ({ config, onSubmitHandler }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      const updatedData = { ...formData };
      if (!updatedData[name]) {
        updatedData[name] = [];
      }
      if (checked) {
        updatedData[name] = [...updatedData[name], value];
      } else {
        updatedData[name] = updatedData[name].filter((item) => item !== value);
      }
      setFormData(updatedData);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const returnComponents = ({ ele }) => {
    const obj = {
      text: (
        <Input element={ele} formData={formData} handleChange={handleChange} />
      ),
      checkbox: (
        <Checkbox
          element={ele}
          formData={formData}
          handleChange={handleChange}
        />
      ),
      select: (
        <Dropdown
          element={ele}
          formData={formData}
          handleChange={handleChange}
        />
      ),
    };
    return obj[ele.type];
  };
  return (
    <div>
      {config.map((ele, index) => (
        <div key={index}>{returnComponents({ ele })}</div>
      ))}
      <button
        onClick={() => {
          onSubmitHandler(formData);
          setFormData({});
        }}
      >
        Submit
      </button>
    </div>
  );
};
