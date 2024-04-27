import { Input } from "../components/Input/Input";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { Chips } from "../components/Chips/Chips";
import { MultiInput } from "../components/MutiInput/MultiInput";
import { Form } from "../components/Form/Form";

export const returnComponents = ({ ele, handleChange, formData }) => {
  const obj = {
    text: (
      <Input element={ele} formData={formData} handleChange={handleChange} />
    ),
    checkbox: (
      <Checkbox element={ele} formData={formData} handleChange={handleChange} />
    ),
    select: (
      <Dropdown element={ele} formData={formData} handleChange={handleChange} />
    ),
    chips: (
      <Chips element={ele} handleChange={handleChange} formData={formData} />
    ),
    multi: (
      <Form
        config={ele.fields}
        onChange={(f) => handleChange(null, ele.name, f)}
        layout="horizontal"
        showSubmitButton={false}
      />
    ),
  };
  return obj[ele.type];
};
