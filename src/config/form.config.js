export const formConfig = [
  {
    type: "text",
    name: "textInput",
    label: "Text Input",
    placeholder: "Enter text",
    defaultValue: "",
    required: true,
  },

  {
    type: "checkbox",
    name: "singleCheckbox",
    label: "Single Checkbox",
    checked: false,
  },

  {
    type: "checkbox",
    name: "multipleCheckboxes",
    label: "Multiple Checkboxes",
    options: [
      {
        label: "Option 1",
        value: "option1",
        checked: false,
      },
      {
        label: "Option 2",
        value: "option2",
        checked: false,
      },
      {
        label: "Option 3",
        value: "option3",
        checked: false,
      },
    ],
  },
  {
    type: "select",
    name: "dropdown",
    label: "Dropdown",
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
      },
    ],
    defaultValue: "",
    required: true,
  },
];