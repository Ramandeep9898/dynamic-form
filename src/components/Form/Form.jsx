import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Checkbox } from "../Checkbox/Checkbox";
import { Dropdown } from "../Dropdown/Dropdown";
import { Chips } from "../Chips/Chips";

export const Form = ({ config, onSubmitHandler }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

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

  const handleSubmit = () => {
    let formIsValid = true;
    const newErrors = {};

    config.forEach((ele) => {
      if (ele.required && !formData[ele.name]) {
        newErrors[ele.name] = `${ele.label} field is required.`;
        formIsValid = false;
      }
      if (ele.type === "text") {
        if (
          ele.validation &&
          ele.validation.minLength &&
          formData[ele.name]?.length < ele.validation.minLength
        ) {
          newErrors[
            ele.name
          ] = `Minimum ${ele.validation.minLength} characters required.`;
          formIsValid = false;
        }
        if (
          ele.validation &&
          ele.validation.maxLength &&
          formData[ele.name]?.length > ele.validation.maxLength
        ) {
          newErrors[
            ele.name
          ] = `Maximum ${ele.validation.maxLength} characters allowed.`;
          formIsValid = false;
        }
      }
    });

    setErrors(newErrors);

    if (formIsValid) {
      onSubmitHandler(formData);
      setFormData({});
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
      chips: (
        <Chips element={ele} handleChange={handleChange} formData={formData} />
      ),
    };
    return obj[ele.type];
  };

  return (
    <div>
      {config.map((ele, index) => {
        if (ele.rule) {
          if (formData[ele.rule.key]?.includes(ele.rule.value)) {
            return <div key={index}>{returnComponents({ ele })}</div>;
          } else {
            return null;
          }
        }
        return <div key={index}>{returnComponents({ ele })}</div>;
      })}
      <button onClick={handleSubmit}>Submit</button>

      {Object.keys(errors).map((key) => (
        <div key={key} style={{ color: "red" }}>
          {errors[key]}
        </div>
      ))}
    </div>
  );
};
