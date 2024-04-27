import React, { useEffect, useState } from "react";
import { returnComponents } from "../../ulti/returnComponent";

export const Form = ({
  config,
  onChange,
  layout,
  onSubmitHandler,
  showSubmitButton,
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    onChange && onChange(formData);
  }, [formData]);

  const handleChange = (event, fieldName, val) => {
    if (fieldName && val) {
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: val,
      }));
      return;
    }

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

  return (
    <div
      style={{
        display: layout === "horizontal" ? "flex" : "block",
      }}
    >
      {config.map((ele, index) => {
        if (ele.rule) {
          if (ele.rule.condition) {
            if (ele.rule.condition === ">") {
              if (Number(formData[ele.rule.key]) > ele.rule.value) {
                return (
                  <div key={index}>
                    {returnComponents({ ele, handleChange, formData })}
                  </div>
                );
              } else return null;
            } else return null;
          } else if (formData[ele.rule.key]?.includes(ele.rule.value)) {
            return (
              <div key={index}>
                {returnComponents({ ele, handleChange, formData })}
              </div>
            );
          } else {
            return null;
          }
        }
        return (
          <div key={index}>
            {returnComponents({ ele, handleChange, formData })}
          </div>
        );
      })}
      {showSubmitButton && <button onClick={handleSubmit}>Submit</button>}

      {Object.keys(errors).map((key) => (
        <div key={key} style={{ color: "red" }}>
          {errors[key]}
        </div>
      ))}
    </div>
  );
};
