import { type } from "@testing-library/user-event/dist/type";

export const formConfig = [
  {
    type: "text",
    name: "textInput",
    label: "Text Input",
    placeholder: "Enter text",
    defaultValue: "",
    required: true,
    validation: {
      minLength: 3,
      maxLength: 10,
    },
  },
  {
    type: "checkbox",
    name: "singleCheckbox",
    label: "Single Checkbox",
    checked: false,
    required: true,
  },
  // {
  //   type: "chips",
  //   name: "multiSelectChips",
  //   label: "Color",
  //   options: [
  //     {
  //       label: "green",
  //       id: "1",
  //     },
  //     {
  //       label: "red",
  //       id: "2",
  //     },
  //     {
  //       label: "blue",
  //       id: "3",
  //     },
  //     {
  //       label: "pink",
  //       id: "4",
  //     },
  //   ],
  //   required: true,
  // },
  {
    type: "checkbox",
    name: "hobbies",
    label: "Hobbies",
    required: true,
    options: [
      {
        label: "Coding",
        value: "coding",
        checked: false,
      },
      {
        label: "Sports",
        value: "sports",
        checked: false,
      },
      {
        label: "Reading",
        value: "Reading",
        checked: false,
      },
    ],
  },

  {
    type: "select",
    rule: {
      key: "hobbies",
      value: "coding",
    },
    name: "domain",
    label: "domain",
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

  {
    type: "select",
    visible: false,
    rule: {
      key: "hobbies",
      value: "coding",
    },
    name: "stack",
    label: "stack",
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
  {
    type: "select",
    visible: true,

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
